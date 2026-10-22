# 박태현 | Frontend Developer Portfolio

**🔗 https://taehhh8.github.io**

React·Next.js·TypeScript로 서비스 프론트엔드를 설계·운영해 온 4년 차 개발자의 포트폴리오 사이트입니다.
실서비스로 배포·운영한 프로젝트를 문제 → 해결 → 결과 형식의 케이스 스터디로 정리했습니다.

## 주요 프로젝트

회사 저장소는 비공개라서 라이브 URL과 사이트의 상세 페이지로 확인하실 수 있습니다.

| 프로젝트 | 기간 | 핵심 내용 | 링크 |
| --- | --- | --- | --- |
| LINE 미니앱 온보딩 | 2025.05 ~ 2025.08 | LIFF 인앱·외부 브라우저 연결 분기, 다단계 폼 검증(RHF·Zod), 다국어 | [라이브](https://line.khans.io) |
| 텔레그램 미니앱 | 2024.11 ~ 2025.05 | 인앱 스트리밍·리워드·온보딩 화면, 한/영/중 다국어 | [라이브](https://t.me/musikhan_bot/MusiKhan) |
| 예치·보상 플로우 | 2022.10 ~ 2024.05 | 다단계 신청 UX, React+JS → Next.js+TS+Redux Toolkit 마이그레이션 | [라이브](https://staking.khans.io) |
| 런치패드 구매 퍼널 | 2024.04 ~ 2024.10 | 상태별 구매 화면, 무한스크롤·코드 스플리팅 | [라이브](https://launchpad.khans.io) |
| 스왑·대시보드 | 2025.09 ~ | 데이터 밀도 높은 조회 UI, 차트 | [라이브](https://beatswap.io) |
| 조회형 익스플로러 | 2025.09 ~ 2025.11 | 리스트·필터·상세 드릴다운, 라우트 코드 스플리팅 | [라이브](https://scan.beatswap.io) |
| 예치 온보딩 | 2026.01 ~ 2026.03 | 웹·모바일 예치 입력 검증·진행 상태, 5개 언어 | [라이브](https://auggold.com) |
| 사주 조회 서비스 (개인) | 2024.11 ~ 2025.02 | 검색·인증·결과 저장 대시보드, Supabase | [GitHub](https://github.com/taehhh8/SajuViewer) |

## 이 사이트의 기술 스택

- **Framework**: Next.js 16 (App Router, `output: 'export'` 정적 빌드), React 19, React Compiler
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Animation**: Framer Motion
- **Content**: 프로젝트 상세를 Markdown으로 관리하고 빌드 시 파싱 (`react-markdown`)
- **Deploy**: GitHub Actions → GitHub Pages

## 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx                 # 메인 (Hero·About·Skills·Projects·Experience·Contact)
│   └── projects/[id]/page.tsx   # 프로젝트 상세 페이지 (정적 생성)
├── components/                  # 섹션별 컴포넌트 + SCSS Module
├── data/
│   ├── project-config.json      # 프로젝트 목록 (id, 문서 경로, 링크)
│   ├── projects/*.md            # 프로젝트 상세 문서
│   └── projects.ts              # 문서 파싱 + 제목·요약·케이스 스터디·스크린샷 연결
├── assets/                      # 프로젝트 스크린샷
└── utils/                       # Markdown 파서
```

### 프로젝트 추가하기

1. `src/data/projects/`에 상세 문서(`.md`)를 추가합니다.
2. `src/data/project-config.json`에 id, 문서 경로, 라이브·GitHub 링크를 등록합니다.
3. 스크린샷은 `src/assets/`에 넣고 `src/assets/_index.ts`에서 export한 뒤, `src/data/projects.ts`에서 연결합니다.

## 로컬 실행

Node.js 20 이상이 필요합니다.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 정적 결과물이 out/ 에 생성됩니다
```

`main` 브랜치에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드해서 GitHub Pages에 배포합니다.

## 연락처

- **Email**: taehyun8534@gmail.com
- **GitHub**: [@taehhh8](https://github.com/taehhh8)
