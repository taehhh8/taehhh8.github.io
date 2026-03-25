'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Project } from '@/types/project';
import styles from './ProjectDetail.module.scss';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';

interface ProjectDetailProps {
  project: Project;
  readmeContent: string;
}

const ProjectDetail = ({ project, readmeContent }: ProjectDetailProps) => {
  const shots = project.screenshots ?? [];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxOpen = lightboxIndex !== null;
  const thumbStripRef = useRef<HTMLDivElement>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null || shots.length === 0) return null;
      return i <= 0 ? shots.length - 1 : i - 1;
    });
  }, [shots.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null || shots.length === 0) return null;
      return i >= shots.length - 1 ? 0 : i + 1;
    });
  }, [shots.length]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxOpen, closeLightbox, goPrev, goNext]);

  useEffect(() => {
    if (lightboxIndex === null || !thumbStripRef.current) return;
    const buttons = thumbStripRef.current.querySelectorAll('button');
    const active = buttons[lightboxIndex];
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [lightboxIndex]);

  const markdownComponents: Components = {
    h2: ({ children, ...props }) => (
      <h2 className={styles.mdH2} {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className={styles.mdH3} {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4 className={styles.mdH4} {...props}>
        {children}
      </h4>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote className={styles.readmeMeta} {...props}>
        {children}
      </blockquote>
    ),
    hr: () => <hr className={styles.mdHr} />,
    p: ({ children, ...props }) => (
      <p className={styles.mdP} {...props}>
        {children}
      </p>
    ),
  };

  const router = useRouter();

  return (
    <div className={styles.projectDetail}>
      <div className={styles.container}>
        {/* 뒤로가기 버튼 */}
        <motion.button
          className={styles.backButton}
          onClick={() => router.back()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← 뒤로가기
        </motion.button>

        {/* 프로젝트 헤더 */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
          
          {/* 링크 버튼 */}
          <div className={styles.links}>
            {project.link && project.link !== '#' && (
              <motion.a
                href={project.link}
                className={styles.linkBtn}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🌐 Live Demo
              </motion.a>
            )}
            {project.github && project.github !== '#' && (
              <motion.a
                href={project.github}
                className={styles.linkBtn}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💻 GitHub
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* 기술 스택 */}
        {project.technologies.length > 0 && (
          <motion.div
            className={styles.technologies}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={styles.sectionTitle}>기술 스택</h2>
            <div className={styles.techList}>
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className={styles.techTag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* 스크린샷 갤러리 */}
        {shots.length > 0 && (
          <motion.section
            className={styles.screenshots}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            aria-label="프로젝트 스크린샷"
          >
            <h2 className={styles.sectionTitle}>스크린샷</h2>
            <p className={styles.screenshotHint}>이미지를 누르면 크게 보기 · 좌우로 넘기기</p>
            <div className={styles.screenshotGrid}>
              {shots.map((shot, index) => (
                <motion.figure
                  key={`${shot.alt}-${index}`}
                  className={styles.screenshotFigure}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
                >
                  <button
                    type="button"
                    className={styles.screenshotOpenBtn}
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`${shot.alt} 크게 보기`}
                  >
                    <div className={styles.screenshotImageWrap}>
                      <Image
                        src={shot.image}
                        alt=""
                        sizes="(max-width: 768px) 100vw, 900px"
                        className={styles.screenshotImage}
                        priority={index === 0}
                      />
                      <span className={styles.screenshotZoomHint} aria-hidden>
                        확대
                      </span>
                    </div>
                  </button>
                  <figcaption className={styles.screenshotCaption}>{shot.alt}</figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.section>
        )}

        {/* 스크린샷 라이트박스 */}
        {lightboxOpen && lightboxIndex !== null && shots[lightboxIndex] && (
          <div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label="스크린샷 뷰어"
          >
            <button
              type="button"
              className={styles.lightboxBackdrop}
              onClick={closeLightbox}
              aria-label="닫기"
            />
            <div className={styles.lightboxPanel}>
              <div className={styles.lightboxToolbar}>
                <span className={styles.lightboxCounter}>
                  {lightboxIndex + 1} / {shots.length}
                </span>
                <button
                  type="button"
                  className={styles.lightboxClose}
                  onClick={closeLightbox}
                  aria-label="닫기"
                >
                  ✕
                </button>
              </div>

              <div className={styles.lightboxStage}>
                <button
                  type="button"
                  className={styles.lightboxNav}
                  onClick={goPrev}
                  aria-label="이전 이미지"
                >
                  ‹
                </button>
                <div className={styles.lightboxMain}>
                  <Image
                    src={shots[lightboxIndex].image}
                    alt={shots[lightboxIndex].alt}
                    className={styles.lightboxMainImage}
                    sizes="95vw"
                    priority
                  />
                </div>
                <button
                  type="button"
                  className={styles.lightboxNav}
                  onClick={goNext}
                  aria-label="다음 이미지"
                >
                  ›
                </button>
              </div>

              <p className={styles.lightboxCaption}>{shots[lightboxIndex].alt}</p>

              <div
                ref={thumbStripRef}
                className={styles.lightboxThumbStrip}
                role="list"
              >
                {shots.map((shot, i) => (
                  <button
                    key={`thumb-${shot.alt}-${i}`}
                    type="button"
                    role="listitem"
                    className={
                      i === lightboxIndex
                        ? `${styles.thumbCard} ${styles.thumbCardActive}`
                        : styles.thumbCard
                    }
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`${i + 1}번 이미지`}
                    aria-current={i === lightboxIndex ? 'true' : undefined}
                  >
                    <Image
                      src={shot.image}
                      alt=""
                      width={112}
                      height={63}
                      className={styles.thumbCardImage}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* README 본문 (개요·기술 스택은 formatReadmeForDetail에서 제외) */}
        {readmeContent && (
          <motion.section
            className={styles.readmeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            aria-label="프로젝트 상세 설명"
          >
            <h2 className={styles.readmeSectionTitle}>상세 내용</h2>
            <div className={styles.readmeContent}>
              <ReactMarkdown components={markdownComponents}>{readmeContent}</ReactMarkdown>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
