'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'taehyun8534@gmail.com',
      link: 'mailto:taehyun8534@gmail.com',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/taehhh8',
      link: 'https://github.com/taehhh8',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/taehhh8',
      link: 'https://linkedin.com/in/taehhh8',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+82 10-4385-8534',
      link: 'tel:+821043858534',
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
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In <span className={styles.gradient}>Touch</span>
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          프로젝트나 협업에 대해 이야기하고 싶으시다면 언제든지 연락주세요!
        </motion.p>
        <motion.div
          className={styles.contactGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={styles.contactCard}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.icon}>{method.icon}</div>
              <div className={styles.info}>
                <h3 className={styles.label}>{method.label}</h3>
                <p className={styles.value}>{method.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>© 2026 Taehyun Park Portfolio. All rights reserved..</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;