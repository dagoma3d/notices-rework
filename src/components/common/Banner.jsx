import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Item from './Item';

function Title({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return (
    <Row>
      <Col>
        <h1 className="text-center font-weight-bold text-uppercase">{t(content)}</h1>
      </Col>
    </Row>
  );
}

function SubTitle({ content, small }) {
  const { t } = useTranslation();
  if (!content) return null;
  const classes = small ? (content.length === 1 ? ['py-3'] : ['pt-3', 'pb-3']) : null;
  const getItem = (i, k) => {
    if (typeof i === 'string')
      return (
        <p key={k} className={`mb-0 text-center ${classes ? classes[k] : null}`}>
          {t(i)}
        </p>
      );
    return <Item content={i} />;
  };
  return (
    <Row>
      <Col>{content.map((i, k) => getItem(i, k))}</Col>
    </Row>
  );
}

function Items({ content }) {
  if (!content) return null;
  return content.map((i, k) => <Item key={k} content={i} />);
}

function Banner({ content, small }) {
  if (!content) return null;

  const { title, subtitle, background, items } = content;
  const getBackground = (style) => {
    const bg = {
      default: 'bg-gradient-orange',
      grey: 'bg-light-grey',
      transparent: ' ',
    };
    return bg[style] || bg.default;
  };

  const classes = small ? `${getBackground(background)}` : `py-5 ${getBackground(background)}`;
  return (
    <Container fluid as="section" className={classes}>
      <Title content={title} />
      <SubTitle small={small} content={subtitle} />
      <Items content={items} />
    </Container>
  );
}

Banner.defaultProps = {
  small: false,
};

export default Banner;
