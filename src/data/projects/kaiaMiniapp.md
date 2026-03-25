# Kaia LINE DeFi · 리워드 플랫폼 — Frontend

> **프로젝트 기간**: [2025.5~2025.8]  
> **역할**: Frontend Developer (단독 개발)  
> **프로젝트 유형**: LINE Mini App · Kaia Web3 리워드 플랫폼  
> **배포**: [line.khans.io](https://line.khans.io) · [kaia.khans.io](https://kaia.khans.io)

## 프로젝트 개요

### Introduction

**Kaia LINE DeFi** is a web / LINE Mini App frontend that connects **LINE** with the **Kaia** network. Users connect wallets via **LIFF** and **LINE Dapp Portal**, then access staking, liquidity, rewards, referrals, social tasks, and Musikhan (music / NFT) features in one codebase. The app integrates backend APIs with on-chain calls using **ethers v6** and **@kaiachain/ethers-ext**.

### 프로젝트 소개

**LINE** 환경과 **Kaia** 네트워크를 연결하는 웹·미니앱 프론트엔드입니다. 사용자는 지갑 연결 후 스테이킹·유동성 공급·리워드 클레임·친구 초대·소셜 태스크·뮤직(NFT) 관련 기능을 이용할 수 있습니다. 백엔드 API와 블록체인(`ethers` + Kaia 확장)을 함께 사용하며, **Redux Toolkit**으로 도메인별 상태를 관리합니다.

---

## 기술 스택

### Core

- **Next.js 15.x** - App Router, `line-frontend`
- **TypeScript 5.x** - 타입 안정성
- **React 19** - UI 라이브러리

### State Management

- **Redux Toolkit 2.8.x** - 전역 상태 관리
- **React Redux 9.x** - React-Redux 바인딩

### Forms & Validation

- **React Hook Form** - 폼 상태
- **Zod** - 스키마 검증
- **@hookform/resolvers** - Zod 연동

### Web3 & Blockchain

- **ethers 6.x** - 이더리움 호환 API
- **@kaiachain/ethers-ext** - Kaia Provider / 트랜잭션 확장
- **@kaiachain/js-ext-core** - Kaia JS 유틸

### LINE / Wallet

- **@line/liff** - LINE Front-end Framework
- **@linenext/dapp-portal-sdk** - LINE Dapp Portal (지갑 연동)

### Styling

- **Bootstrap 5** - UI 그리드·컴포넌트
- **Sass / CSS Modules** - 컴포넌트 스코프 스타일
- **Tailwind CSS 4** - 유틸리티 스타일
- **styled-components** - 일부 스타일링

### Internationalization

- **next-intl** - 다국어 (로케일 프리픽스 라우팅)
- **미들웨어** - 선호 locale 쿠키, Accept-Language, Geo 헤더 고려

### UI / UX Libraries

- **react-toastify** - 토스트 알림
- **SweetAlert2** - 모달·알림

### HTTP & Data

- **Axios** - REST API 통신
- **decimal.js** - 금액 정밀 연산
- **flatted** - 직렬화 등

### Privacy & Identity

- **@semaphore-protocol/\*** - Identity 연동 (문서·코드 기준)

### Authentication

- **jsonwebtoken** / **jwt-decode** - JWT 발급·검증 (쿠키 연동)

### Backend (협업, `main-backend`)

- **Node.js** - 런타임
- **Express 4.19.x** - API 서버
- **TypeScript 5.4.x**
- **MySQL (mysql2)** / **Sequelize ORM**
- **Redis** - 캐시
- **ethers 5.7.x** / **@kaiachain/ethers-ext** - 백엔드 체인 연동
- **Helmet**, **CORS**, **compression**, **cookie-parser**, **Winston** - 보안·운영

> 참고: `package.json` 기준 **React Query(@tanstack/react-query)는 사용하지 않습니다.** 서버·체인 데이터는 Redux Thunk, API 모듈, 컴포넌트 로직으로 동기화합니다.

---

## 주요 기능

### 1. 스테이킹 · 유동성

- **스테이킹 정보 조회·진행** (`components/Staking/`, `lib/features/staking/`)
- **유동성 추가/제거** 모달 및 트랜잭션 플로우 (`AddLiquiditySection`, `TransactionModal` 등)

### 2. 리워드 · 랭킹 · 추천

- **리워드 클레임·잔액** (`MyRewardsClaimSection`, `EarnedBalanceSection` 등)
- **사용자 랭크** (`app/[locale]/rank-info`, `components/RankInfo/`)
- **추천인·리퍼러** 관련 슬라이스 (`userReferrerListSlice`, `userFindParentReferrerSlice`, `hanChainBalance` 등)

### 3. 소셜 패스 · CoinNess

- **소셜 태스크·적립** (`components/SocialPath/EarnMore/`)
- **CoinNess 뉴스** 검색·목록 (`components/SocialPath/CoinNessNews/`)

### 4. Musikhan · 플레이리스트

- **뮤직한 메인·플레이리스트·오디오** (`app/[locale]/musikhan/...`, `components/MusiKhan/`, `MyPlayList/`)
- **Unlockable Tune Vault** 설정 (`contracts/UnlockableTuneVaultConfig*.ts`)

### 5. 룰렛(스핀) 게임

- **룰렛 페이지** 및 스핀 로직 (`app/[locale]/roulette`, `components/RouletteGame/`, `lib/features/spinGame/`)

### 6. 월렛 · 인증

- **Dapp Portal** 지갑 Provider, 연결 상태 복원, Kaia accounts (`context/Web3Provider.tsx`)
- **LIFF** 초기화 및 SDK (`context/LiffProvider.tsx`)
- **Nonce → 서명 → JWT** (`/api/users/generate-nonce`, `lib/api/auth.ts`)

### 7. 기타 라우트

- **메인·리워드·스테이킹·소셜 패스** (`app/[locale]/page.tsx`, `staking`, `rewards`, `social-path` 등)
- **디버그** locale / LINE ID (`app/[locale]/debug/...`)

---

## 프로젝트 구조

실제 프론트엔드 루트는 **`line-frontend/`** 입니다.

```
line-frontend/
├── src/
│   ├── app/                      # App Router
│   │   ├── [locale]/             # next-intl 로케일 (en, ja 등)
│   │   │   ├── page.tsx          # 로케일별 메인
│   │   │   ├── staking/
│   │   │   ├── rewards/
│   │   │   ├── social-path/
│   │   │   ├── musikhan/
│   │   │   ├── roulette/
│   │   │   ├── rank-info/
│   │   │   └── debug/
│   │   ├── layout.tsx
│   │   └── StoreProvider.tsx
│   ├── components/               # Main, Staking, MyRewards, SocialPath, Musikhan, RouletteGame 등
│   ├── context/                  # Web3Provider, LiffProvider, LanguageContext, LocaleProvider
│   ├── contracts/                # Vault 등 컨트랙트 설정/ABI
│   ├── lib/
│   │   ├── features/             # Redux 슬라이스·thunk
│   │   ├── api/                  # axios, auth
│   │   └── store.ts
│   ├── hooks/
│   ├── i18n/
│   ├── middleware.ts
│   ├── utils/
│   └── assets/
└── public/
```

**Redux Store** (`lib/store.ts`) 예: `usersRank`, `coinness`, `socialPath`, `spinGame`, `hanChainBalance`, `playList`, `musiKhan`, `unlockableTunes`, `userIdData`, 리워드·추천인 관련 슬라이스, `stakingInfo` 등.

---

## 주요 구현 내용

### 1. 상태 관리 아키텍처

- **Redux Toolkit**으로 기능별 슬라이스·Thunk 분리
- **`AppThunk` 타입**으로 dispatch 일관성 유지
- 도메인 경계에 맞춘 모듈 구조

### 2. Web3 · Kaia

- **Web3Provider**(ethers-ext v6), Dapp Portal **PaymentProvider**
- 지갑 연결·세션·**Semaphore Identity** 저장소 키 관리

### 3. 인증 및 보안

- 지갑 주소 기반 **nonce → 서명 → JWT**
- 토큰 검증·만료 처리

### 4. 국제화

- **next-intl** + 커스텀 미들웨어 (locale 쿠키, Accept-Language, Geo 헤더)

### 5. UI 레이어

- **SCSS Modules** 위주, **Bootstrap**·**Tailwind**·글로벌 스타일 병행

### 6. API 통신

- **Axios** 인스턴스, 인증 헤더·에러 처리

---

## 성능 최적화

- **Next.js** 기반 라우트·번들 구조 최적화
- **동적 import**·코드 분할 (필요 시)
- **React.memo** / **useMemo** 등으로 불필요한 리렌더 완화
- 이미지·정적 자산 로딩 전략

---

## UI/UX 특징

- **다크 테마** 기반과 동일한 **디자인 시스템**을 Telegram Mini App 제품군과 공유하는 경우, 화면 간 시각적 일관성 유지
- 스테이킹·유동성·리워드 등 **금액·상태가 많은 화면**에서 로딩·에러·성공 피드백 구분
- **반응형**·미니앱 환경을 고려한 연결 버튼·가이드 모달 (`LoginGuideModal` 등)
- **터치 친화적** 인터페이스 및 **로딩·에러** 사용자 피드백

---

## 개발·실행 환경

```bash
# 의존성 설치 (프론트엔드 루트)
cd line-frontend
npm install

# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 실행
npm start
```

### 환경 변수

- `NEXT_PUBLIC_DAPP_PORTAL_CLIENT_ID` — Dapp Portal 클라이언트 ID
- `NEXT_PUBLIC_CHAIN_ID` — 체인 ID
- API 베이스 URL 등은 `lib/api/axiosInstance` 설정 참고

---

## 지원 플랫폼

- **LINE Mini App / LIFF** (주 타겟)
- **모바일 웹 브라우저** (Chrome, Safari 등)
- **데스크톱 브라우저** (반응형 지원)

---

## 기술적 도전과 해결

### 1. LINE vs 외부 브라우저

- **문제**: LIFF 전용 분기와 외부 브라우저에서 Dapp Portal만 사용할 때 **UX·진입 경로** 차이
- **해결**: 환경별 연결 플로우·가이드 모달·Provider 초기화 분기 정리

### 2. 지갑 재연결·세션 복원

- **문제**: `kaia_accounts`, 로컬 스토리지 키, 새로고침 후 연결 상태 불일치
- **해결**: 저장 키 설계 및 마운트 시 Provider·세션 복원 순서 정리

### 3. 체인·트랜잭션 UX

- **문제**: 가스·실패 시 사용자 혼란, 모달 상태 관리 복잡도
- **해결**: 트랜잭션 단계별 UI·에러 메시지·모달 상태 머신 적용

### 4. 금액·폼 정밀도

- **문제**: 토큰 소수·표시 단위 불일치
- **해결**: `decimal.js`로 연산·표시 정밀도 통일

---

## 보안 고려사항

- 서명 기반 로그인·**JWT** 검증 흐름
- JWT 저장 위치·쿠키 옵션 검토
- XSS 대비 입력 검증·표시 이스케이프 (프론트 담당 범위 명시)
- 백엔드 **Helmet·CORS** 등은 협업 저장소 기준

---

## 학습 및 성장

- **Web3 개발**: ethers v6 + Kaia 확장 Provider 실무 적용
- **LINE LIFF·Dapp Portal SDK** 연동
- **Next.js App Router**와 **next-intl** 라우팅·미들웨어 패턴
- **상태 관리**: Redux Toolkit으로 도메인 경계 나누기
- **TypeScript**: 타입 안전성을 통한 유지보수성
- **비동기 처리**: 스테이킹·트랜잭션·API 연동 플로우

---
