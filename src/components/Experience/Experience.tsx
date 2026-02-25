import styles from './Experience.module.scss';

const Experience = () => {
  const experiences = [
    {
      title: '프론트엔드 개발자',
      company: '회사명',
      period: '2023 - 현재',
      description: '웹 애플리케이션 개발 및 유지보수를 담당했습니다.',
      achievements: [
        'React와 Next.js를 활용한 웹 애플리케이션 개발',
        '사용자 경험 개선을 위한 UI/UX 최적화',
        '성능 최적화 및 코드 품질 향상',
      ],
    },
    {
      title: '인턴 개발자',
      company: '회사명',
      period: '2022 - 2023',
      description: '초기 경력을 쌓으며 다양한 프로젝트에 참여했습니다.',
      achievements: [
        '웹 개발 기초 학습 및 실무 경험',
        '팀 프로젝트 참여 및 협업 경험',
        '코드 리뷰 및 베스트 프랙티스 학습',
      ],
    },
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.gradient}>Experience</span> & Education
        </h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <h3 className={styles.jobTitle}>{exp.title}</h3>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;