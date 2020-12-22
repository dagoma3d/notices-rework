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
    <h5 className="font-weight-bold text-uppercase" key={k}>
      {t(i)}
    </h5>
  ));
}

function SubTitle({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <h1 className="font-weight-bold text-uppercase">{t(content)}</h1>;
}

function Note({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <p className="font-weight-light font-italic">{t(content)}</p>;
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
        <label className="valid-step" htmlFor="yo">
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
  const flipClass = flip ? 'ribbon-text-left' : 'ribbon-text-right';
  const figure = img ? (
    <figure className="mb-0">
      <img src={`/img/${img}`} alt="" />
    </figure>
  ) : null;

  return (
    <Container fluid as="section">
      <Row className="align-items-center">
        <Col className={img ? `notice-mask px-0` : 'mx-auto'} xs={img ? 4 : 12}>
          {figure}
          <section className={img ? `ribbon-text ${flipClass}` : ''}>
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
