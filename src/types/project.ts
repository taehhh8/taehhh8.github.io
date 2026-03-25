import type { StaticImageData } from 'next/image';

/** 상세 페이지 스크린샷 (정적 import 이미지 + 접근성용 alt) */
export interface ProjectScreenshot {
  image: StaticImageData;
  alt: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  /** 상세 페이지에 표시할 스크린샷 목록 */
  screenshots?: ProjectScreenshot[];
  link?: string;
  github?: string;
  featured?: boolean;
  readmePath?: string; // README 파일 경로 추가
}

export interface ProjectDetail extends Project {
  readmeContent?: string; // README 전체 내용
}
