import fs from 'fs';
import path from 'path';

/**
 * README 마크다운 파일에서 프로젝트 정보를 추출합니다
 * @param readmeContent README 마크다운 내용
 * @returns 추출된 프로젝트 정보
 */
export function parseReadme(readmeContent: string) {
  const result = {
    title: '',
    description: '',
    technologies: [] as string[],
  };

  if (!readmeContent) {
    return result;
  }

  const lines = readmeContent.split('\n');

  // 제목 추출: 첫 번째 # 또는 ## 제목
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('#') && !result.title) {
      result.title = trimmed
        .replace(/^#+\s*/, '')
        .replace(/[#*`_~]/g, '')
        .trim();
      // 이모지 제거
      result.title = result.title.replace(/[^\w\s가-힣.,!?\-()]/g, '').trim();
      break;
    }
  }

  // 설명 추출: 제목 다음 첫 번째 의미있는 문단
  let foundTitle = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith('#') && !foundTitle) {
      foundTitle = true;
      continue;
    }

    if (
      foundTitle &&
      line &&
      !line.startsWith('#') &&
      !line.startsWith('>') &&
      !line.startsWith('![') &&
      !line.startsWith('```') &&
      !line.startsWith('-') &&
      // `* ` 만 리스트로 간주 (줄 첫 볼드 `**...` 는 설명 문단으로 허용)
      !line.match(/^\*\s/) &&
      !line.match(/^\d+\./)
    ) {
      // 마크다운 링크 제거: [text](url) -> text
      let description = line.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
      // 마크다운 문법 제거
      description = description.replace(/[#*`_~]/g, '').trim();
      // 이모지 및 특수문자 제거 (한글, 영문, 숫자, 기본 구두점만 유지)
      description = description
        .replace(/[^\w\s가-힣.,!?\-()]/g, '')
        .trim();

      // 카드·헤더용 한 줄 (볼드·괄호 제거 후에도 긴 영문 소개가 있을 수 있음)
      if (description.length > 20 && description.length <= 500) {
        result.description = description;
        break;
      }
    }
  }

  // 기술 스택 추출 - 라인별 파싱 방식
  const techKeywords = [
    '기술',
    'Tech',
    'Stack',
    'Built with',
    '사용 기술',
    'Technologies',
    'Tools',
    '기술 스택',
    'Tech Stack',
  ];

  let foundTechSection = false;
  let inTechSection = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // 기술 스택 섹션 시작 찾기
    if (!foundTechSection && line.match(/^##?\s*.*(기술|Tech|Stack|Built with|사용 기술|Technologies|Tools|기술 스택|Tech Stack)/i)) {
      foundTechSection = true;
      inTechSection = true;
      continue;
    }
    
    // 다음 주요 섹션(##)을 만나면 종료
    if (inTechSection && line.match(/^##\s+/) && !line.match(/^##?\s*.*(기술|Tech|Stack|Built with|사용 기술|Technologies|Tools|기술 스택|Tech Stack)/i)) {
      break;
    }
    
    // 기술 스택 섹션 내에서 리스트 항목 추출
    if (inTechSection && line.match(/^[-*]\s+/)) {
      // 리스트 마커 제거
      let tech = line.replace(/^[-*\s]+/, '');
      
      // 볼드 마크다운에서 라벨 제거: **Framework**: Next.js -> Next.js
      // 형식: - **Framework**: Next.js 14.2.5 (App Router)
      if (tech.includes(':')) {
        const colonIndex = tech.indexOf(':');
        const afterColon = tech.substring(colonIndex + 1).trim();
        
        // 콜론 뒤의 내용에서 기술 이름 추출
        tech = afterColon;
      }
      
      // 볼드 마크다운 제거: **React** -> React
      tech = tech.replace(/\*\*([^*]+)\*\*/g, '$1');
      
      // 괄호 안의 설명 제거: Next.js 14.2.5 (App Router) -> Next.js 14.2.5
      tech = tech.replace(/\s*\([^)]*\)/g, '');
      
      // 버전 번호 제거: Next.js 14.2.5 -> Next.js (다양한 형식 지원)
      tech = tech.replace(/\s+\d+\.\d+(\.\d+)?(-\w+)?(\s*-\s*|$)/g, '');
      
      // 설명 부분 제거: Next.js - UI 라이브러리 -> Next.js
      const parts = tech.split(/\s*-\s+/);
      if (parts.length > 1) {
        // 첫 번째 부분이 짧으면(기술 이름) 그것만 사용
        tech = parts[0].trim().length < 30 ? parts[0].trim() : tech;
      }
      
      // 링크 제거: [text](url) -> text
      tech = tech.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
      
      // 마크다운 문법 제거
      tech = tech.replace(/[#*`_~]/g, '').trim();
      
      // 유효한 기술 이름인지 확인
      const excludedKeywords = [
        'Core', 'UI', 'UX', '기타', '개발', 'Web3', 'Blockchain',
        '도구', 'Tools', '개발 도구', 'Dev', 'Development', '&',
        'Framework', 'Language', 'Library', 'Runtime', 'Styling',
        'State Management', 'HTTP Client', 'UI Components', 'Backend',
        '협업', 'Frontend', 'Integration'
      ];
      
      const isValidTech = (
        tech.length > 0 &&
        tech.length < 50 &&
        !excludedKeywords.some(keyword => 
          tech.toLowerCase() === keyword.toLowerCase() || 
          tech.toLowerCase().includes(keyword.toLowerCase())
        ) &&
        !tech.match(/^\d+$/) && // 숫자만 있는 것 제외
        !tech.match(/^[가-힣\s]+$/) && // 한글만 있는 것 제외 (설명일 가능성)
        tech.match(/[a-zA-Z]/) // 영문자가 포함되어야 함
      );
      
      if (isValidTech) {
        result.technologies.push(tech);
      }
    }

    // 기술 스택 섹션 내 마크다운 테이블 (| **항목** | Next.js … |)
    if (inTechSection && line.includes('|')) {
      const t = line.trim();
      if (!t.startsWith('|')) {
        continue;
      }
      const parts = t
        .split('|')
        .map((p) => p.trim())
        .filter((p) => p.length > 0);
      if (parts.length < 2) {
        continue;
      }
      if (parts.every((p) => /^:?-{2,}:?$/.test(p))) {
        continue;
      }
      if (
        (parts[0] === '구분' && parts[1] === '기술') ||
        (parts[0].toLowerCase() === 'category' && parts[1].toLowerCase() === 'tech')
      ) {
        continue;
      }
      const valueCell = parts[1];
      const segments = valueCell
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      for (const segment of segments) {
        const slashParts = segment.includes('/')
          ? segment.split('/').map((s) => s.trim()).filter(Boolean)
          : [segment];
        for (let tech of slashParts) {
          tech = tech.replace(/\*\*([^*]+)\*\*/g, '$1');
          tech = tech.replace(/\s*\([^)]*\)/g, '');
          tech = tech.replace(/\s+\d+\.\d+(\.\d+)?(-\w+)?(\s*-\s*|$)/g, '');
          const splitParts = tech.split(/\s*-\s+/);
          if (splitParts.length > 1 && splitParts[0].trim().length < 30) {
            tech = splitParts[0].trim();
          }
          tech = tech.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
          tech = tech.replace(/[#*`_~]/g, '').trim();

          const excludedKeywords = [
            'Core', 'UI', 'UX', '기타', '개발', 'Web3', 'Blockchain',
            '도구', 'Tools', '개발 도구', 'Dev', 'Development', '&',
            'Framework', 'Language', 'Library', 'Runtime', 'Styling',
            'State Management', 'HTTP Client', 'UI Components', 'Backend',
            '협업', 'Frontend', 'Integration',
          ];

          const isValidTech =
            tech.length > 0 &&
            tech.length < 50 &&
            !excludedKeywords.some(
              (keyword) =>
                tech.toLowerCase() === keyword.toLowerCase() ||
                tech.toLowerCase().includes(keyword.toLowerCase()),
            ) &&
            !tech.match(/^\d+$/) &&
            !tech.match(/^[가-힣\s]+$/) &&
            tech.match(/[a-zA-Z]/);

          if (isValidTech) {
            result.technologies.push(tech);
          }
        }
      }
    }
  }
  
  // 중복 제거 및 핵심 기술만 최대 6개 노출
  result.technologies = [...new Set(result.technologies)].slice(0, 6);

  // 코드 블록에서 언어 추출 (fallback) - bash, sh 등은 제외
  if (result.technologies.length === 0) {
    const codeBlockMatches = readmeContent.match(/```(\w+)/g);
    if (codeBlockMatches) {
      const excludedLanguages = ['bash', 'sh', 'shell', 'text', 'plain'];
      result.technologies = [
        ...new Set(
          codeBlockMatches
            .map((match) => match.replace('```', ''))
            .filter((lang) => !excludedLanguages.includes(lang.toLowerCase()))
        ),
      ].slice(0, 10);
    }
  }

  return result;
}

/**
 * 로컬 README 파일을 읽어서 파싱합니다
 * @param filePath README 파일 경로 (src/data 기준)
 * @returns 파싱된 프로젝트 정보
 */
export function readAndParseReadme(filePath: string): {
  title: string;
  description: string;
  technologies: string[];
} {
  try {
    const fullPath = path.join(process.cwd(), 'src', 'data', filePath);
    const content = fs.readFileSync(fullPath, 'utf-8');
    return parseReadme(content);
  } catch (error) {
    console.error(`Failed to read README file: ${filePath}`, error);
    return {
      title: '',
      description: 'README 파일을 읽을 수 없습니다.',
      technologies: [],
    };
  }
}
