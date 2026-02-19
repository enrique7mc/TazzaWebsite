import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Text } from '../ui';
import styles from './Testimonial.module.css';

export function Testimonial() {
  const { t } = useTranslation('home');

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <blockquote className={styles.quote}>
          <p className={styles.quoteText}>"{t('testimonial.quote')}"</p>
          <footer className={styles.author}>
            <div className={styles.avatar} aria-hidden="true" />
            <Text as="cite" muted size="sm">
              {t('testimonial.author')}
            </Text>
          </footer>
        </blockquote>
      </motion.div>
    </section>
  );
}
