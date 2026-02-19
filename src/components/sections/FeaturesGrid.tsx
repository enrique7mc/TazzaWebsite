import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';
import { Heading, Text, Label, SerifItalic } from '../ui';
import styles from './FeaturesGrid.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeaturesGrid() {
  const { t } = useTranslation('home');

  const features = [
    { key: 'metabolism', size: 'large' as const },
    { key: 'sleepCountdown', size: 'large' as const },
    { key: 'quickLog', size: 'small' as const },
    { key: 'watch', size: 'small' as const },
    { key: 'widgets', size: 'full' as const },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" serif className={styles.title}>
            <Trans i18nKey="features.heading" ns="home">
              Everything you need to understand your <SerifItalic>caffeine</SerifItalic>
            </Trans>
          </Heading>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature) => (
            <motion.article
              key={feature.key}
              className={`${styles.card} ${styles[`card-${feature.size}`]}`}
              variants={itemVariants}
            >
              <Label>{t(`features.${feature.key}.label`)}</Label>
              <Heading as="h3" className={styles.cardTitle}>
                {t(`features.${feature.key}.title`)}
              </Heading>
              <Text muted size="sm">
                {t(`features.${feature.key}.description`)}
              </Text>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
