import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
}

export function SEO({
  title = 'Tazza - Personalized Caffeine Tracker',
  description = 'The only caffeine tracker that actually knows you.',
  image = '/og-image.jpg',
  imageAlt = 'Tazza app screenshot',
  noIndex = false,
}: SEOProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.substring(0, 2) || 'en';
  const locale = lang === 'es' ? 'es_ES' : 'en_US';
  const baseUrl = 'https://tazza.app';

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href={baseUrl} />
      <link rel="alternate" hrefLang="es" href={`${baseUrl}/es`} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
    </Helmet>
  );
}
