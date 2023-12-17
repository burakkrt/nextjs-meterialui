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

  // icons ve apple-icons eklemek için takip et :  https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#image-files-ico-jpg-png
  return {
    title: multiMetadata('title'),
    description: multiMetadata('description'),
    keywords: multiMetadata('keywords'),
    metadataBase: new URL(multiMetadata('metadataBase.baseUrl')),
    applicationName: multiMetadata('applicationName'),
    alternates: {
      canonical: '/',
      languages: langCanonicalUrls(locales, locale),
    },
    openGraph: {
      title: multiMetadata('openGraph.title'),
      description: multiMetadata('openGraph.description'),
      locale: multiMetadata('openGraph.locale'),
      alternateLocale: langMetaConvert(locales, locale),
      url: multiMetadata('openGraph.url'),
      type: 'website',
      siteName: multiMetadata('openGraph.siteName'),
      images: [
        {
          url: '...',
          width: 800,
          height: 600,
        },
        {
          url: '...',
          width: 1800,
          height: 1600,
          alt: multiMetadata('openGraph.imagesAlt'),
        },
      ],
    },
  };
}

export default function Index({ params: { locale } }: IParams) {
  unstable_setRequestLocale(locale);

  return <HomeContainer />;
}
