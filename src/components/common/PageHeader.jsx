import React from 'react';
import { useTranslation } from 'react-i18next';

function PageHeader({ content }) {
  const { img, title, subtitle, text } = content;
  const { t } = useTranslation();
  return (
    <section className="col-xl-24 notice-mask row">
      <figure className="row col-xl-24">
        <img className="col-xl-24" src={`/img/${img}`} alt="" />
      </figure>

      <section className="block-caption-classic block-caption-right">
        <h1 className="title tleft">{t(title)}</h1>
        <p className="big-title tleft">{t(subtitle)}</p>
        {text.map((i, k) => <p key={k}>{t(i)}</p>)}
      </section>
    </section>
  );
}

export default PageHeader;
