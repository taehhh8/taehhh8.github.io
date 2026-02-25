import styles from './Projects.module.scss';

const Projects = () => {
  const projects = [
    {
      title: '프로젝트 1',
      description: '프로젝트에 대한 설명을 여기에 작성하세요. 사용된 기술과 주요 기능을 설명합니다.',
      technologies: ['React', 'TypeScript', 'Next.js'],
      image: '/project1.jpg',
      link: '#',
      github: '#',
    },
    {
      title: '프로젝트 2',
      description: '프로젝트에 대한 설명을 여기에 작성하세요. 사용된 기술과 주요 기능을 설명합니다.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      image: '/project2.jpg',
      link: '#',
      github: '#',
    },
    {
      title: '프로젝트 3',
      description: '프로젝트에 대한 설명을 여기에 작성하세요. 사용된 기술과 주요 기능을 설명합니다.',
      technologies: ['React', 'SASS', 'Firebase'],
      image: '/project3.jpg',
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          My <span className={styles.gradient}>Projects</span>
        </h2>
        <p className={styles.subtitle}>
          제가 작업한 주요 프로젝트들을 소개합니다.
        </p>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <div className={styles.imageContainer}>
                <div className={styles.imagePlaceholder}>
                  <span>{project.title}</span>
                </div>
                <div className={styles.overlay}>
                  <a href={project.link} className={styles.linkBtn} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} className={styles.linkBtn} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;