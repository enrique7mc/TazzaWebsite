import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

export function Footer() {
  const { t, i18n } = useTranslation('common');
  const lang = i18n.language?.substring(0, 2) || 'en';
  const prefix = lang === 'en' ? '' : `/${lang}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logoIcon}>T</span>
          <span className={styles.logoText}>Tazza</span>
        </div>

        <nav className={styles.links}>
          <Link to={`${prefix}/privacy`} className={styles.link}>
            {t('nav.privacy', 'Privacy')}
          </Link>
          <Link to={`${prefix}/faq`} className={styles.link}>
            {t('nav.faq', 'FAQ')}
          </Link>
          <a href="mailto:hello@xemc.dev" className={styles.link}>
            {t('nav.contact', 'Contact')}
          </a>
        </nav>

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Tazza. {t('footer.rights', 'All rights reserved.')}
        </p>
      </div>
    </footer>
  );
}
