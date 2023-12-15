import { notFound } from 'next/navigation';

// Can be imported from a shared config
const locales = ['en', 'tr'];

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: any;
  params: any;
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
