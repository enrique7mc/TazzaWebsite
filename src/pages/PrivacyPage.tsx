import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PageWrapper } from '../components/layout';
import { SEO } from '../components/SEO';
import { Heading, Text } from '../components/ui';
import styles from './PrivacyPage.module.css';

interface PrivacySection {
  title: string;
  content: string;
}

export function PrivacyPage() {
  const { t } = useTranslation();

  const sections = t('sections', { ns: 'privacy', returnObjects: true }) as PrivacySection[];

  return (
    <PageWrapper>
      <SEO
        title={t('seo.privacy.title', { ns: 'common' })}
        description={t('seo.privacy.description', { ns: 'common' })}
      />
      <div className={styles.page}>
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" serif className={styles.title}>
            {t('title', { ns: 'privacy' })}
          </Heading>
          <Text muted size="sm" className={styles.updated}>
            {t('lastUpdated', { ns: 'privacy' })}
          </Text>

          <div className={styles.content}>
            {Array.isArray(sections) && sections.map((section, index) => (
              <section key={index} className={styles.section}>
                <Heading as="h2" className={styles.sectionTitle}>
                  {section.title}
                </Heading>
                <Text muted>{section.content}</Text>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
