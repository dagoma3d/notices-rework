import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function PreTitle({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <h3 className="title tleft">{t(content)}</h3>;
}

function Title({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <p className="big-title">{t(content)}</p>;
}


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
      {content.map((i, k) => <li key={k}><p>{t(i)}</p></li>)}
    </ul>
  );
}

function Button({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  const { text, color, to, label } = content;
  let classes;
  switch (color) {
    case 'white':
      classes = 'new-btn btn-classic btn-grey btn-wide';
      break;
    case 'orange':
      classes = 'new-btn btn-valid btn-wide';
      break;
    default:
      classes = 'link-classic';
  }

  return (
    <p className="tleft">
      {text}<Link to={to} className={classes}>{t(label)}</Link>
    </p>
  );
}

function Paragraph({ index, pretitle, title, description }) {
  return (
    <section className={`col col-xl-12 col-m-24 row ${(index % 2 === 0) ? 'col-xl-pull-12 col-m-pull-0' : ''}`}>
      <div className="block-caption-classic block-caption-left row col-vspace">
        <PreTitle content={pretitle} />
        <Title content={title} />
        <Text content={description.text} />
        <List content={description.list} />
        <Button content={description.button} />
      </div>
    </section>
  );
}

export default Paragraph;
