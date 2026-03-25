# DeFi Staking Platform - Frontend Development

> **프로젝트 기간**: [개발 기간 입력]  
> **역할**: Frontend Developer (주도 개발)  
> **프로젝트 유형**: DeFi (Decentralized Finance) 스테이킹 플랫폼

## 📋 프로젝트 개요

다양한 블록체인 네트워크를 지원하는 통합 DeFi 스테이킹 플랫폼입니다. 사용자는 여러 스테이킹 풀에 참여하여 리워드를 획득하고, 리퀴디티 공급, 에어드롭, NFT 스테이킹 등의 다양한 DeFi 서비스를 이용할 수 있습니다.

### 주요 특징

- **멀티 체인 지원**: Ethereum, Optimism, HanChain L2 등 다양한 네트워크 지원
- **다양한 스테이킹 풀**: Rakis, SPR, UniV2, Munie NFT 등 다양한 자산 스테이킹
- **리퀴디티 리워드**: 유동성 공급자(LP)를 위한 리워드 시스템
- **에어드롭 시스템**: 토큰 및 NFT 에어드롭 기능
- **월렛 통합**: MetaMask, WalletConnect, TON Connect 등 다양한 지갑 지원
- **실시간 데이터**: 블록체인 데이터 실시간 조회 및 업데이트

---

## 🛠 기술 스택

### Frontend

- **Framework**: Next.js 14.2.5 (App Router)
- **Language**: TypeScript 5.x
- **UI Library**: React 18
- **State Management**:
  - Redux Toolkit 2.2.7
  - React Query (@tanstack/react-query) 5.59.16
- **Styling**:
  - Sass/SCSS (모듈화된 스타일 관리)
  - CSS Modules
- **Web3 Integration**:
  - Ethers.js 5.7.2
  - @web3modal/ethers5 3.5.7
  - @tonconnect/ui-react 2.0.11
  - @metamask/detect-provider 2.0.0
- **HTTP Client**: Axios 1.7.3
- **UI Components**:
  - React Multi Carousel
  - React Spinners
  - SweetAlert2
  - React YouTube
- **기타**:
  - Lodash
  - React Simple Captcha

### Backend (협업)

- **Runtime**: Node.js
- **Framework**: Express.js 4.19.2
- **Language**: TypeScript 5.4.5
- **Blockchain**: Ethers.js 5.7.2
- **Logging**: Winston 3.13.0
- **Security**: Helmet, CORS

---

## 🎯 주요 기능

### 1. 스테이킹 시스템

- **Rakis 스테이킹**: Uniswap Rakis LP 토큰 스테이킹 (Rakis6, Rakis49)
- **SPR 스테이킹**: SPR 토큰 스테이킹 및 광고 시청 리워드
- **UniV2 스테이킹**: Uniswap V2 LP 토큰 스테이킹
- **Munie NFT 스테이킹**: NFT 기반 스테이킹 시스템
- **Han Bonus 스테이킹**: HAN/HANeP 토큰 스테이킹 (V1, V2, V3)

### 2. 리퀴디티 리워드

- **HAN/HANeP 리퀴디티 풀**: 유동성 공급자 리워드 시스템
- **다중 버전 지원**: V1, V2, V2_1, V2_2, V2_3, V2_4 등
- **자동 복리**: 리워드 자동 재투자 기능

### 3. 에어드롭 시스템

- **토큰 에어드롭**: HAN, HANeP, Munie 토큰 에어드롭
- **NFT 에어드롭**: Musikhan NFT 에어드롭
- **리퀴디티 에어드롭**: 락된 리퀴디티 에어드롭
- **화이트리스트 관리**: 에어드롭 대상자 관리

### 4. 월렛 연결 및 인증

- **멀티 월렛 지원**:
  - MetaMask (Ethereum, Optimism)
  - WalletConnect
  - TON Connect
- **계정 관리**: 세션 관리 및 자동 재연결
- **사인인/사인업**: 이메일 기반 사용자 인증 시스템

### 5. 대시보드

- **포트폴리오 조회**: 사용자 자산 현황 실시간 조회
- **거래 내역**: 스테이킹, 예치, 출금 내역 관리
- **리워드 추적**: 획득한 리워드 내역 및 미수령 리워드 조회

### 6. 런치패드

