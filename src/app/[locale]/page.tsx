import HomeContainer from '@/containers/home/page';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { IParams } from './types';
import { locales } from '@/i18n';
import {
  langMetaConvert,
  langCanonicalUrls,
} from '@/components/get-lang-contents/lang-meta-convert';

// Static meta tags rendering
export async function generateMetadata({ params: { locale } }: IParams) {
  const multiMetadata = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: multiMetadata('title'),
    description: multiMetadata('description'),
    keywords: multiMetadata('keywords'),
    metadataBase: new URL(multiMetadata('metadataBase.baseUrl')),
    alternates: {
      canonical: '/',
      languages: langCanonicalUrls(locales, locale),
    },
    openGraph: {
      //og:title, og:description yerine geçer. genel sosyal medyalarda görünüm.
      title: multiMetadata('openGraph.title'),
      description: multiMetadata('openGraph.description'),
      locale: multiMetadata('openGraph.locale'),
      alternateLocale: langMetaConvert(locales, locale),
    },
  };
}

export default function Index({ params: { locale } }: IParams) {
  unstable_setRequestLocale(locale);

  return <HomeContainer />;
}
