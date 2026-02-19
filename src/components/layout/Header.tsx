import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSwitcher } from '../ui';
import styles from './Header.module.css';

export function Header() {
  const { t, i18n } = useTranslation('common');
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const lang = i18n.language?.substring(0, 2) || 'en';
  const prefix = lang === 'en' ? '' : `/${lang}`;

  const navLinks = [
    { to: `${prefix}/`, label: t('nav.home', 'Home') },
    { to: `${prefix}/faq`, label: t('nav.faq', 'FAQ') },
    { to: `${prefix}/privacy`, label: t('nav.privacy', 'Privacy') },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={`${prefix}/`} className={styles.logo}>
          <span className={styles.logoIcon}>T</span>
          <span className={styles.logoText}>Tazza</span>
        </Link>

        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${styles.navLink} ${location.pathname === link.to ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className={styles.mobileNav}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className={styles.mobileLangSwitcher}>
              <LanguageSwitcher />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
