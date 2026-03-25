# AUG Project - Frontend Development

> **프로젝트 기간**: [2026.01~2026.03]  
> **역할**: Frontend Developer (단독 개발)  
> **프로젝트 유형**: Web3 기반 토큰 예치/리워드 플랫폼

## 프로젝트 개요

BNB Chain 기반으로 **USDT 예치 -> AUG 전환/예치 -> USDT 리워드 클레임** 플로우를 제공하는 Web3 서비스 프론트엔드입니다.  
지갑 연결, 온체인 트랜잭션 승인/실행, 사용자 대시보드성 정보(잔액/허용량/클레임 가능 보상) 조회를 한 화면에서 처리하도록 구현했습니다.

### 핵심 특징

- **온체인 트랜잭션 UX**: Approve/Deposit/Claim 단계를 명확하게 분리한 사용자 플로우
- **BNB Chain 중심 Web3 연동**: Wagmi + Reown(AppKit) 기반 지갑 연결 및 트랜잭션 처리
- **다국어 지원**: `next-intl` 기반 `en`, `zh`, `ja`, `th`, `vi` 지원
- **상태 관리 이원화**: Redux Toolkit(도메인 상태) + React Query(서버/비동기 상태)
- **반응형 UI**: SCSS Modules 기반 모바일/데스크톱 대응 레이아웃

---

## 기술 스택

### Frontend

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.x
- **UI Library**: React 19
- **State Management**:
  - Redux Toolkit
  - React Redux
  - React Query (@tanstack/react-query)
- **Styling**:
  - Sass/SCSS
  - CSS Modules
- **Web3 Integration**:
  - Wagmi
  - Viem
  - Ethers.js
  - Reown AppKit (`@reown/appkit`, `@reown/appkit-adapter-wagmi`)
- **i18n**: next-intl
- **HTTP Client**: Axios (+ axios-retry)
- **UI/UX Utilities**: SweetAlert2

### Backend 연동(협업)

- 지갑 인증/회원가입/자동 로그인 링크 API 연동
- API 예시:
  - `/api/auth/wallet`
  - `/api/register`
  - `/api/auth/login-link`

---

## 주요 기능

### 1) Deposit 플로우 구현

- **USDT -> AUG 전환 예치**
  - USDT `approve` 후 converter 컨트랙트 `deposit` 실행
  - 최소 예치 금액 검증 로직 적용
- **AUG 스테이킹(리워드 예치)**
  - AUG `approve` 후 reward 컨트랙트 `depositAUG` 실행
- **USDT 리워드 클레임**
  - reward 컨트랙트 `claim` 호출
- **단계형 트래커 UI**
  - pending/active/done 상태를 시각적으로 노출

### 2) 사용자 자산/보상 데이터 조회

- 토큰 잔액: USDT, AUG
- Allowance 조회: USDT/AUG 각각의 컨트랙트 허용량
- 대시보드 데이터: 예치량, 클레임 가능 리워드, 누적 클레임 정보

### 3) 지갑 연결 및 계정 흐름

- Reown AppKit 모달 기반 지갑 연결
- 연결 지갑 주소 기반 사용자 인증 상태 확인
- 미가입 지갑 대상 가입 모달 노출 및 가입 API 연동
- 자동 로그인 링크 발급 후 외부 페이지 연결

### 4) 다국어/사용자 경험

- `next-intl` 메시지 파일 기반 다국어 문구 관리
- 언어 전환 시 URL locale segment 동기화
- 모바일 메뉴 오버레이 및 반응형 헤더/네비게이션 구현

---

## 프로젝트 구조

```text
frontend/
├── app/                        # Next.js App Router
│   ├── [locale]/               # locale 라우팅(en, zh, ja, th, vi)
│   ├── deposit/                # 예치/클레임 페이지
│   ├── layout.tsx              # 전역 레이아웃, Provider 주입
│   └── StoreProvider.tsx       # Redux Provider
├── components/
│   ├── layout/                 # Header, Footer, Login modal
│   ├── sections/               # Hero, HowItWorks, Stats 등 랜딩 섹션
│   ├── staking/                # Deposit/Claim 패널, 트래커, 포지션 바
│   └── ui/                     # 공통 UI 컴포넌트
├── lib/
│   ├── features/               # Redux slice/thunk (user, balance, reward, converter)
│   ├── store.ts
│   └── hook.ts
├── contract/                   # 컨트랙트 ABI/주소 및 조회 유틸
├── config/                     # Wagmi/Reown 설정
├── context/                    # Wagmi + React Query Provider
├── hooks/                      # 잔액/허용량/리워드 조회 커스텀 훅
└── messages/                   # 다국어 리소스(json)
```

