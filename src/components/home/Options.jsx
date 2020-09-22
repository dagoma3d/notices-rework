import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Pictogram from './Pictogram'
import Version from './Version';

function Options({ choice }) {
  const ref = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [choice]);

  if (!choice) return null;

  return (
    <section className='block-sub col-xl-24 bg-light-grey-blue row' ref={ref}>
      <div className='btn-diag-container container no-float wrap row'>
        <div className="col-xl-24 col-vspace">
          <p className="big-title tcenter">{t(choice.title)}</p>
        </div>
        {choice.options.map((p, k) => <Pictogram key={k} to={p.to} src={p.src} title={p.title} />)}
      </div>
      <Version printer={choice.title} />
    </section>
  );
}

export default Options;
