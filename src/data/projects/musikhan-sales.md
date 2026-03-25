# Musikhan Sales - Frontend

> **프로젝트 기간**: 2023.10-  
> **역할**: Frontend Developer  
> **프로젝트 유형**: DeFi · NFT 스테이킹 · 유동성

## 📋 프로젝트 개요

Musikhan Sales는 블록체인 기반의 DeFi(Decentralized Finance) 및 NFT 스테이킹 플랫폼의 프론트엔드 애플리케이션입니다. Web3 기술을 활용하여 사용자가 지갑을 연결하고, NFT를 스테이킹하며, 유동성 풀에 참여하여 리워드를 받을 수 있는 기능을 제공합니다.

## 🛠 기술 스택

### Core

- **React** 18.2.0 - UI 라이브러리
- **React Router DOM** 6.4.2 - 클라이언트 사이드 라우팅
- **Redux** 8.1.2 - 전역 상태 관리
- **Redux Thunk** 2.4.1 - 비동기 액션 처리

### Web3 & Blockchain

- **Ethers.js** 5.7.2 - 이더리움 블록체인 상호작용
- **@web3-react/core** 6.1.9 - Web3 연결 관리
- **@web3-react/injected-connector** 6.0.7 - MetaMask 등 지갑 연결
- **Alchemy SDK** 2.2.3 - 블록체인 데이터 조회
- **Moralis** 2.7.4 - 블록체인 데이터 통합
- **@openzeppelin/contracts** 4.8.0 - 스마트 컨트랙트 인터페이스

### UI/UX

- **React Bootstrap** 2.6.0 - UI 컴포넌트 라이브러리
- **Bootstrap** 5.2.2 - CSS 프레임워크
- **SASS** 1.56.1 - CSS 전처리기
- **React Multi Carousel** 2.8.2 - 캐러셀 컴포넌트
- **React Infinite Scroll Component** 6.1.0 - 무한 스크롤
- **React Spinners** 0.13.6 - 로딩 스피너
- **SweetAlert2** 11.6.6 - 알림 모달

### 기타

- **Axios** 1.3.5 - HTTP 클라이언트
- **Lodash** 4.17.21 - 유틸리티 함수
- **React Simple Captcha** 9.0.2 - 캡차 기능
- **React YouTube** 10.1.0 - YouTube 임베드

### 개발 도구

- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **Redux DevTools Extension** - 상태 관리 디버깅
- **Webpack Bundle Analyzer** - 번들 크기 분석

## ✨ 주요 기능

### 1. 지갑 연결 및 인증

- MetaMask 등 Web3 지갑 연결
- 네트워크 자동 전환 기능
- 지갑 계정 상태 관리
- 세션 기반 로그인 상태 유지

### 2. NFT 스테이킹 (Launch NFT)

- NFT 스테이킹/언스테이킹 기능
- 스테이킹된 NFT 조회
- 리워드 조회 및 클레임
- 입출금 내역 조회
- 승인(Approval) 상태 관리

### 3. 유동성 리워드

- **HAN Chain 유동성 풀**
  - 유동성 추가/제거
  - 스테이킹된 금액 조회
  - APR(연이율) 표시
  - 리워드 조회 및 클레임
  - 반응형 UI (다양한 화면 크기 지원)
- **HANeP 유동성 풀**
  - 별도의 유동성 풀 관리
  - 풀별 리워드 시스템

### 4. Launchpad 기능

- Musikhan 토큰 발행 정보 조회
- 토큰 ID 조회
- 토큰 소각(Burn) 기능
- 발행된 토큰 목록 표시

### 5. 사용자 인증

- 이메일 기반 회원가입
- 로그인/로그아웃
- 약관 동의
- 세션 관리

### 6. 풀 체크 기능

- Rakis6 풀 출금 가능 여부 확인
- Rakis49 풀 출금 가능 여부 확인
- 풀 상태 모니터링

### 7. 메인 페이지

- Musikhan 차트 리스트
- 발행된 토큰 섹션
- 반응형 레이아웃

## 📁 프로젝트 구조

```
frontend/
├── public/                 # 정적 파일
├── src/
│   ├── apis/              # API 통신 모듈
│   │   └── musikhan.api.js
│   ├── assets/            # 이미지, 아이콘 등 리소스
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   ├── global/       # 전역 컴포넌트 (Header, Footer 등)
│   │   ├── launchNft/    # NFT 스테이킹 관련 컴포넌트
│   │   ├── liquidityReward/  # 유동성 리워드 컴포넌트
│   │   ├── liquidityRewardHANeP/  # HANeP 풀 컴포넌트
│   │   ├── Login/        # 로그인/회원가입 컴포넌트
│   │   ├── musikhan/     # 메인 페이지 컴포넌트
│   │   └── Rakis6PoolCheck/  # 풀 체크 컴포넌트
│   ├── config/           # 스마트 컨트랙트 설정
│   │   ├── GlobalContracts.js
│   │   ├── LaunchpadMusikhan.js
│   │   └── providers.js
│   ├── hooks/            # 커스텀 훅
│   │   ├── useWebConnectWallet.js
│   │   ├── useNetworkSwitcher.js
│   │   ├── useChainId.js
│   │   └── ...
│   ├── pages/           # 페이지 컴포넌트
│   │   ├── MusikhanMainPage.js
│   │   ├── LaunchNftPage.js
│   │   ├── LiquidityRewardPage.js
│   │   ├── LiquidityRewardHANePPage.js
│   │   ├── sign/        # 로그인/회원가입 페이지
│   │   └── ...
│   ├── redux/           # Redux 상태 관리
│   │   ├── actions/     # 액션 크리에이터
│   │   ├── reducer/     # 리듀서
│   │   └── store.js     # 스토어 설정
│   ├── App.js           # 메인 앱 컴포넌트
│   └── index.js         # 진입점
└── package.json
```

