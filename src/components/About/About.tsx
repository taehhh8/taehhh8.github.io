'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.scss';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { 
      icon: '🚀', 
      number: '8+', 
      label: 'Projects',
      description: '서비스 프로젝트'
    },
    { 
      icon: '⏱️', 
      number: '4y', 
      label: 'Experience',
      description: '실무 경력'
    },
    { 
      icon: '⚡', 
      number: '10+', 
      label: 'Skills',
      description: '핵심 기술'
    },
  ];

  const focusAreas = [
    'Product Frontend',
    'React & Next.js',
    'TypeScript',
    'Async UX & State',
  ];

  const achievements = [
    {
      title: '단독 리드',
      description: '요구사항 분석부터 화면 설계, API 연동, 배포까지 프론트엔드 전 과정을 맡았습니다',
      icon: '👨‍💻'
    },
    {
      title: '실서비스 운영',
      description: '배포 이후 모니터링·개선·유지보수까지 주도적으로 수행했습니다',
      icon: '🎯'
    },
    {
      title: '복잡한 비동기 UX',
      description: '다단계 신청·조회·온보딩의 로딩·실패·재시도 흐름을 안정적으로 설계했습니다',
      icon: '⚙️'
    },
  ];

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>소개</span>
          <h2 className={styles.title}>
            About <span className={styles.gradient}>Me</span>
          </h2>
          <p className={styles.titleDescription}>
            React·Next.js·TypeScript 기반 제품 프론트엔드를 개발합니다.
          </p>
        </motion.div>

        <div className={styles.contentFull}>
          <motion.div
            className={styles.mainIntro}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.mainTitle}>
              복잡한 요구사항을 <span className={styles.highlight}>안정적인 제품 UI</span>로 구현합니다
            </h3>
            <p className={styles.mainDescription}>
              <strong className={styles.highlight}>4년</strong>간 프론트엔드 개발자로서 
              대시보드형 서비스, 미니앱, 데이터 기반 웹 애플리케이션 등
              <strong className={styles.highlight}> 8개 이상의 프로젝트</strong>를 설계·개발·운영해왔습니다.
              사용자 경험과 비동기 데이터 흐름을 최우선으로 생각하며,
              <strong className={styles.highlight}> Next.js · TypeScript · React Query</strong> 기반의 
              유지보수하기 좋은 코드를 작성합니다.
            </p>
            <p className={styles.workflowNote}>
              이 포트폴리오를 포함해 최근 작업은 <strong className={styles.highlight}>Cursor</strong>로
              구조 파악·초안 작성·리팩터링 속도를 높였고, 제안된 변경은 직접 검토한 뒤
              빌드·동작 테스트를 거쳐 반영합니다.
            </p>
          </motion.div>

          <div className={styles.highlights}>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className={styles.highlightCard}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <span className={styles.highlightIcon}>{item.icon}</span>
                <div className={styles.highlightContent}>
                  <span className={styles.highlightNumber}>{item.number}</span>
                  <span className={styles.highlightLabel}>{item.label}</span>
                  <span className={styles.highlightDescription}>{item.description}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.twoColumnGrid}>
            <motion.div
              className={styles.expertise}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className={styles.sectionSubtitle}>핵심 역량</h4>
              <div className={styles.focusList}>
                {focusAreas.map((area, index) => (
                  <motion.span
                    key={area}
                    className={styles.focusTag}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={styles.achievements}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 className={styles.sectionSubtitle}>주요 성과</h4>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={styles.achievementItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className={styles.achievementIcon}>{achievement.icon}</span>
                  <div className={styles.achievementContent}>
                    <h5 className={styles.achievementTitle}>{achievement.title}</h5>
                    <p className={styles.achievementDescription}>{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
