import { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import styles from './PageWrapper.module.css';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