## 🎯 주요 구현 내용

### 1. Web3 통합

- **지갑 연결**: MetaMask, WalletConnect 등 다양한 지갑 지원
- **스마트 컨트랙트 상호작용**: Ethers.js를 활용한 컨트랙트 호출
- **트랜잭션 처리**: 승인, 스테이킹, 클레임 등 블록체인 트랜잭션 관리
- **네트워크 감지**: 현재 연결된 네트워크 자동 감지 및 전환

### 2. 상태 관리

- **Redux를 활용한 전역 상태 관리**
  - 계정 정보 관리
  - 스테이킹 상태 관리
  - 유동성 풀 상태 관리
  - UI 상태 관리 (모달, 로딩 등)
- **Redux Thunk를 활용한 비동기 처리**
  - 블록체인 데이터 조회
  - API 호출
  - 스마트 컨트랙트 호출

### 3. 성능 최적화

- **코드 스플리팅**: React.lazy()를 활용한 라우트 기반 코드 분할
- **무한 스크롤**: 대량의 데이터를 효율적으로 로드
- **로딩 상태 관리**: 사용자 경험 향상을 위한 로딩 인디케이터

### 4. 반응형 디자인

- **다양한 화면 크기 지원**: 모바일, 태블릿, 데스크톱 대응
- **SCSS를 활용한 스타일링**: 모듈화된 스타일 관리
- **Bootstrap 기반 레이아웃**: 일관된 UI/UX 제공

### 5. 사용자 경험

- **에러 핸들링**: 트랜잭션 실패, 네트워크 오류 등 처리
- **알림 시스템**: SweetAlert2를 활용한 사용자 알림
- **폼 검증**: 회원가입, 로그인 시 입력 검증
- **세션 관리**: 로그인 상태 유지

### 6. 컴포넌트 설계

- **재사용 가능한 컴포넌트**: 모듈화된 컴포넌트 구조
- **커스텀 훅**: 로직 재사용을 위한 커스텀 훅 구현
- **컴포넌트 분리**: 관심사 분리 원칙 적용

## 🚀 실행 방법

### 설치

```bash
cd frontend
npm install
```

### 개발 서버 실행

```bash
npm start
```

개발 서버는 `http://localhost:3000`에서 실행됩니다.

### 프로덕션 빌드

```bash
npm run build
```

### 테스트

```bash
npm test
```

## 📝 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 변수들을 설정해야 합니다:

```
REACT_APP_INFURA_PROJECT_ID=your_infura_project_id
REACT_APP_ALCHEMY_API_KEY=your_alchemy_api_key
REACT_APP_CONTRACT_ADDRESS=your_contract_address
```

## 🔧 주요 기술적 도전과제 및 해결

### 1. 블록체인 트랜잭션 처리

- **문제**: 비동기 트랜잭션 처리 및 상태 관리의 복잡성
- **해결**: Redux Thunk를 활용한 비동기 액션 처리 및 트랜잭션 상태 추적

### 2. 지갑 연결 및 네트워크 관리

- **문제**: 다양한 지갑 제공자와 네트워크 간 호환성
- **해결**: @web3-react를 활용한 통합 지갑 연결 인터페이스 구현

### 3. 대량 데이터 처리

- **문제**: NFT 목록, 트랜잭션 히스토리 등 대량 데이터 로딩
- **해결**: 무한 스크롤 및 코드 스플리팅을 통한 성능 최적화

### 4. 실시간 데이터 동기화

- **문제**: 블록체인 데이터의 실시간 업데이트
- **해결**: 주기적인 폴링 및 이벤트 리스너를 통한 데이터 동기화

## 📊 프로젝트 규모

- **컴포넌트**: 100+ 개의 React 컴포넌트
- **페이지**: 8개의 주요 페이지
- **Redux 액션**: 80+ 개의 액션 크리에이터
- **커스텀 훅**: 8개의 재사용 가능한 훅
- **스타일 파일**: 50+ 개의 SCSS 모듈

## 🎨 UI/UX 특징

- **모던한 디자인**: Bootstrap과 커스텀 SCSS를 활용한 현대적인 UI
- **직관적인 네비게이션**: 명확한 메뉴 구조와 라우팅
- **반응형 레이아웃**: 모든 디바이스에서 최적화된 경험
- **로딩 상태 표시**: 사용자에게 명확한 피드백 제공
- **에러 처리**: 친화적인 에러 메시지 및 복구 옵션

## 🔐 보안 고려사항

- 지갑 연결 시 사용자 동의 확인
- 트랜잭션 서명 전 상세 정보 표시
- 입력 데이터 검증 및 sanitization
- 세션 관리 및 보안 토큰 처리

## 📚 학습 및 성장

- **Web3 개발**: 블록체인과의 상호작용, 스마트 컨트랙트 호출
- **상태 관리**: Redux를 활용한 복잡한 상태 관리
- **비동기 처리**: Redux Thunk를 활용한 비동기 로직 처리
- **성능 최적화**: 코드 스플리팅, 무한 스크롤 등
- **반응형 디자인**: 다양한 디바이스 대응

## 💡 향후 개선 사항

- TypeScript 마이그레이션으로 타입 안정성 향상
- 테스트 코드 작성 (Jest, React Testing Library)
- PWA 기능 추가로 오프라인 지원
- 다국어 지원 (i18n)
- 더 나은 에러 바운더리 및 에러 리포팅
