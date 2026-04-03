'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            <span className={styles.badgeDot}></span>
            Available for hire
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
            <span className={styles.subtitle}>입니다</span>
          </motion.h1>

          <motion.div className={styles.roleWrapper} variants={itemVariants}>
            <div className={styles.roleContainer}>
              <span className={styles.roleLabel}>Web3</span>
              <span className={styles.roleSeparator}>/</span>
              <span className={styles.roleLabel}>Frontend</span>
              <span className={styles.roleSeparator}>/</span>
              <span className={styles.roleLabel}>Developer</span>
            </div>
          </motion.div>

          <motion.p className={styles.description} variants={itemVariants}>
            3년 8개월간 <strong>Web3 DeFi, 미니앱, 블록체인 익스플로러</strong> 등을 단독 개발하며
            <br className={styles.desktopBreak} />
            사용자 중심의 혁신적인 서비스를 만들어왔습니다.
          </motion.p>

          <motion.div className={styles.stats} variants={itemVariants}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>8+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3.8y</span>
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

          <motion.div
            className={styles.scrollIndicator}
            variants={itemVariants}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>Scroll Down</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4L10 16M10 16L14 12M10 16L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
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