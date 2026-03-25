# MusiKhan - Telegram Mini App Music & Video Platform

> **프로젝트 기간**: [2024.11~2025.5]  
> **역할**: Frontend Developer (단독 개발)  
> **프로젝트 유형**: Telegram Mini App · Web3 음악 스트리밍

## 프로젝트 개요

### Introduction

**MusiKhan** is the flagship **Tune-to-Earn** app built on HanChain's **Music RWAfi framework**. The Telegram Mini-App allows users to stream music and earn rewards directly within Telegram without any installation. By staking LP tokens, users can unlock exclusive Web3 K-POP tracks and participate in Spin games to earn HAN tokens based on their listening activity.

### 프로젝트 소개

MusiKhan은 **Telegram Mini App** 기반의 Web3 음악 및 비디오 스트리밍 플랫폼입니다. TON 블록체인을 활용하여 사용자가 LP 토큰을 스테이킹하고, Web3 K-POP 트랙을 잠금 해제하며, 음악 청취 활동을 기반으로 HAN 토큰을 획득할 수 있는 **Tune-to-Earn** 서비스를 제공합니다.

---

## 기술 스택

### Core

- **React 18.3.1** - UI 라이브러리
- **TypeScript 5.6.2** - 타입 안정성
- **Vite 5.4.10** - 빌드 도구 및 개발 서버

### State Management

- **Redux Toolkit 2.5.0** - 전역 상태 관리
- **React Redux 9.2.0** - React-Redux 바인딩

### Routing & Navigation

- **React Router DOM 7.0.1** - 클라이언트 사이드 라우팅

### Blockchain Integration

- **@tonconnect/ui-react 2.0.9** - TON 지갑 연결 UI
- **@tonconnect/sdk 3.1.0** - TON Connect 프로토콜
- **ton 13.9.0** - TON 블록체인 SDK
- **@ston-fi/sdk 2.4.0** - STON.fi DEX 통합
- **@ston-fi/api 0.21.0** - STON.fi API 클라이언트

### Styling

- **SASS/SCSS** - CSS 전처리기
- **CSS Modules** - 컴포넌트 스코프 스타일링
- **Responsive Design** - 모바일 우선 반응형 디자인

### UI/UX Libraries

- **SweetAlert2 11.15.10** - 모달 및 알림
- **React Toastify 11.0.3** - 토스트 알림
- **React Select 5.8.3** - 커스텀 셀렉트 컴포넌트

### Telegram Integration

- **@vkruglikov/react-telegram-web-app 2.1.9** - Telegram WebApp API
- **@telegram-apps/analytics 1.3.13** - Telegram Analytics

### HTTP Client

- **Axios** - REST API 통신
- **JWT (jsonwebtoken 9.0.2)** - 인증 토큰 관리

### Utilities

- **js-cookie 3.0.5** - 쿠키 관리
- **buffer 6.0.3** - 브라우저 Buffer polyfill

---

## 주요 기능

### 1. 음악 스트리밍 (MusiKhan)

- **음악 목록 조회 및 검색**
  - 장르별 필터링
  - 실시간 검색 기능
  - 무한 스크롤 구현

- **음악 재생 기능**
  - Preview 모드 (30초 미리듣기)
  - Full 버전 재생 (구매 후)
  - 10초 이상 재생 시 자동 재생 횟수 카운팅
  - 오디오 플레이어 컨트롤 (재생/일시정지/진행바)

- **가사 표시**
  - 확장/축소 가능한 가사 카드
  - 반응형 스크롤 처리
  - 한글/영어 가사 파싱 및 표시

- **플레이리스트 관리**
  - 개인 플레이리스트 생성 및 관리
  - 곡 추가/삭제 기능

### 2. 비디오 스트리밍 (MuviKhan)

- 비디오 콘텐츠 재생
- Preview 및 Full 버전 지원

### 3. Web3 스테이킹 시스템

- **LP 토큰 스테이킹**
  - TON/jHAN LP 토큰 스테이킹
  - 스테이킹 포지션 관리
  - 언스테이킹 기능
  - 실시간 잔액 조회

- **유동성 공급 (Add Liquidity)**
  - STON.fi DEX 통합
  - TON/jHAN 유동성 추가
  - LP 토큰 자동 수령

- **리워드 시스템**
  - 스테이킹 보상 조회
  - JHAN 토큰 클레임
  - TON 트랜잭션 처리

### 4. 게임 기능

- **룰렛 게임**
  - 스핀 게임 구현
  - 보상 시스템 연동

### 5. 소셜 기능

- **추천인 시스템**
  - 추천인 링크 생성
  - 추천인 보상 조회
  - 소셜 경로 추적

- **랭킹 시스템**
  - 사용자 랭킹 조회
  - 리워드 순위 표시

### 6. 사용자 인증 및 지갑 연동

- **TON 지갑 연결**
  - TonConnect 프로토콜 통합
  - 지갑 서명 기반 인증
  - JWT 토큰 관리 (쿠키/localStorage)

- **세션 관리**
  - 토큰 만료 처리
  - 자동 로그아웃
  - 보안 강화 (토큰 검증)

---

## 프로젝트 구조

