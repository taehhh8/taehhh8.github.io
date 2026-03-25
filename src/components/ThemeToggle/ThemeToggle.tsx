'use client';

import { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 시스템 테마 확인
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      setIsDark(prefersDark);
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className={styles.icon}>
        {isDark ? '☀️' : '🌙'}
      </div>
    </button>
  );
};

export default ThemeToggle;