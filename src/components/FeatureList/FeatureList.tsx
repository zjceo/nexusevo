import React from 'react';
import styles from './FeatureList.module.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureList({ features, columns = 3 }: FeatureListProps) {
  return (
    <div className={`${styles.featureList} ${styles[`cols${columns}`]}`}>
      {features.map((feature, idx) => (
        <div key={idx} className={styles.feature}>
          <div className={styles.featureIcon}>{feature.icon}</div>
          <h3 className={styles.featureTitle}>{feature.title}</h3>
          <p className={styles.featureDescription}>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
