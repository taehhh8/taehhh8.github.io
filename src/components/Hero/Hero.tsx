'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.scss';

type FeaturedProject = {
  id: number;
  title: string;
  description: string;
  image?: string;
};

type HeroProps = {
  featuredProject?: FeaturedProject;
};

const Hero = ({ featuredProject }: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.layout}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.content}>
            <motion.div className={styles.badge} variants={itemVariants}>
              <span className={styles.badgeDot}></span>
              이직 제안 환영
            </motion.div>

            <motion.h1 className={styles.title} variants={itemVariants}>
              <span className={styles.greeting}>안녕하세요, 저는</span>
              <motion.span
                className={styles.name}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                박태현
              </motion.span>
              <span className={styles.subtitle}>프론트엔드 개발자입니다</span>
            </motion.h1>

            <motion.p className={styles.description} variants={itemVariants}>
              4년간 <strong>React·Next.js·TypeScript</strong>로 서비스 화면을 만들고,
              복잡한 비동기 상태와 온보딩 이슈를 사용자 중심으로 풀어왔습니다.
            </motion.p>

            <motion.div className={styles.stats} variants={itemVariants}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>8+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>4y</span>
                <span className={styles.statLabel}>Experience</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Technologies</span>
              </div>
            </motion.div>

            <motion.div className={styles.cta} variants={itemVariants}>
              <motion.a
                href="#projects"
                className={styles.primaryBtn}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>프로젝트 보기</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3L8 13M8 13L12 9M8 13L4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              <motion.a
                href="#contact"
                className={styles.secondaryBtn}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>연락하기</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5 11L11 5M11 5H5M11 5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {featuredProject?.image && (
            <motion.div className={styles.featured} variants={itemVariants}>
              <p className={styles.featuredLabel}>대표작</p>
              <Link href={`/projects/${featuredProject.id}`} className={styles.featuredCard}>
                <div className={styles.featuredImage}>
                  <Image
                    src={featuredProject.image}
                    alt={`${featuredProject.title} 미리보기`}
                    fill
                    sizes="(max-width: 900px) 100vw, 420px"
                    priority
                  />
                </div>
                <div className={styles.featuredBody}>
                  <h2 className={styles.featuredTitle}>{featuredProject.title}</h2>
                  <p className={styles.featuredDesc}>{featuredProject.description}</p>
                  <span className={styles.featuredCta}>케이스 보기 →</span>
                </div>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className={styles.background}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.gradientBlur}></div>
        <div className={styles.gradientBlur}></div>
        <div className={styles.gradientBlur}></div>
      </div>
    </section>
  );
};

export default Hero;
