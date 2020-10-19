import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Pictogram from './Pictogram'
import Version from './Version';

function Options({ choice }) {
  const ref = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [choice]);

  if (!choice) return null;

  return (
    <div ref={ref}>
      <Container fluid as='section' className='bg-light-grey-blue'>
        <Container>
          <Row>
            <Col className='py-3'>
              <p className="big-title text-center">{t(choice.title)}</p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            {choice.options.map((p, k) => <Pictogram key={k} to={p.to} href={p.href} src={p.src} title={p.title} />)}
          </Row>
        </Container>
        <Version printer={choice.title} />
      </Container>
    </div>
  );
}

export default Options;
