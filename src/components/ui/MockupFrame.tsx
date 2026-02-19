import { type ReactNode } from 'react';
import styles from './MockupFrame.module.css';

interface MockupFrameProps {
  children: ReactNode;
  device?: 'iphone' | 'watch';
  className?: string;
}

export function MockupFrame({ children, device = 'iphone', className = '' }: MockupFrameProps) {
  return (
    <div className={`${styles.frame} ${styles[device]} ${className}`}>
      <div className={styles.screen}>
        {children}
      </div>
    </div>
  );
}
