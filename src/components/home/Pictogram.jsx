
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import './Pictogram.css';

function Pictogram({ to, href, src, title, onClick }) {
  const { t } = useTranslation();
  const Tag = (to) ? Link : 'a';
  return (
    <Col as='article' xl={3}>
      <div className="Pictogram">
        <Tag to={to} href={href} onClick={onClick}>
          <div>
            <img src={`/pictos/${src}.svg`} alt={t(title)} />
          </div>
          <h2>{t(title)}</h2>
        </Tag>
      </div>
    </Col>
  );
}

Pictogram.defaultProps = {
  src: 'addon',
  title: '',
  onClick: null
}

export default Pictogram;
