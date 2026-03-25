import { Project, ProjectScreenshot } from '@/types/project';
import projectConfig from './project-config.json';
import { readAndParseReadme } from '@/utils/readmeParser';
import {
  musikhanSalesMainPage,
  musikhanSales2,
  musikhanSales3,
  musikhanSales4,
  musikhanSales5,
  stakingProjectMainPage,
  stakingProjectAirDrop,
  stakingProjectHaneP,
  stakingProjectWETHHANePLiquidity,
  stakingProjectDashBoard,
  stakingProjectLaunchpad,
  stakingProjectHANePHanChainStaking,
  TMAMainPage,
  TMAMusicListPage,
  TMAMyRewardsPage,
  TMASocialPathPage,
  TMASpinGamePage,
  TMAStakingPage,
  TMAStreamingPage,
  LIFFConnectWalletPage,
  LIFFMainPage,
  LIFFAddLiquidityPage,
  LIFFMuiscListPage,
  LIFFStreamingPage,
  LIFFMyRewardPage,
  LIFFSocialPage,
  LIFFSpinGamePage,
  ICPScanMainPage,
  ICPScanTokenTransactionPage,
  ICPScanTransactionDetailPage,
  ICPScanInfoPage,
  BeatSwapMainPage,
  BeatSwapMainPage2,
  BeatswapDashBoardPage,
  BeatSwapRankingPage,
  BeatswapStakingPage,
  BeatswapOraclePage,
  BeatswapOracleMusicInfoPage,
  BeatswapOracleTopallPage,
  AugTokenMainPage,
  AUGDepositPage,
  AUGMobileMainPage,
  AUGMobileDepositPage,
  SajuViewerMainPage,
  SajuViewerSearchpage,
  SajuInfo1,
  SajuInfo2,
  SajuInfo3,
  SajuMbtiSearchPage,
  SajuMbtiInfo1,
  SajuMbtiInfo2,
  SajuMbtiInfo3,
} from '@/assets/_index';

/** Musikhan Sales (project id: 1) 스크린샷 — `src/assets/MusikhanSales` */
const musikhanSalesScreenshots: ProjectScreenshot[] = [
  { image: musikhanSalesMainPage, alt: 'Musikhan Sales 메인 페이지' },
  { image: musikhanSales2, alt: 'Musikhan Sales — 주요 화면 2' },
  { image: musikhanSales3, alt: 'Musikhan Sales — 주요 화면 3' },
  { image: musikhanSales4, alt: 'Musikhan Sales — 주요 화면 4' },
  { image: musikhanSales5, alt: 'Musikhan Sales — 주요 화면 5' },
];

/** DeFi Staking Platform (project id: 2) 스크린샷 — `src/assets/Staking` */
const stakingProjectScreenshots: ProjectScreenshot[] = [
  { image: stakingProjectMainPage, alt: 'DeFi Staking — 메인 페이지' },
  { image: stakingProjectAirDrop, alt: 'DeFi Staking — 에어드롭' },
  { image: stakingProjectHaneP, alt: 'DeFi Staking — HANeP' },
  { image: stakingProjectWETHHANePLiquidity, alt: 'DeFi Staking — WETH / HANeP 유동성' },
  { image: stakingProjectDashBoard, alt: 'DeFi Staking — 대시보드' },
  { image: stakingProjectLaunchpad, alt: 'DeFi Staking — 런치패드' },
  { image: stakingProjectHANePHanChainStaking, alt: 'DeFi Staking — HANeP HanChain 스테이킹' },
];

/** Musikhan Telegram Mini App (project id: 3) 스크린샷 — `src/assets/MusikhanTelegramMiniapp` */
const tmaMusikhanScreenshots: ProjectScreenshot[] = [
  { image: TMAMainPage, alt: 'Telegram Mini App — 메인' },
  { image: TMAMusicListPage, alt: 'Telegram Mini App — 뮤직 리스트' },
  { image: TMAMyRewardsPage, alt: 'Telegram Mini App — 마이 리워드' },
  { image: TMASocialPathPage, alt: 'Telegram Mini App — 소셜 패스' },
  { image: TMASpinGamePage, alt: 'Telegram Mini App — 스핀 게임' },
  { image: TMAStakingPage, alt: 'Telegram Mini App — 스테이킹' },
  { image: TMAStreamingPage, alt: 'Telegram Mini App — 스트리밍' },
];

/** Kaia LINE DeFi / LIFF 미니앱 (project id: 4) — `src/assets/LineMiniapp` */
const kaiaLineMiniappScreenshots: ProjectScreenshot[] = [
  { image: LIFFMainPage, alt: 'Kaia LINE 미니앱 — 메인' },
  { image: LIFFConnectWalletPage, alt: 'Kaia LINE 미니앱 — 지갑 연결 (LIFF · Dapp Portal)' },
  { image: LIFFAddLiquidityPage, alt: 'Kaia LINE 미니앱 — 유동성 추가' },
  { image: LIFFMuiscListPage, alt: 'Kaia LINE 미니앱 — 뮤직 리스트' },
  { image: LIFFStreamingPage, alt: 'Kaia LINE 미니앱 — 스트리밍' },
  { image: LIFFMyRewardPage, alt: 'Kaia LINE 미니앱 — 마이 리워드' },
  { image: LIFFSocialPage, alt: 'Kaia LINE 미니앱 — 소셜' },
  { image: LIFFSpinGamePage, alt: 'Kaia LINE 미니앱 — 스핀 게임' },
];