- **프로젝트 소개**: 프로젝트 로드맵, NFT 컬렉션 소개
- **원클릭 스테이킹**: 간편한 스테이킹 인터페이스
- **프로젝트 정보**: 토크노믹스, 팀 소개 등

---

## 📁 프로젝트 구조

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router 페이지
│   │   ├── page.tsx           # 메인 페이지
│   │   ├── staking/           # 스테이킹 페이지
│   │   ├── hanep/             # HANeP 플랫폼 페이지
│   │   ├── rakis6/            # Rakis6 스테이킹 페이지
│   │   ├── spr/               # SPR 스테이킹 페이지
│   │   ├── univ2/             # UniV2 스테이킹 페이지
│   │   ├── launchpad/         # 런치패드 페이지
│   │   └── dashboard/         # 대시보드 페이지
│   │
│   ├── components/            # 재사용 가능한 UI 컴포넌트
│   │   ├── Global/           # 전역 컴포넌트 (월렛 연결, 탭 등)
│   │   ├── hanep/            # HANeP 관련 컴포넌트
│   │   ├── rakis6/           # Rakis6 관련 컴포넌트
│   │   ├── launchpad/        # 런치패드 컴포넌트
│   │   └── ...
│   │
│   ├── containers/            # 페이지별 컨테이너 컴포넌트
│   │   ├── hanep/            # HANeP 컨테이너
│   │   ├── staking/          # 스테이킹 컨테이너
│   │   ├── launchpad/        # 런치패드 컨테이너
│   │   └── ...
│   │
│   ├── lib/                   # 라이브러리 및 유틸리티
│   │   ├── features/         # Redux Toolkit 슬라이스 및 썽크
│   │   │   ├── signInUp/     # 인증 관련 상태 관리
│   │   │   ├── rakis6/       # Rakis6 스테이킹 상태 관리
│   │   │   ├── sprV2/        # SPR 스테이킹 상태 관리
│   │   │   ├── uniV2/        # UniV2 스테이킹 상태 관리
│   │   │   ├── hanep/        # HANeP 관련 상태 관리
│   │   │   └── ...
│   │   ├── store.ts          # Redux 스토어 설정
│   │   └── hook.ts           # 커스텀 훅
│   │
│   ├── hooks/                 # 커스텀 React 훅
│   │   ├── queries/          # React Query 훅
│   │   └── ...
│   │
│   ├── contract/              # 스마트 컨트랙트 인터페이스
│   │   ├── RakisContract.ts
│   │   ├── SprContract.ts
│   │   ├── UniV2Contract.ts
│   │   └── ...
│   │
│   ├── types/                 # TypeScript 타입 정의
│   ├── styles/               # 전역 스타일
│   └── assets/               # 이미지 및 정적 자산
│
└── public/                    # 정적 파일
```

---

## 💡 주요 구현 내용

### 1. 상태 관리 아키텍처

- **Redux Toolkit**을 활용한 중앙집중식 상태 관리
- 50개 이상의 Redux 슬라이스로 모듈화된 상태 관리
- 비동기 작업 처리를 위한 **Redux Thunk** 패턴 적용
- **React Query**를 통한 서버 상태 캐싱 및 동기화

### 2. Web3 통합

- **Ethers.js**를 활용한 블록체인 상호작용
- 다중 네트워크 지원 (Ethereum, Optimism, HanChain L2)
- 스마트 컨트랙트 호출 및 이벤트 리스닝
- 트랜잭션 상태 관리 및 에러 핸들링

### 3. 반응형 UI/UX

- **SCSS 모듈**을 활용한 컴포넌트별 스타일 관리
- 모바일 및 데스크톱 환경 최적화
- 로딩 상태 및 에러 상태 UI 구현
- **Dynamic Import**를 통한 코드 스플리팅 및 성능 최적화

### 4. 사용자 인증 시스템

- 이메일 기반 회원가입/로그인
- 세션 스토리지 기반 사용자 정보 관리
- 월렛 주소와 이메일 연동
- 회원 탈퇴 기능

### 5. 실시간 데이터 처리

- 블록체인 데이터 실시간 조회
- 스테이킹 잔액, 리워드, APR 등 실시간 업데이트
- React Query를 통한 자동 리프레시 및 캐싱

### 6. 트랜잭션 관리

- 스마트 컨트랙트 트랜잭션 실행
- 트랜잭션 상태 추적 (Pending, Success, Failed)
- 가스비 최적화
- 트랜잭션 실패 시 사용자 피드백

### 7. 성능 최적화

- **Next.js Dynamic Import**를 통한 코드 스플리팅
- 이미지 최적화 (Next.js Image 컴포넌트)
- 불필요한 리렌더링 방지 (React.memo, useMemo, useCallback)
- API 호출 최적화 및 캐싱 전략

---

## 🔧 개발 환경 설정

### 필수 요구사항

- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
cd frontend
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 환경 변수

```env
NEXT_PUBLIC_API_URL=https://back.khans.io
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

