import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.gradient}>About</span> Me
        </h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              안녕하세요! 저는 웹 개발에 열정을 가진 개발자입니다.
              사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하는 것을 좋아합니다.
            </p>
            <p>
              최신 기술 트렌드를 학습하고 적용하는 것을 즐기며,
              지속적인 성장과 개선을 추구합니다.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.number}>3+</span>
                <span className={styles.label}>프로젝트</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.number}>2+</span>
                <span className={styles.label}>년 경력</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.number}>10+</span>
                <span className={styles.label}>기술 스택</span>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <div className={styles.imagePlaceholder}>
              <span>프로필 이미지</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;