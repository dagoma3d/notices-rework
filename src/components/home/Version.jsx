import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function VersionPicture({ display }) {
  const ref = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    if (display) ref.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [display]);

  if (!display) return null;
  return (
    <div className="block-sub row col-xl-24">
      <div className="col-xl-24 block-white-space">
        <p className="tcenter bold col-vspace">{t('Magis + Numéro de série > 6000')}</p>
        <p className="tcenter bold col-vspace">{t('Neva + Numéro de série < 6000 ou pas de numéro de série')}</p>
        <figure className="col-xl-18 col-xl-offset-3 col-l-20 col-l-offset-2 col-m-24 col-m-offset-0 col-space">
          <img className="col-xl-24" src="/img/home/n-serie-neva.jpg" alt={t('Trouver numéro de série de ma Neva')} ref={ref} />
        </figure>
      </div>
    </div>
  );
}

function Version({ printer }) {
  const [display, setDisplay] = useState(false);

  const { t } = useTranslation();

  if (!['magis', 'neva'].includes(printer.toLowerCase())) return null;

  return (
    <section className="col-xl-24 col-space row">
      <div className="wrap row">
        <p className="tcenter">
          <Link to="/" className="link-classic" onClick={() => setDisplay(!display)}>{t('Comment vérifier la version de votre Neva ?')}</Link>
        </p>
      </div>
      <VersionPicture display={display} />
    </section>
  );
}

Version.defaultProps = {
  printer: ''
}

export default Version;