```
frontend/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── Header/         # 지갑 연결 헤더
│   │   ├── Musikhan/       # 음악 관련 컴포넌트
│   │   ├── MuviKhan/       # 비디오 관련 컴포넌트
│   │   ├── Staking/        # 스테이킹 관련 컴포넌트
│   │   ├── MyRewards/      # 리워드 관련 컴포넌트
│   │   ├── RouletteGame/   # 룰렛 게임 컴포넌트
│   │   └── ...
│   ├── pages/              # 페이지 컴포넌트
│   │   ├── MainPage.tsx
│   │   ├── MusikhanPage.tsx
│   │   ├── StakingPage.tsx
│   │   └── ...
│   ├── lib/
│   │   ├── features/       # Redux slices & thunks
│   │   │   ├── musikhan/
│   │   │   ├── staking/
│   │   │   ├── user/
│   │   │   └── ...
│   │   ├── api/            # API 클라이언트
│   │   │   └── axiosInstance.ts
│   │   └── store.ts        # Redux store 설정
│   ├── contexts/           # React Context
│   │   └── LanguageContext.tsx  # 다국어 지원
│   ├── hooks/              # Custom Hooks
│   ├── types/              # TypeScript 타입 정의
│   ├── utils/              # 유틸리티 함수
│   └── App.tsx             # 메인 앱 컴포넌트
```

---

## 주요 구현 내용

### 1. 상태 관리 아키텍처

- **Redux Toolkit**을 활용한 전역 상태 관리
- 20개 이상의 Redux slice로 모듈화
- 비동기 작업은 `createAsyncThunk`로 처리
- 타입 안전성을 위한 TypeScript 통합

### 2. 반응형 디자인

- **모바일 우선 설계** (320px ~ 768px)
- `clamp()` 함수를 활용한 유동적 폰트 크기
- SASS Mixin을 통한 일관된 반응형 처리
- Telegram Mini App 환경 최적화

### 3. 오디오/비디오 재생 로직

- **Preview/Full 버전 분기 처리**
- 재생 시간 추적 및 자동 카운팅
- 오디오 이벤트 핸들러 최적화
- 중복 API 호출 방지 로직

### 4. 블록체인 트랜잭션 처리

- **TON Connect SDK** 통합
- Jetton 전송 트랜잭션 구성
- 트랜잭션 상태 모니터링
- 에러 핸들링 및 사용자 피드백

### 5. 인증 및 보안

- JWT 토큰 기반 인증
- 지갑 서명 검증
- 토큰 만료 자동 처리
- 쿠키/localStorage 이중 저장

### 6. 다국어 지원

- React Context 기반 i18n 구현
- 한국어/영어/중국어 지원
- 동적 언어 전환

### 7. API 통신 최적화

- Axios 인터셉터를 통한 자동 토큰 주입
- 요청/응답 에러 처리
- 토큰 만료 시 자동 재인증

---

## 성능 최적화

- **코드 스플리팅**: 라우트 기반 lazy loading
- **이미지 최적화**: 적절한 포맷 및 크기 조정
- **번들 크기 최적화**: Vite 빌드 최적화
- **메모이제이션**: React.memo 및 useMemo 활용

---

## UI/UX 특징

- **다크 테마** 기반 디자인
- **그라데이션 및 블러 효과** 활용
- **부드러운 애니메이션** (CSS transitions)
- **터치 친화적** 인터페이스 (최소 32px 터치 영역)
- **로딩 상태** 및 **에러 처리** 사용자 피드백

---

## 개발·실행 환경

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build:prod

# 빌드 미리보기
npm run preview
```

### 환경 변수

- `VITE_LP_ADMIN_ADDRESS` - 스테이킹 관리자 주소
- `NODE_ENV` - 개발/프로덕션 환경 구분

---

## 지원 플랫폼

- **Telegram Mini App** (주 타겟)
- **모바일 웹 브라우저** (Chrome, Safari)
- **데스크톱 브라우저** (반응형 지원)

---

## 기술적 도전과 해결

### 1. Telegram Mini App 환경 최적화

- **문제**: 제한된 화면 높이 및 하단 네비게이션 바
- **해결**: 동적 패딩 및 스크롤 영역 계산으로 가사 전체 표시 보장

### 2. 오디오 재생 카운팅 최적화

- **문제**: 중복 API 호출 및 불필요한 카운팅
- **해결**: 플래그 기반 중복 방지 및 10초 이상 재생 시에만 카운팅

### 3. 블록체인 트랜잭션 UX

- **문제**: 트랜잭션 대기 시간 및 상태 표시
- **해결**: 모달 기반 트랜잭션 상태 표시 및 자동 완료 처리

### 4. 반응형 가사 표시

- **문제**: 긴 가사가 화면에 잘림
- **해결**: 확장/축소 기능 및 내부 스크롤 최적화

---

## 보안 고려사항

- JWT 토큰 안전한 저장 (httpOnly 쿠키 고려)
- 지갑 서명 검증
- XSS 방지를 위한 입력 검증
- CORS 정책 준수

---

## 학습 및 성장

- **Web3 개발**: TON 블록체인 및 스마트 컨트랙트 상호작용
- **Telegram Mini App**: Telegram WebApp API 활용
- **상태 관리**: Redux Toolkit을 활용한 복잡한 상태 관리
- **반응형 디자인**: 모바일 우선 설계 및 다양한 화면 크기 대응
- **TypeScript**: 타입 안전성을 통한 버그 예방
- **비동기 처리**: 복잡한 트랜잭션 플로우 관리

---
