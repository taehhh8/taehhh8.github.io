import styles from './Contact.module.scss';

const Contact = () => {
  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/yourusername',
      link: 'https://github.com/yourusername',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+82 10-0000-0000',
      link: 'tel:+821000000000',
    },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Get In <span className={styles.gradient}>Touch</span>
        </h2>
        <p className={styles.subtitle}>
          프로젝트나 협업에 대해 이야기하고 싶으시다면 언제든지 연락주세요!
        </p>
        <div className={styles.contactGrid}>
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={styles.contactCard}
            >
              <div className={styles.icon}>{method.icon}</div>
              <div className={styles.info}>
                <h3 className={styles.label}>{method.label}</h3>
                <p className={styles.value}>{method.value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className={styles.footer}>
          <p>© 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;