# DeFi/RWA 플랫폼 프론트엔드 개발 포트폴리오 (BeatSwap)

> **프로젝트 기간**: [2025.09~개발중]  
> **역할**: Frontend Developer (단독 개발)  
> **프로젝트 유형**: Web3 기반 DeFi + IP-RWA 서비스

## 프로젝트 개요

BeatSwap은 음악 IP를 RWA(Real World Asset) 형태로 온체인에서 조회/활용할 수 있도록 구성된 Web3 서비스입니다.  
프론트엔드에서는 사용자 대시보드, 오라클(검색/랭킹), 지갑 연결, Vault/홀딩/LVC(vesting) 관련 플로우를 중심으로 구현했습니다.

### 핵심 포인트

- **Web3 통합**: EVM 지갑 연결 및 온체인 데이터 조회/트랜잭션 연동
- **데이터 중심 UX**: Oracle(Top100/Top-All/Latest/검색) 기반 탐색 경험 제공
- **복합 상태 관리**: Redux Toolkit + React Query 조합으로 서버/클라이언트 상태 분리
- **확장 가능한 구조**: `feature` 단위 슬라이스/썽크, 계약(Contract) 모듈 분리
- **실서비스 지향**: 인증(텔레그램/지갑), 로딩/에러 처리, 사용자 피드백 플로우 강화

---

## 기술 스택

### Frontend

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.x
- **UI Library**: React 19
- **State Management**:
  - Redux Toolkit
  - React Query (@tanstack/react-query)
  - React Redux
- **Styling**:
  - Sass/SCSS
  - CSS Modules
- **Web3**:
  - Ethers.js v6
  - Wagmi
  - Viem
  - Reown AppKit
  - RainbowKit
- **API 통신**: Axios
- **시각화/UX**:
  - Recharts
  - Framer Motion
  - React Spring
  - React Toastify / SweetAlert2

### Backend (협업 환경)

- Node.js + Express 기반 API 서버와 연동
- 인증/바인딩/오라클/잔액 조회 등 API 협업

---

## 주요 기능

### 1) Oracle 탐색 경험 구축

- `Top100`, `Top-All`, `Latest`, `Latest100`, `Genre`, `Search` 페이지 구현
- 아티스트/곡 상세 라우팅(`dynamic route`) 및 필터/조회 플로우 구성
- Redux thunk 기반 비동기 조회 + 로딩 상태 UI 반영

### 2) Wallet 연결 및 인증 연동

- 다중 지갑 연결 플로우(모달/버튼 컴포넌트 단위) 구현
- 텔레그램 ID와 EVM 주소 바인딩 검증/처리 UX 구현
- 로그인 상태에 따라 principal 전환 및 데이터 재조회 처리

### 3) Vault / Holding / LVC 기능 개발

- Vault 관련 조회/예치/출금/보상 계산 흐름 구현
- Holding 상태 조회 및 화면 반영
- LVC(예치/출금/클레임/계정 조회) 기능을 feature 모듈로 분리

### 4) 스마트 컨트랙트 연동 레이어 구성

- `IPLicensingVault`, `USDT`, `BTX`, `LiquidityVestingConvert`, `VestingSettlementVault` 연동 모듈 구성
- 컨트랙트 호출 로직과 상태 관리 로직을 분리해 유지보수성 확보

### 5) 대시보드 및 사용자 피드백 UX

- 사용자 잔액/내역/랭킹 등 데이터 중심 화면 구성
- 비동기 처리 전반에 로딩/실패/성공 상태를 일관된 UI로 제공
- 토스트/모달 기반 상호작용으로 트랜잭션/인증 피드백 강화

---

## 프로젝트 구조

```text
beatswap-io/
├── src/
│   ├── app/                       # Next.js App Router 페이지
│   │   ├── page.tsx
│   │   ├── dashboard/
│   │   ├── oracle/                # top100/top-all/latest/search/song...
│   │   ├── staking/
│   │   └── holding/
│   ├── components/                # 공통/도메인 UI 컴포넌트
│   ├── contract/                  # 스마트 컨트랙트 연동 모듈
│   ├── hooks/                     # 커스텀 훅
│   ├── lib/
│   │   ├── features/              # Redux slices + thunks
│   │   ├── services/              # API 서비스 레이어
│   │   └── store.ts               # 전역 스토어
│   ├── context/                   # 앱 전역 provider/context
│   └── config/                    # 체인/환경 설정
└── public/
```

---

## 주요 구현 내용

### 상태 관리 전략

- **Redux Toolkit**: 도메인 상태(UI, Vault, Oracle, Auth, Ranking 등) 관리
- **React Query**: 서버 상태 캐싱/동기화
- 역할이 다른 상태를 분리해 렌더링/로직 복잡도 제어

### Web3 연동 전략

- 지갑 연결 계층, 컨트랙트 호출 계층, 화면 계층을 분리
- 네트워크/지갑 상태 변화 시 재조회 및 사용자 피드백 루프 설계
- 인증(텔레그램)-지갑 바인딩 기반 principal 관리 로직 구현

### 성능/유지보수

- App Router 기반 페이지 단위 분리
- feature 기반 폴더링으로 코드 탐색성 향상
- 공통 UI/훅 재사용으로 중복 로직 최소화

---

## UI/UX 특징

- Oracle·대시보드 중심의 **데이터 탐색·피드백**에 맞춘 로딩/에러/성공 상태 표현
- 토스트·모달 기반 트랜잭션·인증 피드백

---

## 개발·실행 환경

```bash
npm install
npm run dev
npm run build
npm run start
```

필요 환경 변수는 `.env.local`에 프로젝트 정책에 맞춰 설정합니다.

---

## 지원 플랫폼

- **모던 웹 브라우저** (Chrome, Safari, Firefox 등)
- **반응형** 레이아웃

---

## 기술적 도전과 해결

### 1) 온체인 + 오프체인 데이터 동기화

- **문제**: API 응답과 체인 상태가 시차를 가지며 UI 일관성이 깨질 수 있음
- **해결**: thunk + query 재조회 타이밍을 명시적으로 관리하고, 상태별 로딩/에러 UI를 분리

### 2) 인증/지갑 상태 조합 복잡도

- **문제**: 텔레그램 로그인, 지갑 연결, 바인딩 여부에 따라 플로우가 분기됨
- **해결**: 바인딩 검증 API와 UI 모달 플로우를 분리하고 principal 상태를 전역에서 일관 관리

### 3) 기능 확장 시 상태 폭증

- **문제**: Vault/LVC/Holding/Ranking 확장 과정에서 slice/thunk 증가
- **해결**: feature 단위 모듈화를 유지해 영향 범위를 축소하고 파일 경계를 명확히 유지

---

## 성과 및 기여

- Web3 서비스에서 필요한 **지갑 연결-인증-데이터 조회-트랜잭션 피드백**의 핵심 사용자 여정을 일관되게 구현
- Oracle/대시보드 중심의 데이터 탐색 화면을 안정적으로 제공해 서비스 활용성을 개선
- 기능 확장(Vault, Holding, LVC, Ranking) 시 구조를 유지하며 빠르게 증설 가능한 코드베이스 정착

---

## 포트폴리오 강조 포인트

- **Web3 Frontend 실전 경험**: Ethers/Wagmi/Viem 기반 지갑/컨트랙트 연동
- **대규모 상태 관리 경험**: Redux Toolkit + React Query 하이브리드 설계
- **서비스 운영 관점 개발**: 로딩/오류/사용자 피드백/재조회 전략
- **도메인 구조화 역량**: feature 중심 아키텍처로 확장성과 유지보수성 확보
