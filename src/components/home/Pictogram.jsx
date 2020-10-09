import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Pictogram({ to, href, src, title, onClick }) {
  const { t } = useTranslation();
  const Tag = (to) ? Link : "a";
  return (
    <article className='col-xl-6 col-l-8 col-m-12 col-s-24 col-space margin-bottom-box'>
      <Tag className='btn-diag-or' to={to} href={href} onClick={onClick}>
        <div className='btn-diag'>
          <img src={`/pictos/${src}.svg`} alt={t(title)} />
        </div>
        <h2>{t(title)}</h2>
      </Tag>
    </article>
  );
}

Pictogram.defaultProps = {
  src: 'addon',
  title: '',
  onClick: null
}

export default Pictogram;
