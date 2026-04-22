'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Experience.module.scss';

const Experience = () => {
  const experiences = [
    {
      title: '부트캠프 학생',
      company: '경일게임아카데미',
      period: '2021.10 - 2022.07',
      description: '부트캠프 학생으로 웹 개발 기초 학습 및 실무 경험을 쌓았습니다.',
      achievements: [
        'HTML, CSS, JavaScript, React, Node.js, MySQL, MongoDB 등 다양한 기술 학습',
        '팀 프로젝트 참여 및 협업 경험',
        '코드 리뷰 및 베스트 프랙티스 학습',
      ],
    },
    {
      title: '프론트엔드 개발자',
      company: '한아이덴티티코리아',
      period: '2022.08 - 현재',
      description:
        'React·Next.js·TypeScript 기반 제품 프론트엔드를 단독으로 설계·개발·운영했습니다.',
      achievements: [
        '요구사항 분석부터 화면 설계, API 연동, 배포까지 프론트엔드 전 과정 리드',
        '복잡한 비동기 상태·에러 복구·데이터 동기화 UX를 안정적으로 설계',
        '실서비스 운영 환경에서 성능 최적화, 배포 안정화, 유지보수 프로세스 체계화',
      ],
    },
    {
      title: '학사 학위 취득',
      company: '서울사이버대학교',
      period: '2023.03 - 2024.08',
      description: '컴퓨터 공학 학사 학위 취득',
      achievements: [
        '컴퓨터 공학 학사 학위 취득',
      ],
    },

  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.gradient}>Experience</span> & Education
        </motion.h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className={styles.timelineMarker}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              />
              <motion.div
                className={styles.content}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className={styles.header}>
                  <h3 className={styles.jobTitle}>{exp.title}</h3>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;