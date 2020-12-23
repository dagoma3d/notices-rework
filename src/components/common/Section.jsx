import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Media from './Media';
import Item from './Item';

function Article({ content, flip }) {
  const forcePosition = flip ? 'force-left' : '';
  return (
    <Col lg={6} className={`px-0 ${forcePosition}`}>
      <div className="py-3 px-5">
        {content.map((i, k) => (
          <Item key={k} content={i} flip={flip} />
        ))}
      </div>
    </Col>
  );
}

function Section({ index, content }) {
  const { id, media, article } = content;
  const blocks =
    <Fragment>
      <Media content={media} flip={index % 2 === 0} />
      <Article content={article} flip={index % 2 === 0} />
    </Fragment>;
  return (
    <Container fluid as="section" id={id} className="height-350 bg-light-grey">
      <Row className="align-items-center">{blocks}</Row>
    </Container>
  );
}

export default Section;
