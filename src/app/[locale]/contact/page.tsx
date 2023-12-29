import ContactContainer from '@containers/contact';
import { getTranslations } from 'next-intl/server';
import { IParams } from './types';
import { locales } from '@/i18n';
import {
  langMetaConvert,
  langCanonicalUrls,
} from '@/components/get-lang-contents/lang-meta-convert';
import meta800600 from '@/../public/images/meta/800-600-meta.png';
import meta18001600 from '@/../public/images/meta/1800-1600-meta.png';

// Static meta tags rendering
export async function generateMetadata({ params: { locale } }: IParams) {
  const multiMetadata = await getTranslations({ locale, namespace: 'Metadata' });

  // icons ve apple-icons eklemek için takip et :  https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#image-files-ico-jpg-png
  return {
    title: multiMetadata('Contact.title'),
    description: multiMetadata('Contact.description'),
    keywords: multiMetadata('Contact.keywords'),
    metadataBase: new URL(multiMetadata('Contact.metadataBase.baseUrl')),
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
      title: multiMetadata('Contact.openGraph.title'),
      description: multiMetadata('Contact.openGraph.description'),
      locale: multiMetadata('Base.openGraph.locale'),
      alternateLocale: langMetaConvert(locales, locale),
      url: multiMetadata('Contact.openGraph.url'),
      type: 'website',
      siteName: multiMetadata('Base.openGraph.siteName'),
      images: [
        {
          url: `${meta800600.src}`,
          width: 800,
          height: 600,
        },
        {
          url: `${meta18001600.src}`,
          width: 1800,
          height: 1600,
          alt: multiMetadata('Contact.openGraph.imagesAlt'),
        },
      ],
    },
  };
}

const AboutPage = ({ params: { locale } }: IParams) => {
  return <ContactContainer locale={locale} />;
};

export default AboutPage;
