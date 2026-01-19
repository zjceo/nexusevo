import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title?: string;
  icon?: string;
  children: React.ReactNode;
  href?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}

export default function Card({ 
  title, 
  icon, 
  children, 
  href, 
  variant = 'default' 
}: CardProps) {
  const CardContent = (
    <div className={`${styles.card} ${styles[variant]}`}>
      {(title || icon) && (
        <div className={styles.cardHeader}>
          {icon && <span className={styles.cardIcon}>{icon}</span>}
          {title && <h3 className={styles.cardTitle}>{title}</h3>}
        </div>
      )}
      <div className={styles.cardBody}>
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className={styles.cardLink}>
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
