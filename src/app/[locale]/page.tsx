import { useTranslations } from 'next-intl';
import HomeContainer from '@/containers/home/page';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <>
      <h1>{t('title')}</h1>
      <HomeContainer />
    </>
  );
}
