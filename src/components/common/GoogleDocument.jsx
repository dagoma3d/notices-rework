import { useTranslation } from 'react-i18next';
import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function GoogleDocument({ content }) {
  const { title, id, children } = content;
  const { t } = useTranslation();
  const source = useRef();
  const target = useRef();

  useEffect(() => {
    target.current.height = source.current.clientWidth / 2;
  }, [target]);

  return (
    <Container ref={source}>
      <Row>
        <Col>
          <h1 className="text-center font-weight-bold">{t(title)}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <iframe
            ref={target}
            title={title}
            align="middle"
            frameBorder="0"
            width="100%"
            src={`https://docs.google.com/presentation/d/${id}/embed?start=false&amp;loop=false&amp;delayms=3000`}
          />
        </Col>
      </Row>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
}

export default GoogleDocument;
