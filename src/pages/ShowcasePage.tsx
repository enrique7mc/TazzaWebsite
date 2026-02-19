import { useTranslation } from 'react-i18next';
import { PageWrapper } from '../components/layout';
import { SEO } from '../components/SEO';
import { Hero, FeaturesGrid, HowItWorks, DrinkLibrary, Testimonial, FinalCTA } from '../components/sections';

export function ShowcasePage() {
  const { t } = useTranslation('common');

  return (
    <PageWrapper>
      <SEO
        title={t('seo.showcase.title')}
        description={t('seo.showcase.description')}
      />
      <Hero />
      <FeaturesGrid />
      <HowItWorks />
      <DrinkLibrary />
      <Testimonial />
      <FinalCTA />
    </PageWrapper>
  );
}
