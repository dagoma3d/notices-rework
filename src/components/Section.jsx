import React from 'react';
import { useTranslation } from 'react-i18next';

function Title({ title }) {
  const { t } = useTranslation();
  if (!title) return null;
  return (
    <div className="col-xl-24 col-vspace">
      <p className="big-title tcenter">{t(title)}</p>
    </div>
  );
}

function Article(props) {
  const { href, picto, alt, title, onClick } = props;
  const { t } = useTranslation();
  return (
    <article className="col-xl-6 col-l-8 col-m-12 col-s-24 col-space margin-bottom-box">
      <a className="btn-diag-or" href={href} onClick={onClick}>
        <div className="btn-diag">
          <img src={`/pictos/${picto}`} alt={t(alt)} />
        </div>
        <h2>{title ? t(title) : t(alt)}</h2>
      </a>
    </article>
  );
}

function Section({ id, title, articles, onClick }) {
  return (
    <section id={id} className={`${title ? 'block-sub ' : ''}col-xl-24${title ? 'bg-light-grey-blue block-hidden ' : ''}row`}>
      <div className={`btn-diag-container container ${title ? 'no-float ' : ''}block-white-space wrap row`}>
        <Title title={title} />
        {articles.map((i, k) => <Article key={k} id={i.id} href={i.href} picto={i.picto} alt={i.alt} title={i.title} onClick={onClick} />)}
      </div>
    </section>
  );
}

export default Section;
