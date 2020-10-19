import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Item from './Item';

function Title({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <p className="big-title">{t(content)}</p>;
}

function SubTitle({ content, small }) {
  const { t } = useTranslation();
  if (!content) return null;
  const classes = small ? (content.length === 1 ? ['col-vspace'] : ['col-vtspace', 'col-vbspace']) : null;
  const getItem = (i, k) => {
    if (typeof i === 'string') return <p key={k} className={classes ? classes[k] : null}>{t(i)}</p>
    return <Item content={i} />
  }
  return (
    <Fragment>
      {content.map((i, k) => getItem(i, k))}
    </Fragment>
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
      'default': 'bg-gradient-orange',
      'grey': 'bg-light-grey-blue',
      'transparent': ' '
    }
    return bg[style] || bg.default
  }

  const classes = ((small) ? `${getBackground(background)}` : `block-big-white-space ${getBackground(background)}`);
  return (
    <Container fluid as="section" className={classes}>
      <Row>
        <Col>
          <Title content={title} />
          <SubTitle small={small} content={subtitle} />
          <Items content={items} />
        </Col>
      </Row>
    </Container>
  );
}

Banner.defaultProps = {
  small: false,
}

export default Banner;