---

## 주요 구현 내용

### 1) Web3 트랜잭션 안정성

- `writeContract` + `waitForTransactionReceipt`로 체결 완료까지 보장
- 사용자 입력값 사전 검증(최소 금액, 숫자 유효성)
- 성공/실패 상태를 모달과 단계 UI로 즉시 피드백

### 2) 상태 관리 아키텍처

- Redux Toolkit slice를 도메인별 분리:
  - `converter`, `reward`, `balance`, `user`
- 비동기 액션을 thunk로 표준화하여 API/온체인 호출 흐름 일관성 확보
- React Query를 wallet provider 계층에 결합해 캐시 기반 조회 최적화

### 3) 다국어 구조화

- locale 기반 라우팅 + 메시지 로딩을 레이아웃 계층에서 통합 관리
- UI 문구를 기능 단위 namespace로 분리하여 유지보수성 향상

### 4) 구조·확장성

- 컴포넌트 모듈화로 기능별 독립 개발 및 확장 용이
- 단계형 트랜잭션 가이드로 Web3 진입장벽 완화

---

## UI/UX 특징

- **단계형 트랜잭션 트래커**: Approve/Deposit/Claim 진행 상태를 pending/active/done으로 구분
- **다국어**: `next-intl` 기반 locale 라우팅과 메시지 파일로 문구 일관성 유지
- **반응형**: SCSS Modules, 모바일 메뉴 오버레이·헤더·스크롤 잠금 등 터치·소형 화면 대응

---

## 개발·실행 환경

### 요구사항

- Node.js 18+
- npm

### 실행

```bash
npm install
npm run dev
```

### 주요 환경 변수 예시

```env
NEXT_PUBLIC_PROJECT_ID=your_reown_project_id
NEXT_PUBLIC_AUG_PROJECT_BACKEND_URL=your_backend_url
```

---

## 지원 플랫폼

- **웹 브라우저** (Chrome, Safari, Firefox 등)
- **반응형** 레이아웃 (모바일·데스크톱)

---

## 기술적 도전과 해결

### 1) Web3 트랜잭션 대기 시간 문제

- **문제**: 사용자가 승인/예치 중 현재 상태를 인지하기 어려움
- **해결**: Tx 단계 상태(pending/active/done) 시각화 및 성공/실패 알림 도입

### 2) 지갑 연결 이후 사용자 식별 문제

- **문제**: 지갑 연결만으로 가입 여부 판단이 어려움
- **해결**: 지갑 인증 API 연동 -> 미가입 시 가입 모달 자동 전환

### 3) 다국어 라우팅 일관성 문제

- **문제**: 언어 전환 시 현재 경로/쿼리 유지 필요
- **해결**: pathname 파싱 + locale 교체 + query string 보존 로직 적용

---

## 성과 및 기여

- Web3 핵심 플로우(Approve/Deposit/Claim) 프론트엔드 전반 구현
- 다국어 환경에서 일관된 사용자 경험 제공
- Redux/Thunk 기반 도메인 분리로 기능 확장 가능한 구조 구축
- 온체인/오프체인(백엔드 API) 연계를 하나의 사용자 여정으로 통합

---

## 보안 고려사항

- 지갑 서명·백엔드 인증 토큰은 프로젝트 정책에 맞게 저장·전달
- 환경 변수·API 키는 저장소에 커밋하지 않음

---

## 포트폴리오 강조 포인트

- 단순 UI 구현이 아닌 **Web3 트랜잭션 완료 보장 흐름 설계 경험**
- **지갑 인증 + 회원가입 + 자동 로그인 링크**까지 연결한 사용자 라이프사이클 설계
- **다국어/반응형/상태관리**를 동시에 고려한 실서비스형 프론트엔드 구조화 경험
