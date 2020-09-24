import React from 'react';
import { useTranslation } from 'react-i18next';

function Title({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <h1 className="title tleft">{t(content)}</h1>;
}

function SubTitle({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <p className="big-title tleft">{t(content)}</p>;
}

function Text({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <p>{t(content)}</p>;
}

function Ribbon({ content }) {
  const { img, title, subtitle, text } = content;
  return (
    <section className="col-xl-24 notice-mask row">
      <figure className="row col-xl-24">
        <img className="col-xl-24" src={`/img/${img}`} alt="" />
      </figure>

      <section className="block-caption-classic block-caption-right">
        <Title content={title} />
        <SubTitle content={subtitle} />
        {text.map((i, k) => <Text key={k} content={i} />)}
      </section>
    </section>
  );
}

export default Ribbon;
