import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Media from './Media';

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
  return <p>{t(content)}</p>;
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

function Button({ text, color, to, label }) {
  const { t } = useTranslation();
  if (!to) return null;
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
  const pre = (text) ? `${t(text)} ` : null;
  const post = (text) ? '.' : null;
  return (
    <p className="tleft">
      {pre}<Link to={to} className={classes}>{t(label)}</Link>{post}
    </p>
  );
}

Button.defaultProps = {
  label: 'ici'
}

function Item({ content }) {
  const [k, v] = Object.entries(content)[0];
  switch (k) {
    case 'pretitle':
      return <PreTitle content={v} />;
    case 'title':
      return <Title content={v} />;
    case 'text':
      return <Text content={v} />;
    case 'list':
      return <List content={v} />;
    case 'button':
      return <Button text={v.text} color={v.color} to={v.to} label={v.label} />;
    default:
      return null;
  }
}

function Article({ index, content }) {
  return (
    <section className={`col col-xl-12 col-m-24 row ${(index % 2 === 0) ? 'col-xl-pull-12 col-m-pull-0' : ''}`}>
      <div className="block-caption-classic block-caption-left row col-vspace">
        {content.map((i, k) => <Item key={k} content={i} />)}
      </div>
    </section>
  );
}

function Section({ index, content }) {
  const { id, media, article } = content;
  return (
    <section id={id} className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
      <Media index={index} content={media} />
      <Article index={index} content={article} />
    </section>
  );
}

export default Section;
