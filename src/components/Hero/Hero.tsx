import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        {children && <div className={styles.heroActions}>{children}</div>}
      </div>
    </div>
  );
}
