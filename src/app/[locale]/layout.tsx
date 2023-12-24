import { notFound } from 'next/navigation';
import '@styles/reset.css';
import '@styles/global.css';
import { unstable_setRequestLocale } from 'next-intl/server';
import { IRootParams } from './types';
import { locales } from '@/i18n';
import ThemeRootProvider from '@/components/theme-provider/ThemeProvider';
import HeaderPage from '@/components/header/page';
import getLangContent from '@/components/get-lang-contents/getLangHeaders';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import pick from 'lodash/pick';

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
      <body>
        <ReduxProvider>
          <NextIntlClientProvider messages={pick(messages, 'Body')}>
            <ThemeRootProvider>
              <HeaderPage locale={locale} langHeader={getLangContent()} />
              {children}
            </ThemeRootProvider>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
