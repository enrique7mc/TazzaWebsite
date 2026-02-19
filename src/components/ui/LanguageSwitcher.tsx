import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './LanguageSwitcher.module.css';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentLang = i18n.language?.substring(0, 2) || 'en';

  const handleLanguageChange = (langCode: string) => {
    const pathWithoutLang = location.pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
    const newPath = langCode === 'en' ? pathWithoutLang : `/${langCode}${pathWithoutLang}`;

    i18n.changeLanguage(langCode);
    navigate(newPath);
  };

  return (
    <div className={styles.switcher}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`${styles.langButton} ${currentLang === lang.code ? styles.active : ''}`}
          aria-label={`Switch to ${lang.code === 'en' ? 'English' : 'Spanish'}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
