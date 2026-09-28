'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './Projects.module.scss';
import { Project } from '@/types/project';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // featured가 true인 프로젝트만 필터링
  const featuredProjects = projects.filter((project) => project.featured !== false);

  const handleProjectClick = (projectId: number) => {
    router.push(`/projects/${projectId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="projects" className={styles.projects} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My <span className={styles.gradient}>Projects</span>
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          실서비스 화면과 개인 프로젝트를 소개합니다. 회사 레포는 비공개인 경우가 많고, 라이브 URL과 상세 설명을 우선 확인하시면 됩니다.
        </motion.p>
        <motion.div
          className={styles.projectGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.project}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => handleProjectClick(project.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.imageContainer}>
                {project.image ? (
                  <div className={styles.projectThumb}>
                    <Image
                      src={project.image}
                      alt={`${project.title} 미리보기`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.projectThumbImage}
                    />
                  </div>
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span>{project.title}</span>
                  </div>
                )}
                <motion.div
                  className={styles.overlay}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.link && project.link !== '#' && (
                    <motion.a
                      href={project.link}
                      className={styles.linkBtn}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </motion.a>
                  )}
                  <motion.button
                    className={styles.linkBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.id);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    자세히 보기
                  </motion.button>
                </motion.div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <p className={styles.viewMore}>자세히 보기 →</p>
                {(!project.github || project.github === '#') && (
                  <p className={styles.repoNote}>코드 비공개 · 라이브/상세 참고</p>
                )}
                <div className={styles.technologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className={styles.tech}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;