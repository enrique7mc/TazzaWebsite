import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';
import { Heading, Text, SerifItalic, Button } from '../ui';
import { AccentDot } from '../ui';
import styles from './FinalCTA.module.css';

export function FinalCTA() {
  const { t } = useTranslation('home');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2" serif className={styles.title}>
            <Trans i18nKey="finalCta.heading" ns="home">
              Ready to understand your <SerifItalic>caffeine</SerifItalic>?
            </Trans>
          </Heading>

          <ul className={styles.benefits}>
            <li className={styles.benefit}>
              <AccentDot color="amber" size="sm" />
              <Text size="base">{t('finalCta.benefit1')}</Text>
            </li>
            <li className={styles.benefit}>
              <AccentDot color="green" size="sm" />
              <Text size="base">{t('finalCta.benefit2')}</Text>
            </li>
            <li className={styles.benefit}>
              <AccentDot color="terracotta" size="sm" />
              <Text size="base">{t('finalCta.benefit3')}</Text>
            </li>
          </ul>

          <Button size="lg" disabled>
            {t('finalCta.cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
