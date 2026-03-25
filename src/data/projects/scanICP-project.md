# Internet Computer 블록체인 익스플로러 — Frontend

## 📋 프로젝트 개요

### Introduction

**Internet Computer (IC)** explorer frontend for tokens, addresses, and transactions, with **SNS (Service Nervous System)** governance exploration. It integrates external APIs such as **BeatSwap** for IPL transaction details (`beatswap-*` IDs) and uses **viem** on **BNB Chain (BSC)** to aggregate ERC-20 **BTX** holder balances (lock/unlock sections). **Multi-chain, multi-source** data is presented in one UI with `@dfinity` Agent/Actor patterns and route-level code splitting.

### 프로젝트 소개

**Internet Computer(IC)** 네트워크의 토큰·주소·트랜잭션을 조회하고, **SNS** 거버넌스 정보를 탐색할 수 있는 웹 익스플로러입니다. BeatSwap 등 외부 API와 연동해 IPL 트랜잭션 상세를 보여 주고, **BSC** 상 ERC-20(BTX) 홀더·락/언락 구성을 **viem**으로 집계하는 화면 등 멀티 체인·멀티 소스 데이터를 한 UI에서 다룹니다.

**개발 기간**: [기간 입력]  
**역할**: Frontend Developer (주도 개발)

---

## 🛠 기술 스택

### Core

- **Vite 5.x** - 빌드·개발 서버
- **TypeScript 5.x** - 타입 안정성
- **React 18** - UI
- **React Router DOM 5** - 라우팅

### UI / Styling

- **MUI (Material UI) 5** - 컴포넌트·그리드·테이블
- **Emotion**, **Sass/SCSS**, **styled-components**
- **Framer Motion**, **AOS** - 애니메이션

### Internet Computer

- **@dfinity/agent**, **@dfinity/candid**, **@dfinity/principal**, **@dfinity/identity**
- **@dfinity/nns**, **@dfinity/ledger-icp**, **@dfinity/ledger-icrc** 등

### EVM (BSC)

- **viem 2.x** - 퍼블릭 클라이언트, ERC-20 읽기 전용 호출

### Data Fetching

- **SWR 2.x** - 캐싱·재검증
- **Axios**, `fetch` 기반 커스텀 훅 (`useCallsData` 등)

### Charts & Visualization

- **Highcharts**, **D3.js**

### Utilities

- **Lodash**, **dayjs** / **date-fns**, **BigNumber**, QR, **xlsx**, **Sentry** 클라이언트

### Infra / Deploy (참고)

- **배포 스크립트**: `scripts/deploy.sh`, `deploy-release.sh`, `deploy-test.sh`
- **vite-plugin-environment** — `CANISTER_*`, `DFX_*` 주입

---

## ✨ 주요 기능

### 1. 토큰 · 주소 · 트랜잭션

- IC 토큰 목록(정렬·페이지네이션), 토큰 상세, 주소 상세, 트랜잭션 목록·상세
- 토큰 홀더 차트 (`/token/tokenholderchart/:id`)
- BeatSwap 총 공급량·총 트랜잭션 수 등 보조 API 연동 훅

### 2. SNS (Service Nervous System)

- **Candid/IDL** 기반 `HttpAgent` (`ic0.app`) 호출 (`src/pages/sns/ic.ts` 등)
- SNS 상세 대시보드: 뉴런·제안·트랜잭션·총공급·트레저리·계정 정보 등 병렬 `fetch`
- 제안 목록, 뉴런 목록·상세, SNS 트랜잭션 목록

### 3. IPL / BeatSwap 트랜잭션

- 트랜잭션 ID가 `beatswap-` 접두사일 때 BeatSwap API(`getTokenTransactionDetail`)로 상세 매핑 (`useIPLTransaction`)

### 4. BTX · BSC 잔액 화면

- BNB Chain 메인넷 RPC, ERC-20 최소 ABI로 `totalSupply`, 지갑별 `balanceOf`
- 언락·락 섹션별 행·합계·비율 (`useBtxBalances`, `/btx/balances`)
- 전용 레이아웃(헤더/푸터 비표시) 대시보드형 UI

### 5. AI 스토리지 / 캐니스터

- Index / Storage 캐니스터 테이블 뷰 (`useICECanister`, `/ai-storage` 등)

### 6. 기타

- 스폰서/기부(`Donate`), About(`about-ice`), 다크/라이트 테마(`ColorModeContext`)

---

## 🏗 프로젝트 구조

```
src/
├── App.tsx                 # Router, 레이아웃(BTX 경로 예외), 전역 Provider
├── routes.tsx              # lazy 라우트
├── pages/
│   ├── token/
│   ├── address/
│   ├── transactions/
│   ├── sns/
│   ├── btx/
│   ├── ai-data/
│   ├── about.tsx, donate.tsx
│   └── ...
├── hooks/                  # useTokens, useBtxBalances, useIPLTransaction, useActor 등
├── components/
├── context/                # Config, Global, ColorMode
├── actor/                  # BaseActor, Actor 헬퍼
├── utils/
├── styles/                 # global.scss
└── declarations/           # DFX/Candid 생성물
public/
```

