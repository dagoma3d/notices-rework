import React from 'react';
import { useTranslation } from 'react-i18next';

function Title({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return content.map((i, k) => <h1 key={k} className="title tleft">{t(i)}</h1>);
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

function Texts({ content }) {
  if (!content) return null;
  return content.map((i, k) => <Text key={k} content={i} />);
}

function Ribbon({ content }) {
  const { flip, img, title, subtitle, text } = content;
  const flipClass = (flip) ? 'block-caption-left' : 'block-caption-right';
  return (
    <section className="col-xl-24 notice-mask row">
      <figure className="row col-xl-24">
        <img className="col-xl-24" src={`/img/${img}`} alt="" />
      </figure>

      <section className={`block-caption-classic ${flipClass}`}>
        <Title content={title} />
        <SubTitle content={subtitle} />
        <Texts content={text} />
      </section>
    </section>
  );
}

Ribbon.defaultProps = {
  flip: false
}

export default Ribbon;
