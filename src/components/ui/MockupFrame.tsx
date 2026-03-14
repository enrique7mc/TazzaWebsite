import { type ReactNode } from 'react';
import styles from './MockupFrame.module.css';

interface MockupFrameProps {
  children: ReactNode;
  device?: 'iphone' | 'watch';
  className?: string;
}

export function MockupFrame({ children, device = 'iphone', className = '' }: MockupFrameProps) {
  if (device === 'iphone') {
    return (
      <div className={`${styles.frame} ${styles.iphone} ${className}`}>
        <img
          src="/iphone-frame.png"
          alt=""
          className={styles.frameImage}
          draggable={false}
        />
        <div className={styles.screen}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.frame} ${styles.watch} ${className}`}>
      <div className={styles.screen}>
        {children}
      </div>
    </div>
  );
}
