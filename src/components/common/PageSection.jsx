import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Media from './Media';


function Text({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return content.map((i, k) => <p key={k}>{t(i)}</p>);
}

function List({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return (
    <ul className="list-classic tleft-child">
      {content.map((i, k) => <li><p key={k}>{t(i)}</p></li>)}
    </ul>
  );
}

function Button({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  const { color, to, text } = content;
  const classes = (color === 'white') ? 'new-btn btn-classic btn-grey btn-wide' : 'new-btn btn-valid btn-wide';
  return (
    <p className="tleft">
      <Link to={to} className={classes}>{t(text)}</Link>
    </p>
  );
}

function PageSection({ index, content }) {
  const { id, media, title, description } = content;
  const { t } = useTranslation();
  console.log(index);
  return (
    <section id={id} className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
      <section className={`col col-xl-12 col-m-24 block-info-cursor bg-white row ${(index % 2 === 0) ? 'col-xl-push-12 col-m-push-0' : ''}`}>
        <Media content={media} />
      </section>
      <section className={`col col-xl-12 col-m-24 row ${(index % 2 === 0) ? 'col-xl-pull-12 col-m-pull-0' : ''}`}>
        <div className="block-caption-classic block-caption-left row col-vspace">
          <p className="big-title">{t(title)}</p>
          <Text content={description.text} />
          <List content={description.list} />
          <Button content={description.button} />
        </div>
      </section>
    </section>
  );
}

export default PageSection;
