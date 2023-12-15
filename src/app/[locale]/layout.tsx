import { notFound } from 'next/navigation';
import '@styles/reset.css';
import '@styles/global.css';
import { unstable_setRequestLocale } from 'next-intl/server';
import { IRootParams } from './types';
import ThemeRootProvider from '@/components/theme-provider/ThemeProvider';

const locales = ['tr', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }: IRootParams) {
  unstable_setRequestLocale(locale);

  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body>
        <ThemeRootProvider>{children}</ThemeRootProvider>
      </body>
    </html>
  );
}
