import ProductsContainer from '@containers/products';
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
    title: multiMetadata('Products.title'),
    description: multiMetadata('Products.description'),
    keywords: multiMetadata('Products.keywords'),
    metadataBase: new URL(multiMetadata('Products.metadataBase.baseUrl')),
    applicationName: multiMetadata('Base.applicationName'),
    referrer: multiMetadata('Base.referrer'),
    alternates: {
      canonical: '/',
      languages: langCanonicalUrls(locales, locale),
    },
    formatDetection: {
      email: multiMetadata('Base.formatDetection.email'),
      address: multiMetadata('Base.formatDetection.address'),
      telephone: multiMetadata('Base.formatDetection.telephone'),
    },
    openGraph: {
      title: multiMetadata('Products.openGraph.title'),
      description: multiMetadata('Products.openGraph.description'),
      locale: multiMetadata('Base.openGraph.locale'),
      alternateLocale: langMetaConvert(locales, locale),
      url: multiMetadata('Products.openGraph.url'),
      type: 'website',
      siteName: multiMetadata('Base.openGraph.siteName'),
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
          alt: multiMetadata('Products.openGraph.imagesAlt'),
        },
      ],
    },
  };
}

const AboutPage = () => {
  return <ProductsContainer />;
};

export default AboutPage;
