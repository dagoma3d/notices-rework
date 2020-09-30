import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Text({ content, italic, frame, warning }) {
  const { t } = useTranslation();
  if (!content) return null;
  const classes = [];
  if (italic) classes.push('italic');
  if (frame) classes.push('bg-orange text-white col-space');
  if (warning) classes.push('text-red');
  return <p className={classes.join(' ')}>{t(content)}</p>;
}

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

function List({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return (
    <ul className="list-classic tleft-child">
      {content.map((i, k) => <li key={k}><p>{typeof i == "string" ? t(i) : <Item key={k} content={i} />}</p></li>)}
    </ul>
  );
}

function Button({ text, color, to, href, download, label }) {
  const { t } = useTranslation();
  if (!to && !href) return null;
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
  const link = (to) ? <Link to={to} className={classes} download={download}>{t(label)}</Link> : <a href={href} className={classes} download={download} target='_blank' rel='noopener noreferrer'>{t(label)}</a>;
  return (
    <p className="tleft">
      {pre}{link}{post}
    </p>
  );
}

Button.defaultProps = {
  label: 'ici'
}

function Container({ content }) {
  if (!content) return null;
  return (
    <div className="col-xl-10 col-xl-offset-7 col-s-10 col-s-offset-7 margin-bottom-shop">
      {content.map((i, k) => <Item key={k} content={i} />)}
    </div>
  )
}

Button.defaultProps = {
  label: 'ici'
}

function AdditionalInfo({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return content.map((p, k) => <p className="tleft col-vbspace" key={k}>{t(p)}</p>);
}

function Video({ content }) {
  const { text, id } = content;
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  const handleKeyPress = (event) => {
    if (event.key === 's') setActive(!active);
  }

  return (
    <section>
      <p className="tleft col-vbspace">
        <button className="new-btn btn-classic btn-grey btn-wide btn-show-video" type='button' onClick={() => setActive(!active)}>{t('Lire la vidéo')}</button>
      </p>
      <AdditionalInfo content={text} />
      <section className={`col-xl-24 row block-video block-video-hidden ${active ? 'active' : null}`} style={{ border: 'none' }}>
        <div className="block-video-yt">
          <iframe title={id} src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <div className="close-video">
            <i className="fa fa-close" onClick={() => setActive(!active)} onKeyPress={handleKeyPress} tabIndex={0} role='button'>
              <span>s</span>
            </i>
          </div>
        </div>
      </section>
    </section>
  );
}

function Item({ content }) {
  const [k, v] = Object.entries(content)[0];
  switch (k) {
    case 'container':
      return <Container content={v} />
    case 'pretitle':
      return <PreTitle content={v} />;
    case 'title':
      return <Title content={v} />;
    case 'text':
      return <Text content={v} />;
    case 'italic':
      return <Text content={v} italic />;
    case 'frame':
      return <Text content={v} frame />;
    case 'warning':
      return <Text content={v} warning />;
    case 'list':
      return <List content={v} />;
    case 'button':
      return <Button text={v.text} color={v.color} to={v.to} href={v.href} download={v.download} label={v.label} />;
    case 'video':
      return <Video content={v} />
    default:
      return null;
  }
}

export default Item;
