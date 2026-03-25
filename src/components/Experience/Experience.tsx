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
        'HTML, CSS, JavaScript, React, Node.js, MySQL, MongoDB등 다양한 기술 학습',
        '팀 프로젝트 참여 및 협업 경험',
        '코드 리뷰 및 베스트 프랙티스 학습',
      ],
    },
    {
      title: '프론트엔드 개발자',
      company: '한아이덴티티코리아',
      period: '2022.08 - 현재',
      description: '웹 애플리케이션 개발 및 유지보수를 담당했습니다.',
      achievements: [
        'React와 Next.js를 활용한 웹 애플리케이션 개발',
        '사용자 경험 개선을 위한 UI/UX 최적화',
        '성능 최적화 및 코드 품질 향상',
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