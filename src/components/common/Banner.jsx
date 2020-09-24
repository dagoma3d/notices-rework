import React from 'react';
import { useTranslation } from 'react-i18next';

function Banner({ content }) {
  const { t } = useTranslation();
  const { title, subtitle } = content;
  return (
    <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
      <p className="big-title">{t(title)}</p>
      <p>{t(subtitle)}</p>
    </section>
  );
}

export default Banner;
