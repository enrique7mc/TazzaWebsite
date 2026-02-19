import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PageWrapper } from '../components/layout';
import { SEO } from '../components/SEO';
import { Heading } from '../components/ui';
import { FAQItem } from '../components/ui';
import styles from './FAQPage.module.css';

interface FAQEntry {
  question: string;
  answer: string;
}

export function FAQPage() {
  const { t } = useTranslation();

  const items = t('items', { ns: 'faq', returnObjects: true }) as FAQEntry[];

  return (
    <PageWrapper>
      <SEO
        title={t('seo.faq.title', { ns: 'common' })}
        description={t('seo.faq.description', { ns: 'common' })}
      />
      <div className={styles.page}>
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" serif className={styles.title}>
            {t('title', { ns: 'faq' })}
          </Heading>

          <div className={styles.list}>
            {Array.isArray(items) && items.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
