import { getRequestConfig } from 'next-intl/server';

export const locales = ['tr', 'en'];

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./languages/${locale}.json`)).default,
}));
