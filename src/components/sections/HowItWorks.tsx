import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';
import { Heading, Text, SerifItalic } from '../ui';
import styles from './HowItWorks.module.css';

const steps = ['step1', 'step2', 'step3'] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HowItWorks() {
  const { t } = useTranslation('home');

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
            <Trans i18nKey="howItWorks.heading" ns="home">
              Simple as your morning <SerifItalic>ritual</SerifItalic>
            </Trans>
          </Heading>
        </motion.div>

        <motion.div
          className={styles.steps}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {steps.map((step, index) => (
            <motion.div key={step} className={styles.step} variants={itemVariants}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <Heading as="h3" className={styles.stepTitle}>
                {t(`howItWorks.${step}.title`)}
              </Heading>
              <Text muted size="sm">
                {t(`howItWorks.${step}.description`)}
              </Text>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
