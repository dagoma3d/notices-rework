import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Pictogram({ to, src, title, onClick }) {
  const { t } = useTranslation();

  return (
    <article className='col-xl-6 col-l-8 col-m-12 col-s-24 col-space margin-bottom-box'>
      <Link className='btn-diag-or' to={to} onClick={onClick}>
        <div className='btn-diag'>
          <img src={`/pictos/${src}.svg`} alt={t(title)} />
        </div>
        <h2>{t(title)}</h2>
      </Link>
    </article>
  );
}

Pictogram.defaultProps = {
  to: '/',
  src: 'addon',
  title: '',
  onClick: null
}

export default Pictogram;
