import React from 'react';
import styles from './Callout.module.css';

interface CalloutProps {
  children: React.ReactNode;
  type?: 'note' | 'tip' | 'important' | 'warning' | 'caution';
  title?: string;
  icon?: string;
}

const defaultIcons = {
  note: '📝',
  tip: '💡',
  important: '⚠️',
  warning: '🚨',
  caution: '⚡'
};

const defaultTitles = {
  note: 'Nota',
  tip: 'Consejo',
  important: 'Importante',
  warning: 'Advertencia',
  caution: 'Precaución'
};

export default function Callout({ 
  children, 
  type = 'note',
  title,
  icon
}: CalloutProps) {
  const displayIcon = icon || defaultIcons[type];
  const displayTitle = title || defaultTitles[type];

  return (
    <div className={`${styles.callout} ${styles[type]}`}>
      <div className={styles.calloutHeader}>
        <span className={styles.calloutIcon}>{displayIcon}</span>
        <strong className={styles.calloutTitle}>{displayTitle}</strong>
      </div>
      <div className={styles.calloutBody}>
        {children}
      </div>
    </div>
  );
}
