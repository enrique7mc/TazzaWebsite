import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';
import { Heading, Text, SerifItalic } from '../ui';
import styles from './DrinkLibrary.module.css';

const categoryIcons: Record<string, string> = {
  coffee: '\u2615',
  espresso: '\u2615',
  tea: '\uD83C\uDF75',
  energy: '\u26A1',
  custom: '\u2728',
};

export function DrinkLibrary() {
  const { t } = useTranslation('home');

  const categories = ['coffee', 'espresso', 'tea', 'energy', 'custom'] as const;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" serif className={styles.title}>
            <Trans i18nKey="drinkLibrary.heading" ns="home">
              100+ drinks, <SerifItalic>USDA-accurate</SerifItalic> data
            </Trans>
          </Heading>

          <Text muted size="lg" className={styles.description}>
            {t('drinkLibrary.description')}
          </Text>
        </motion.div>

        <motion.div
          className={styles.categories}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <div key={category} className={styles.categoryChip}>
              <span className={styles.categoryIcon}>{categoryIcons[category]}</span>
              <span>{t(`drinkLibrary.categories.${category}`)}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
