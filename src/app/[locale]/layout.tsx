import { notFound } from 'next/navigation';
import '@styles/reset.css';
import '@styles/global.css';
import { unstable_setRequestLocale } from 'next-intl/server';
import { IRootParams } from './types';
import { locales } from '@/i18n';
import ThemeRootProvider from '@/components/theme-provider/ThemeProvider';
import HeaderPage from '@/components/header/page';
import getLangContent from '@/components/get-lang-contents/getLangHeaders';
import getLangFooters from '@components/get-lang-contents/getLangFooters';
import FooterPage from '@/components/footer/page';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import pick from 'lodash/pick';
import favicon16 from '@/../public/images/favicons/favicon-16x16.png';
import favicon32 from '@/../public/images/favicons/favicon-32x32.png';
import favicon48 from '@/../public/images/favicons/favicon.ico';
import favicon180 from '@/../public/images/favicons/apple-touch-icon.png';
import favicon192 from '@/../public/images/favicons/android-chrome-192x192.png';
import favicon512 from '@/../public/images/favicons/android-chrome-512x512.png';

import ReduxProvider from '@store/ReduxProvider';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }: IRootParams) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" href={favicon16.src} sizes="16x16" />
        <link rel="icon" type="image/png" href={favicon32.src} sizes="32x32" />
        <link rel="shortcut icon" type="image/ico" href={favicon48.src} />
        <link rel="apple-touch-icon" type="image/png" href={favicon180.src} sizes="180x180" />
        <link rel="icon" type="image/png" href={favicon192.src} sizes="192x192" />
        <link rel="icon" type="image/png" href={favicon512.src} sizes="512x512" />
      </head>
      <body>
        <ReduxProvider>
          <NextIntlClientProvider messages={pick(messages, 'Body')}>
            <ThemeRootProvider>
              <HeaderPage locale={locale} langHeader={getLangContent()} />
              {children}
              <FooterPage
                locale={locale}
                langHeader={getLangContent()}
                langFooter={getLangFooters()}
              />
            </ThemeRootProvider>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
