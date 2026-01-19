import React from 'react';
import Badge from '../Badge/Badge';
import styles from './ApiEndpoint.module.css';

interface ApiEndpointProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description?: string;
  auth?: boolean;
}

const methodColors = {
  GET: 'info',
  POST: 'success',
  PUT: 'warning',
  DELETE: 'danger',
  PATCH: 'primary'
} as const;

export default function ApiEndpoint({ 
  method, 
  path, 
  description,
  auth = false
}: ApiEndpointProps) {
  return (
    <div className={styles.apiEndpoint}>
      <div className={styles.endpointHeader}>
        <Badge variant={methodColors[method]} size="sm">{method}</Badge>
        <code className={styles.endpointPath}>{path}</code>
        {auth && <Badge variant="default" size="sm">🔒 Auth</Badge>}
      </div>
      {description && (
        <p className={styles.endpointDescription}>{description}</p>
      )}
    </div>
  );
}
