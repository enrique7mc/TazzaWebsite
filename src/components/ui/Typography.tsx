import { type ReactNode, type ElementType } from 'react';
import styles from './Typography.module.css';

interface HeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  serif?: boolean;
  className?: string;
}

export function Heading({ children, as: Tag = 'h2', serif = false, className = '' }: HeadingProps) {
  return (
    <Tag className={`${styles.heading} ${serif ? styles.serif : styles.sans} ${className}`}>
      {children}
    </Tag>
  );
}

interface TextProps {
  children: ReactNode;
  as?: ElementType;
  muted?: boolean;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  className?: string;
}

export function Text({ children, as: Tag = 'p', muted = false, size = 'base', className = '' }: TextProps) {
  return (
    <Tag className={`${styles.text} ${styles[`size-${size}`]} ${muted ? styles.muted : ''} ${className}`}>
      {children}
    </Tag>
  );
}

interface LabelProps {
  children: ReactNode;
  className?: string;
}

export function Label({ children, className = '' }: LabelProps) {
  return <span className={`${styles.label} ${className}`}>{children}</span>;
}

interface SerifItalicProps {
  children: ReactNode;
  className?: string;
}

export function SerifItalic({ children, className = '' }: SerifItalicProps) {
  return <span className={`${styles.serifItalic} ${className}`}>{children}</span>;
}
