import { notFound } from 'next/navigation';
import '@styles/reset.css';
import '@styles/global.css';
import { unstable_setRequestLocale } from 'next-intl/server';
import { IRootParams } from './types';
import ThemeRootProvider from '@/components/theme-provider/ThemeProvider';
import type { Metadata } from 'next';
import { locales } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'dddd',
  description: 'das',
};

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
