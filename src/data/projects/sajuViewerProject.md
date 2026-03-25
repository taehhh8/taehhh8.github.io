# SAJU Viewer

> **프로젝트 기간**: [2024.11~2025.2]  
> **역할**: Full-stack Developer (단독 개발)  
> **프로젝트 유형**: 사주·MBTI 분석 및 개인 결과 저장 웹 서비스

## 프로젝트 개요

사용자의 생년월일시·성별 입력을 기반으로 사주 결과를 분석하고, MBTI 결과와 함께 저장·관리할 수 있는 웹 서비스입니다.

`saju-viewer`는 단순 결과 출력 앱이 아니라, 다음 흐름을 갖는 실사용 구조를 목표로 만들었습니다.

- 사용자 입력 기반 사주 계산
- 인증 기반 개인 결과 저장
- 대시보드에서 히스토리 조회 및 프로필 관리

Phase 단위로 기능을 확장하며 아키텍처와 도메인 로직을 분리해 유지보수성을 높였습니다.

---

## 기술 스택

### Frontend

- **Framework**: Next.js (App Router), React, TypeScript

### Auth · Data

- **Auth**: NextAuth.js (Credentials), Supabase Auth
- **DB**: Supabase (PostgreSQL + RLS)

### Styling

- SCSS·Tailwind 기반 UI 스타일링

### Domain

- `korean-lunar-calendar`, `dayjs`

---

## 주요 기능

- **사주 계산 엔진**
  - 기본 계산 + 고급 계산 옵션 지원
  - 음력 변환, 간지 계산, 사주팔자 계산 로직 분리
- **인증 시스템**
  - NextAuth Credentials + Supabase Auth 연동
  - 로그인·회원가입·세션 관리
  - 보호 라우트 접근 제어
- **데이터 저장**
  - 사용자별 사주 결과·MBTI 결과·통합 프로필 저장
  - Supabase RLS 기반 권한 제어
- **사용자 대시보드**
  - 최근 결과 목록, 통계 카드, 프로필 수정
  - Empty state·로딩·에러 상태 처리

---

## 프로젝트 구조

```text
src/
├── app/
│   ├── auth/                     # 로그인/회원가입
│   ├── dashboard/                # 대시보드/프로필
│   ├── components/               # AuthButton, SaveResultButton 등
│   ├── api/auth/[...nextauth]/   # NextAuth API route
│   └── lib/
│       ├── saju.ts               # 사주 도메인 진입점
│       └── calendar/             # 음력/절기/간지 계산 모듈
├── lib/supabase/                 # 브라우저/서버 Supabase 클라이언트
├── auth.ts
├── auth.config.ts
└── middleware.ts
```

---

## 주요 구현 내용

### 도메인·레이어 분리

- `src/app/lib/saju.ts`와 `src/app/lib/calendar/*`에 도메인 계산 로직을 분리해 UI와 독립적으로 테스트·확장 가능하게 구성
- App Router 구조에서 페이지 단위 서버 렌더링 + 필요한 컴포넌트만 Client Component로 분리

### 인증 구조

- 인증은 `src/auth.ts`, `src/auth.config.ts`, `src/app/api/auth/[...nextauth]/route.ts`로 분리하여 설정과 라우트 책임을 나눔

---

## UI/UX 특징

- **App Router** 기반 페이지 구조와 보호 라우트로 인증 흐름 명확화
- **SCSS·Tailwind**로 컴포넌트 단위 스타일 정리
- 대시보드 **Empty state·로딩·에러** 상태를 구분해 표시

---

## 개발·실행 환경

### 의존성 설치

```bash
npm install
```

### 환경 변수

프로젝트 루트에 `.env.local` 파일을 만들고 아래 값을 채웁니다.

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
AUTH_SECRET=...
```

`AUTH_SECRET` 생성:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### DB 스키마

- `supabase/migrations/001_initial_schema.sql` 실행
- 테이블·정책(RLS) 생성 확인

### 개발 서버

```bash
npm run dev
```

---

## 지원 플랫폼

- **웹 브라우저** (Chrome, Safari, Firefox 등)
- **반응형** 레이아웃

---

## 기술적 도전과 해결

### 1) Auth.js `MissingSecret`로 세션 API 500

- **증상**: `ClientFetchError`, `/api/auth/session` 500
- **원인**: `AUTH_SECRET` 누락
- **해결**: `.env.local`에 `AUTH_SECRET` 추가, dev 서버 재시작

### 2) 로그인 실패 (`CredentialsSignin`)

- **증상**: 로그인 UI에서 "이메일 또는 비밀번호 오류"
- **원인**: Supabase `invalid_credentials` (실제 인증 불일치)
- **해결**: 서버 로그를 상세 출력하도록 개선해 원인(비밀번호 불일치·인증 미완료)을 구분 가능하게 변경

### 3) Supabase 프로젝트 paused 상태

- **증상**: 회원가입·로그인 API 호출 실패 또는 불안정
- **원인**: Free 플랜 비활성으로 프로젝트 일시 정지
- **해결**: 프로젝트 Resume 후 URL·KEY 재확인

---

## 성과 및 기여

- Phase 1: 사주 계산 코어 및 캘린더 모듈 구현 완료
- Phase 2: 인증 시스템 구현 완료
- Phase 3: 사용자 대시보드 구현 완료

**다음 단계**

- 결제·구독 플로우 통합
- 결과 상세·삭제·검색·필터링 UX 강화

---

## 보안 고려사항

- `.env.local`은 절대 커밋하지 않기
- `SUPABASE_SERVICE_ROLE_KEY`는 서버에서만 사용
- RLS 정책 활성화 및 사용자별 접근 제어 확인
- 인증 메일 반복 요청 시 rate limit 고려

---

## 참고 문서

- `PHASE1_COMPLETION.md`
- `PHASE2_AUTH_COMPLETION.md`
- `PHASE3_DASHBOARD_COMPLETION.md`
- `SUPABASE_SETUP_GUIDE.md`
