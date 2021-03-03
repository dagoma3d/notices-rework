import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import './Pictogram.css';

function Pictogram({ to, href, src, title, onClick }) {
  const { t } = useTranslation();
  const Tag = to ? Link : 'a';
  const target = href ? '_blank' : null;
  return (
    <Col as="article" xl={3}>
      <div className="Pictogram">
        <Tag to={to} href={href} target={target} onClick={onClick}>
          <div>
            <img src={`/pictos/${src}.svg`} alt={t(title)} />
          </div>
          <h4 className="text-center font-weight-bold text-uppercase">{t(title)}</h4>
        </Tag>
      </div>
    </Col>
  );
}

Pictogram.defaultProps = {
  src: 'addon',
  title: '',
  onClick: null,
};

export default Pictogram;
