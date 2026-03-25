/**
 * README 내용을 포트폴리오 상세 페이지에 맞게 포맷팅합니다
 * - 첫 줄 `#` 제목 제거 (페이지 헤더와 중복)
 * - `## 프로젝트 개요`, `## 기술 스택` 블록 전체 제거 (헤더·태그와 중복)
 * - `## 면접/포트폴리오용 체크리스트` 등 이직 준비용 메모 섹션 제거
 * - 맺음말 각주(이 문서는…) 한 줄 제거
 * - 나머지 섹션은 동일한 단락/구조로 렌더링됩니다
 */
export function formatReadmeForDetail(readmeContent: string): string {
  if (!readmeContent) {
    return '';
  }

  const lines = readmeContent.split('\n');
  const result: string[] = [];
  let skip = false;
  let skipInterview = false;

  const isOverviewHeading = (t: string) =>
    !!t.match(/^##\s*.*(프로젝트 개요|개요|Overview|Project Overview)/i);
  const isTechHeading = (t: string) =>
    !!t.match(/^##\s*.*(기술|Tech|Stack|기술 스택|🛠)/i);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (skipInterview) {
      continue;
    }

    // 면접·체크리스트 섹션부터 끝까지 생략 (공개 포트폴리오용)
    if (trimmed.match(/^##\s*.*(면접|포트폴리오용\s*체크리스트)/i)) {
      skipInterview = true;
      continue;
    }

    // 문서 맺음말 각주
    if (trimmed.match(/^\*+이 문서는/)) {
      continue;
    }

    // 첫 번째 `#` 제목만 제거
    if (i === 0 && trimmed.startsWith('#')) {
      continue;
    }

    if (!skip) {
      if (isOverviewHeading(trimmed) || isTechHeading(trimmed)) {
        skip = true;
        continue;
      }
      result.push(line);
      continue;
    }

    // skip 모드: 다음 `##`까지 건너뜀. 단, 연속으로 개요→기술이 오면 끊기지 않고 계속 스킵
    if (trimmed.match(/^##\s+/)) {
      if (isOverviewHeading(trimmed) || isTechHeading(trimmed)) {
        continue;
      }
      skip = false;
      result.push(line);
      continue;
    }

    // skip 중인 본문 라인
    continue;
  }

  return result.join('\n').trim();
}