---

## 📊 기술적 도전과 해결

### 1. 다중 체인 지원

**도전**: Ethereum, Optimism, HanChain L2 등 여러 네트워크를 하나의 인터페이스에서 지원  
**해결**:

- 네트워크별 Provider 팩토리 패턴 구현
- 동적 네트워크 전환 로직 구현
- 네트워크별 컨트랙트 주소 관리 시스템 구축

### 2. 복잡한 상태 관리

**도전**: 50개 이상의 스테이킹 풀과 다양한 기능의 상태 관리  
**해결**:

- Redux Toolkit의 슬라이스 패턴으로 모듈화
- 공통 로직을 커스텀 훅으로 추출
- 타입 안정성을 위한 TypeScript 활용

### 3. 실시간 블록체인 데이터 동기화

**도전**: 블록체인 데이터의 실시간 업데이트 및 동기화  
**해결**:

- React Query의 자동 리프레시 기능 활용
- 이벤트 리스너를 통한 실시간 업데이트
- 캐싱 전략으로 불필요한 API 호출 최소화

### 4. 트랜잭션 UX 개선

**도전**: 블록체인 트랜잭션의 긴 대기 시간과 불확실성  
**해결**:

- 트랜잭션 상태별 UI 피드백 제공
- 진행 상황 표시 및 예상 시간 안내
- 실패 시 명확한 에러 메시지 제공

### 5. 성능 최적화

**도전**: 많은 컴포넌트와 복잡한 데이터 흐름으로 인한 성능 이슈  
**해결**:

- 코드 스플리팅 및 동적 임포트
- React.memo와 useMemo를 통한 메모이제이션
- 이미지 최적화 및 레이지 로딩

---

## 🎨 UI/UX 특징

- **직관적인 인터페이스**: 복잡한 DeFi 기능을 사용자 친화적으로 구현
- **명확한 정보 표시**: 스테이킹 잔액, 리워드, APR 등 핵심 정보 강조
- **반응형 디자인**: 모바일부터 데스크톱까지 최적화된 레이아웃
- **로딩 상태 관리**: 모든 비동기 작업에 대한 로딩 상태 표시
- **에러 처리**: 명확한 에러 메시지 및 복구 방법 안내

---

## 📈 프로젝트 성과

- **다양한 스테이킹 풀 지원**: 20개 이상의 스테이킹 풀 구현
- **멀티 체인 지원**: 3개 이상의 블록체인 네트워크 통합
- **사용자 경험 개선**: 직관적인 UI/UX로 사용자 접근성 향상
- **성능 최적화**: 코드 스플리팅 및 최적화로 로딩 시간 단축
- **안정적인 운영**: 에러 핸들링 및 로깅 시스템 구축

---

## 🔐 보안 고려사항

- **입력 검증**: 사용자 입력값 검증 및 sanitization
- **에러 핸들링**: 전역 에러 핸들러 및 에러 바운더리 구현
- **트랜잭션 보안**: 스마트 컨트랙트 호출 전 검증 로직
- **세션 관리**: 안전한 세션 스토리지 활용

---

## 📚 학습 및 성장

이 프로젝트를 통해 다음을 학습하고 성장했습니다:

1. **Next.js App Router**: 최신 Next.js 기능 활용 경험
2. **Redux Toolkit**: 대규모 상태 관리 아키텍처 설계
3. **Web3 개발**: 블록체인과의 상호작용 및 스마트 컨트랙트 통합
4. **TypeScript**: 타입 안정성을 통한 코드 품질 향상
5. **성능 최적화**: 다양한 최적화 기법 적용 경험
6. **복잡한 상태 관리**: 대규모 애플리케이션의 상태 관리 전략
