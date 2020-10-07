import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import { useTranslation } from 'react-i18next';

function Title({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return content.map((i, k) => <h1 key={k} className="title tleft">{t(i)}</h1>);
}

function SubTitle({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <p className="big-title tleft">{t(content)}</p>;
}

function Note({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <p className='small tleft light italic'>{t(content)}</p>;
}

function Items({ content }) {
  if (!content) return null;
  return content.map((i, k) => <Item key={k} content={i} />);
}

function Validation({ content, validationUrl }) {
  const { t } = useTranslation();
  if (!validationUrl) return null;
  const handleOnClick = (e) => {
    setTimeout(() => {
      document.querySelector(`a[href='${validationUrl}']`).click()
    }, 300);
  }

  const label = content && content.text ? content.text : "Je valide cette étape";
  return (
    <Fragment>
      <div className="checkbox-classic checkbox-full-width" onClick={handleOnClick}>
        <input id="yo" type="checkbox" />
        <label className="tnormal valid-step" htmlFor="yo">{t(label)}</label>
      </div>
      <Link to={validationUrl} ></Link>
    </Fragment>
  );
}

function Ribbon({ content, validationUrl }) {
  if (!content) return null;
  const { flip, img, title, subtitle, text, items, note, validation } = content;
  const flipClass = (flip) ? 'block-caption-left' : 'block-caption-right';
  return (
    <section className="col-xl-24 notice-mask row">
      <figure className="row col-xl-24">
        <img className="col-xl-24" src={`/img/${img}`} alt="" />
      </figure>

      <section className={`block-caption-classic ${flipClass}`}>
        <Title content={title} />
        <SubTitle content={subtitle} />
        <Item content={{ "text": text }} />
        <Items content={items} />
        <Validation content={validation} validationUrl={validationUrl} />
        <Note content={note} />
      </section>
    </section>
  );
}

Ribbon.defaultProps = {
  flip: false
}

export default Ribbon;
