import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import Item from './Item';
import './Ribbon.css';

function Title({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return content.map((i, k) => (
    <h1 key={k} className="title text-left">
      {t(i)}
    </h1>
  ));
}

function SubTitle({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <p className="big-title text-left">{t(content)}</p>;
}

function Note({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <p className="small text-left light italic">{t(content)}</p>;
}

function Items({ content }) {
  if (!content) return null;
  return content.map((i, k) => <Item key={k} content={i} />);
}

function Validation({ content, validationUrl }) {
  const { t } = useTranslation();
  if (!validationUrl) return null;
  const handleOnClick = () => {
    setTimeout(() => {
      document.querySelector(`a[href='${validationUrl}']`).click();
    }, 300);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'c') {
      setTimeout(() => {
        document.querySelector(`a[href='${validationUrl}']`).click();
      }, 300);
    }
  };

  const label = content && content.text ? content.text : 'Je valide cette étape';
  return (
    <Fragment>
      <div
        className="checkbox-classic checkbox-full-width"
        onClick={handleOnClick}
        onKeyPress={handleKeyPress}
        tabIndex={0}
        role="button"
      >
        <input id="yo" type="checkbox" />
        <label className="tnormal valid-step" htmlFor="yo">
          {t(label)}
        </label>
      </div>
      <Link to={validationUrl} />
    </Fragment>
  );
}

function Ribbon({ content, validationUrl }) {
  if (!content) return null;
  const { flip, img, title, subtitle, text, items, note, validation } = content;
  const flipClass = flip ? 'block-caption-left' : 'block-caption-right';
  return (
    <Container fluid as="section">
      <Row>
        <Col className="notice-mask px-0">
          <figure className="mb-0">
            <img src={`/img/${img}`} alt="" />
          </figure>

          <section className={`block-caption-classic ${flipClass}`}>
            <Title content={title} />
            <SubTitle content={subtitle} />
            <Item content={{ text }} />
            <Items content={items} />
            <Validation content={validation} validationUrl={validationUrl} />
            <Note content={note} />
          </section>
        </Col>
      </Row>
    </Container>
  );
}

Ribbon.defaultProps = {
  flip: false,
};

export default Ribbon;