/** Internet Computer 블록체인 익스플로러 (project id: 5) — `src/assets/ICPScan` */
const icpScanScreenshots: ProjectScreenshot[] = [
  { image: ICPScanMainPage, alt: 'IC 익스플로러 — 메인' },
  { image: ICPScanTokenTransactionPage, alt: 'IC 익스플로러 — 토큰·트랜잭션' },
  { image: ICPScanTransactionDetailPage, alt: 'IC 익스플로러 — 트랜잭션 상세' },
  { image: ICPScanInfoPage, alt: 'IC 익스플로러 — 정보' },
];

/** BeatSwap (project id: 6) — `src/assets/Beatswap` */
const beatSwapScreenshots: ProjectScreenshot[] = [
  { image: BeatSwapMainPage, alt: 'BeatSwap — 메인 페이지' },
  { image: BeatSwapMainPage2, alt: 'BeatSwap — 메인 페이지 2' },
  { image: BeatswapDashBoardPage, alt: 'BeatSwap — 대시보드' },
  { image: BeatSwapRankingPage, alt: 'BeatSwap — 랭킹' },
  { image: BeatswapStakingPage, alt: 'BeatSwap — 스테이킹' },
  { image: BeatswapOraclePage, alt: 'BeatSwap — 오라클' },
  { image: BeatswapOracleMusicInfoPage, alt: 'BeatSwap — 오라클 뮤직 정보' },
  { image: BeatswapOracleTopallPage, alt: 'BeatSwap — 오라클 Top All' },
];

/** AUG Token (project id: 7) — `src/assets/AUGToken` */
const augTokenScreenshots: ProjectScreenshot[] = [
  { image: AugTokenMainPage, alt: 'AUG Token — 메인 페이지' },
  { image: AUGDepositPage, alt: 'AUG Token — 예치 페이지' },
  { image: AUGMobileMainPage, alt: 'AUG Token — 모바일 메인' },
  { image: AUGMobileDepositPage, alt: 'AUG Token — 모바일 예치' },
];

/** SAJU Viewer (project id: 8) — `src/assets/SajuViewer` */
const sajuViewerScreenshots: ProjectScreenshot[] = [
  { image: SajuViewerMainPage, alt: 'SAJU Viewer — 메인' },
  { image: SajuViewerSearchpage, alt: 'SAJU Viewer — 검색' },
  { image: SajuInfo1, alt: 'SAJU Viewer — 사주 정보 1' },
  { image: SajuInfo2, alt: 'SAJU Viewer — 사주 정보 2' },
  { image: SajuInfo3, alt: 'SAJU Viewer — 사주 정보 3' },
  { image: SajuMbtiSearchPage, alt: 'SAJU Viewer — MBTI 검색' },
  { image: SajuMbtiInfo1, alt: 'SAJU Viewer — MBTI 정보 1' },
  { image: SajuMbtiInfo2, alt: 'SAJU Viewer — MBTI 정보 2' },
  { image: SajuMbtiInfo3, alt: 'SAJU Viewer — MBTI 정보 3' },
];

/**
 * README 파일에서 프로젝트 정보를 읽어옵니다
 * 빌드 타임에 실행되어 정적 데이터를 생성합니다
 */
export function getProjects(): Project[] {
  return projectConfig.map((config: any) => {
    // README 파일 읽기 및 파싱
    const readmeData = readAndParseReadme(config.readmePath);

    const base: Project = {
      id: config.id,
      title: readmeData.title || `프로젝트 ${config.id}`,
      description: readmeData.description || '설명이 없습니다.',
      technologies: readmeData.technologies.length > 0 
        ? readmeData.technologies 
        : [],
      image: config.image,
      link: config.link,
      github: config.github,
      featured: config.featured !== false,
      readmePath: config.readmePath, // README 경로 추가
    };

    // id 1: `public`에 없는 jpg 대신 번들된 PNG 썸네일·스크린샷 사용
    if (config.id === 1) {
      return {
        ...base,
        image: musikhanSalesMainPage.src,
        screenshots: musikhanSalesScreenshots,
      };
    }

    // id 2: Staking 프로젝트 스크린샷
    if (config.id === 2) {
      return {
        ...base,
        image: stakingProjectMainPage.src,
        screenshots: stakingProjectScreenshots,
      };
    }

    // id 3: Telegram Mini App (Musikhan TMA)
    if (config.id === 3) {
      return {
        ...base,
        image: TMAMainPage.src,
        screenshots: tmaMusikhanScreenshots,
      };
    }

    // id 4: Kaia · LINE 미니앱 (LIFF)
    if (config.id === 4) {
      return {
        ...base,
        image: LIFFMainPage.src,
        screenshots: kaiaLineMiniappScreenshots,
      };
    }

    // id 5: Internet Computer 블록체인 익스플로러
    if (config.id === 5) {
      return {
        ...base,
        image: ICPScanMainPage.src,
        screenshots: icpScanScreenshots,
      };
    }

    // id 6: BeatSwap
    if (config.id === 6) {
      return {
        ...base,
        image: BeatSwapMainPage.src,
        screenshots: beatSwapScreenshots,
      };
    }

    // id 7: AUG Token (개인 프로젝트)
    if (config.id === 7) {
      return {
        ...base,
        image: AugTokenMainPage.src,
        screenshots: augTokenScreenshots,
      };
    }

    // id 8: SAJU Viewer (개인 프로젝트)
    if (config.id === 8) {
      return {
        ...base,
        image: SajuViewerMainPage.src,
        screenshots: sajuViewerScreenshots,
      };
    }

    return base;
  }).filter((project: Project) => project.featured !== false);
}

/**
 * ID로 프로젝트 찾기
 */
export function getProjectById(id: number): Project | undefined {
  return getProjects().find(project => project.id === id);
}

// 빌드 타임에 프로젝트 데이터 생성
export const projects = getProjects();
