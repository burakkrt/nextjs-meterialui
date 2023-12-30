import { locales } from '@/i18n';

const checkPathname = (pathname: string) => {
  const check = locales.some((lang) => pathname.includes(lang));

  return check;
};

export default checkPathname;
