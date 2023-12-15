'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

const CiguliPage = () => {
  const t = useTranslations('Body');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('desc')}</p>
    </div>
  );
};

export default CiguliPage;
