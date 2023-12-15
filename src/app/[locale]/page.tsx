import HomeContainer from '@/containers/home/page';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { IParams } from './types';

// Static meta tags rendering
export async function generateMetadata({ params: { locale } }: IParams) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
  };
}

export default function Index({ params: { locale } }: IParams) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');

  return (
    <>
      <h1>{t('title')}</h1>
      <HomeContainer />
    </>
  );
}
