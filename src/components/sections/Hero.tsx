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
            <div className={styles.mockupPlaceholder}>
              <div className={styles.curvePreview}>
                <div className={styles.curveBar} style={{ height: '90%', background: 'var(--color-accent-3)' }} />
                <div className={styles.curveBar} style={{ height: '75%', background: 'var(--color-accent-1)' }} />
                <div className={styles.curveBar} style={{ height: '55%', background: 'var(--color-accent-1)' }} />
                <div className={styles.curveBar} style={{ height: '35%', background: 'var(--color-accent-2)' }} />
                <div className={styles.curveBar} style={{ height: '20%', background: 'var(--color-accent-2)' }} />
                <div className={styles.curveBar} style={{ height: '10%', background: 'var(--color-accent-2)' }} />
              </div>
              <span className={styles.mockupLabel}>Caffeine Curve</span>
            </div>
          </MockupFrame>

          <AccentDot color="amber" size="lg" className={styles.accent1} />
          <AccentDot color="green" size="md" className={styles.accent2} />
          <AccentDot color="terracotta" size="sm" className={styles.accent3} />
        </motion.div>
      </div>
    </section>
  );
}
