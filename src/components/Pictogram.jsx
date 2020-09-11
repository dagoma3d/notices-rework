import React from 'react';
import { useTranslation } from 'react-i18next';

function Pictogram(props) {
  const { id, href, picto, alt, title } = props;
  const { t } = useTranslation();
  return (
    <article className="col-xl-6 col-l-8 col-m-12 col-s-24 col-space margin-bottom-box">
      <a className={"btn-diag-or" + (id ? " btn-sub-step" : "")} data-id={id} href={href}>
        <div className="btn-diag">
          <img src={"/pictos/" + picto} alt={t(alt)} />
        </div>
        <h2>{title ? t(title) : t(alt)}</h2>
      </a>
    </article>
  );
}

export default Pictogram;
