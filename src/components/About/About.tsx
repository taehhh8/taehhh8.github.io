'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { myImage } from '@/assets/_index';
import styles from './About.module.scss';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { number: '8+', label: '프로젝트' },
    { number: '3년 8개월', label: '년 경력' },
    { number: '10+', label: '기술 스택' },
  ];

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.gradient}>About</span> Me
        </motion.h2>
        <div className={styles.content}>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              안녕하세요! 저는 웹 개발에 열정을 가진 개발자입니다.
              사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하는 것을 좋아합니다.
            </p>
            <p>
              최신 기술 트렌드를 학습하고 적용하는 것을 즐기며,
              지속적인 성장과 개선을 추구합니다.
            </p>
            <div className={styles.highlights}>
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.highlight}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <span className={styles.number}>{item.number}</span>
                  <span className={styles.label}>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className={styles.image}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className={styles.imageFrame}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <Image
                src={myImage}
                alt="프로필 사진"
                fill
                className={styles.profilePhoto}
                sizes="(max-width: 1024px) 90vw, 400px"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;