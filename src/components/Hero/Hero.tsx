'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: 'easeOut' as const,
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
          <motion.div className={styles.greeting} variants={itemVariants}>
            안녕하세요 👋
          </motion.div>
          <motion.h1 className={styles.title} variants={itemVariants}>
            <span className={styles.name}>저는</span>
            <motion.span
              className={styles.gradient}
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              박태현
            </motion.span>
            <span className={styles.name}>입니다</span>
          </motion.h1>
          <motion.p className={styles.role} variants={itemVariants}>
            Web3 Frontend Developer
          </motion.p>
          <motion.p className={styles.description} variants={itemVariants}>
            창의적이고 사용자 중심의 웹 애플리케이션을 만드는 것을 좋아합니다.
            <br />
            최신 기술을 활용하여 의미 있는 프로젝트를 구현합니다.
          </motion.p>
          <motion.div className={styles.cta} variants={itemVariants}>
            <motion.a
              href="#projects"
              className={styles.primaryBtn}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              프로젝트 보기
            </motion.a>
            <motion.a
              href="#contact"
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              연락하기
            </motion.a>
          </motion.div>
          <motion.div
            className={styles.scrollIndicator}
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Scroll</span>
            <div className={styles.arrow}></div>
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.background}>
        <div className={styles.gradientCircle}></div>
        <div className={styles.gradientCircle}></div>
        <div className={styles.particles}>
          {[...Array(50)].map((_, i) => (
            <div key={i} className={styles.particle}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;