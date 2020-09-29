import { useTranslation } from 'react-i18next';
import React from 'react';

function GoogleDocument({ content }) {
  const { title, id, children } = content;
  const { t } = useTranslation();

  return (
    <div id="content-page" className="custom-page row wrap">
      <div className="row margin-bottom-shop">
        <div className="col-xl-24 capsule-h1 margin-bottom-shop">
          <h1 className="tcenter">{t(title)}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-20 col-xl-offset-2 col-s-24 col-s-offset-0 iframe-width margin-bottom-shop">
          <iframe
            align="middle"
            frameBorder="0"
            height="569"
            width="960"
            src={"https://docs.google.com/presentation/d/" + id + "/embed?start=false&amp;loop=false&amp;delayms=3000"}>
          </iframe>
        </div>
      </div>
      {children}
    </div>
  );
}

export default GoogleDocument;
