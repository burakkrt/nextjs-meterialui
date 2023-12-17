import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'tr',

  // Auto langueage
  localeDetection: true,

  localePrefix: 'never',
});

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(tr|en)/:path*', '/:path*'],
};
