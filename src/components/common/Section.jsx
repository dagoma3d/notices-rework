import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Media from './Media';
import Item from './Item';

function Article({ content }) {
  return (
    <Col className="col-xl-6 px-0">
      <div className="py-3 pl-5">
        {content.map((i, k) => (
          <Item key={k} content={i} />
        ))}
      </div>
    </Col>
  );
}

function Section({ index, content }) {
  const { id, media, article } = content;
  const blocks =
    index % 2 === 0 ? (
      <Fragment>
        <Article content={article} />
        <Media content={media} position="right" />
      </Fragment>
    ) : (
      <Fragment>
        <Media content={media} position="left" />
        <Article content={article} />
      </Fragment>
    );
  return (
    <Container fluid as="section" id={id} className="height-350 bg-light-grey">
      <Row className="align-items-center">{blocks}</Row>
    </Container>
  );
}

export default Section;
