import styles from './Skills.module.scss';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'SASS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'RESTful API'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'MongoDB', 'PostgreSQL'],
    },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.gradient}>Skills</span> & Technologies
        </h2>
        <p className={styles.subtitle}>
          다양한 기술 스택을 활용하여 프로젝트를 구현합니다.
        </p>
        <div className={styles.categories}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;