import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';
import { Heading, Text, SerifItalic, Button } from '../ui';
import { AccentDot } from '../ui';
import { MockupFrame } from '../ui';
import styles from './Hero.module.css';

export function Hero() {
  const { t } = useTranslation('home');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h1" serif className={styles.headline}>
            <Trans i18nKey="hero.headline" ns="home">
              Know your caffeine. Own your <SerifItalic>sleep</SerifItalic>.
            </Trans>
          </Heading>

          <Text size="lg" muted className={styles.subtitle}>
            {t('hero.subtitle')}
          </Text>

          <div className={styles.cta}>
            <Button size="lg" disabled>
              {t('hero.cta')}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MockupFrame device="iphone">
            <img src="/hero-image.png" alt="Tazza app showing caffeine decay curve, sleep-ready status, and today's drink log" />
          </MockupFrame>

          <AccentDot color="amber" size="lg" className={styles.accent1} />
          <AccentDot color="green" size="md" className={styles.accent2} />
          <AccentDot color="terracotta" size="sm" className={styles.accent3} />
        </motion.div>
      </div>
    </section>
  );
}
