import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Version.css';

function Version({ printer }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    if (ref.current)
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [show]);

  if (!['magis', 'neva'].includes(printer.toLowerCase())) return null;

  return (
    <Container ref={ref}>
      <Row className="py-3">
        <Col>
          <p className="text-center">
            <Link to="/" className="link-classic" onClick={() => setShow(!show)}>
              {t('Comment vérifier la version de votre Neva ?')}
            </Link>
          </p>
        </Col>
      </Row>
      <Row className={show ? null : 'hidden'}>
        <Col>
          <p className="text-center font-weight-bold">{t('Magis : Numéro de série > 6000')}</p>
          <p className="text-center font-weight-bold">
            {t('Neva : Numéro de série < 6000 ou pas de numéro de série')}
          </p>
          <figure>
            <img src="/img/home/n-serie-neva.jpg" alt={t('Trouver numéro de série de ma Neva')} />
          </figure>
        </Col>
      </Row>
    </Container>
  );
}

Version.defaultProps = {
  printer: '',
};

export default Version;
