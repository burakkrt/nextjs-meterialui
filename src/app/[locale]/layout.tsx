import { notFound } from 'next/navigation';
import '@styles/reset.css';
import '@styles/global.css';
import { unstable_setRequestLocale } from 'next-intl/server';
import { IRootParams } from './types';
import type { Metadata } from 'next';
import { locales } from '@/i18n';
import ThemeRootProvider from '@/components/theme-provider/ThemeProvider';
import HeaderPage from '@/components/header/page';
import FooterPage from '@/components/footer/page';
import getLangContent from '@/components/get-lang-contents/getLangHeaders';
import getLangFooters from '@components/get-lang-contents/getLangFooters';

import ReduxProvider from '@store/ReduxProvider';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'dddd',
  description: 'das',
};

export default function LocaleLayout({ children, params: { locale } }: IRootParams) {
  unstable_setRequestLocale(locale);

  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body>
        <ReduxProvider>
          <ThemeRootProvider>
            <HeaderPage locale={locale} langHeader={getLangContent()} />
            {children}
            <FooterPage
              locale={locale}
              langHeader={getLangContent()}
              langFooter={getLangFooters()}
            />
          </ThemeRootProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
