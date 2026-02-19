import styles from './AccentDot.module.css';

interface AccentDotProps {
  color?: 'amber' | 'green' | 'terracotta';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AccentDot({ color = 'amber', size = 'md', className = '' }: AccentDotProps) {
  return <span className={`${styles.dot} ${styles[color]} ${styles[size]} ${className}`} aria-hidden="true" />;
}

export function AccentSquare({ color = 'amber', size = 'md', className = '' }: AccentDotProps) {
  return <span className={`${styles.square} ${styles[color]} ${styles[size]} ${className}`} aria-hidden="true" />;
}
