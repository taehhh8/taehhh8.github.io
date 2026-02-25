import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.greeting}>안녕하세요 👋</div>
          <h1 className={styles.title}>
            <span className={styles.name}>저는</span>
            <span className={styles.gradient}>개발자</span>
            <span className={styles.name}>입니다</span>
          </h1>
          <p className={styles.description}>
            창의적이고 사용자 중심의 웹 애플리케이션을 만드는 것을 좋아합니다.
            <br />
            최신 기술을 활용하여 의미 있는 프로젝트를 구현합니다.
          </p>
          <div className={styles.cta}>
            <a href="#projects" className={styles.primaryBtn}>
              프로젝트 보기
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              연락하기
            </a>
          </div>
          <div className={styles.scrollIndicator}>
            <span>Scroll</span>
            <div className={styles.arrow}></div>
          </div>
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.gradientCircle}></div>
        <div className={styles.gradientCircle}></div>
      </div>
    </section>
  );
};

export default Hero;