---

## 🎯 주요 구현 내용

### 1. 라우팅과 로딩 UX

- **React.lazy** + **Suspense**로 페이지 단위 지연 로딩, 공통 `Loading` 폴백

### 2. Internet Computer 연동

- **HttpAgent** + **Actor.createActor** / `useActor`·`getActor`로 캐니스터별 쿼리
- SNS 전용 `fetch` + Candid 서비스 병행

### 3. 멀티 체인 데이터

- **IC**: 공식 에이전트·캐니스터 호출
- **BSC**: viem `createPublicClient` + `readContract` 읽기 전용 잔액 집계

### 4. 외부 REST API

- BeatSwap, SNS 메타데이터 등 도메인별 `fetch` / Axios 유틸 캡슐화

### 5. UI/UX

- MUI 그리드·테이블·테마, 반응형·다크모드
- BTX 페이지 별도 레이아웃 분기 (`App.tsx`)

### 6. 성능·품질

- 라우트 스플리팅, SWR 캐싱, ESLint·Prettier·TypeScript

---

## 🎨 UI/UX 특징

- **MUI 기반** 일관된 디자인 시스템과 테마 전환
- **목록·상세·차트**로 스캔 탐색 플로우
- **BTX 대시보드**: 락/언락 구분, 비율·합계 가독성
- **로딩 스피너**, NoData, 에러 메시지 패턴

---

## 🚀 개발 환경 설정

```bash
npm install
npm run dev
npm run build
npm run preview
```

### 환경 변수 (예시)

- `CANISTER_*`, `DFX_*` — `vite.config.ts`의 `vite-plugin-environment` 참고
- 배포·캐니스터 ID는 팀 표준에 맞게 `.env` 구성

---

## 📱 지원 플랫폼

- **모던 브라우저** (Chrome, Safari, Firefox 등)
- **반응형** 레이아웃 (데스크톱·태블릿·모바일)

---

## 🔧 주요 기술적 도전과제 및 해결

### 1. IC와 EVM 데이터 모델 혼재

- **문제**: Principal/캐니스터 중심 IC 데이터와 EVM 주소·ERC-20 단위가 한 서비스에 공존
- **해결**: 도메인별 훅 분리(`useBtxBalances` vs `useTokens` / `useActor`), 라우트·훅 경계로 체인 클라이언트 구분

### 2. 외부 API와 익스플로어 ID 규칙

- **문제**: 내부 트랜잭션 ID(`beatswap-*`)와 BeatSwap API 응답 매핑
- **해결**: ID 파싱·검증 후 단일 상세 API 호출, `useCallsData`로 로딩/에러 일관 처리

### 3. 대용량 테이블·목록 UX

- **문제**: 토큰/트랜잭션 목록의 정렬·페이지 크기·뷰포트 의존
- **해결**: 클라이언트 정렬·페이지네이션, 높이 기반 row 수 추정 등

### 4. SNS 데이터 병렬성

- **문제**: SNS 상세에 여러 소스 동시 로딩
- **해결**: `Promise`/`fetch` 병렬 호출, 로딩·에러 상태 분리 표시

---

## 📊 성능 최적화

- **React.lazy** + **Suspense**로 라우트 단위 코드 스플리팅
- **SWR** 캐싱으로 중복 요청 완화
- **React.memo**·**useMemo** 등으로 불필요한 리렌더 완화

---

## 🔐 보안 고려사항

- 읽기 전용 **view** 호출 위주; 서명 필요 작업은 지갑·화이트리스트 패턴(`actor` 타입 선언)에 맞춤
- 외부 API 응답 검증·실패 시 UI 폴백
- 환경 변수·비밀키는 저장소에 직접 커밋하지 않도록 관리

---

## 📚 학습 및 성장

- **Vite + React** SPA 아키텍처와 프로덕션 빌드
- **@dfinity** Agent/Actor/Candid 기반 **IC** 클라이언트 개발
- **viem**을 이용한 **EVM** 읽기 전용 연동
- **TypeScript**로 대규모 컴포넌트·훅 타입 정리
- **SWR / 커스텀 fetch 훅**으로 서버 상태와 로딩 UX 통일
- 블록체인 **익스플로어 도메인**(주소·토큰·거버넌스) 이해

---

## 🎓 기술 스택 요약

| 카테고리 | 기술 |
|---------|------|
| **Build** | Vite 5, TypeScript 5 |
| **UI** | React 18, MUI 5, Sass, Emotion |
| **Routing** | React Router DOM 5 |
| **IC** | @dfinity/agent, Candid, NNS/Ledger 패키지 |
| **EVM** | viem 2.x (BSC 읽기 전용) |
| **Data** | SWR, Axios, fetch 훅 |
| **Charts** | Highcharts, D3.js |
