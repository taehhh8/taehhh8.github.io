'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Skills.module.scss';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'React Query', 'HTML/CSS', 'SASS'],
    },
    {
      title: 'Web3',
      skills: ['ethers.js', 'wagmi', 'viem', 'Reown AppKit', 'Kaia', 'TON Connect', 'LIFF SDK'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'TypeScript', 'Supabase', 'RESTful API'],
    },
    {
      title: 'Tools & Workflow',
      skills: ['Git', 'GitHub', 'Cursor', 'VS Code', 'Figma', 'PostgreSQL'],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.gradient}>Skills</span> & Technologies
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          제품 관점의 프론트엔드를 구현하며, 복잡한 상태 관리와 운영 이슈를 안정적으로 해결합니다.
        </motion.p>
        <motion.div
          className={styles.categories}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={styles.category}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className={styles.skill}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;