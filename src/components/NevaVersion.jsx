import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function NevaVersion() {
  const [display, setDisplay] = useState(false);
  const { t } = useTranslation();
  return (
    <section className="col-xl-24 col-space row">
      <div className="wrap row">
        <p className="tcenter"><a className="link-classic" href="#neva-version"
          onClick={() => setDisplay(!display)}>{t('home.check_neva_version')}</a></p>
      </div>
      {
        (display)
          ? <div className="block-sub row col-xl-24">
            <div className="col-xl-24 block-white-space">
              <p className="tcenter bold col-vspace">{t('home.magis_serial_number')}</p>
              <p className="tcenter bold col-vspace">{t('home.neva_serial_number')}</p>
              <figure id="neva-version" className="col-xl-18 col-xl-offset-3 col-l-20 col-l-offset-2 col-m-24 col-m-offset-0 col-space row">
                <img className="col-xl-24" src="/img/home/n-serie-neva.jpg" alt={t('home.find_neva_version')} />
              </figure>
            </div>
          </div>
          : null
      }
    </section>
  );
}

export default NevaVersion;
