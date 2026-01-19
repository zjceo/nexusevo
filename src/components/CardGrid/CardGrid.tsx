import React from 'react';
import styles from './CardGrid.module.css';

interface CardGridProps {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
}

export default function CardGrid({ children, cols = 3 }: CardGridProps) {
  return (
    <div className={`${styles.cardGrid} ${styles[`cols${cols}`]}`}>
      {children}
    </div>
  );
}
