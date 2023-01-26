import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Interface.css';

function Bubble({ content, onMouseEnter, onMouseLeave }) {
  const { type, top, left, title } = content;
  const { t } = useTranslation();

  return (
    <div
      className={type ? `zone zone-${type}` : 'zone'}
      style={{ top, left }}
      title={t(title)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}

function List({ list }) {
  const { t } = useTranslation();
  if (!list) return null;
  return (
    <ul className="list-classic">
      {list.map((i, k) => (
        <li key={k} className="text-left">
          {t(i)}
        </li>
      ))}
    </ul>
  );
}

function Description({ content }) {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!content) return null;
  const { messages, list } = content;
  return (
    <div className="Interface-description" style={{ top: mousePos.y, left: mousePos.x + 20 }}>
      {messages.map((i, k) => (
        <span key={k}>{t(i)}</span>
      ))}
      <List list={list} />
    </div>
  );
}

function Interface() {
  const [items, setItems] = useState();
  const [description, setDescription] = useState();
  useEffect(() => {
    fetch('/content/cura-by-dagoma/interface.json').then((response) => {
      response.json().then((data) => {
        setItems(data.items);
      });
    });
  }, []);

  if (!items) return null;

  return (
    <Container fluid as="section" className="py-5 bg-gradient-orange">
      <Container>
        <Row className="mb-5 mx-auto">
          <Col className="container-interface px-0">
            <img src="/img/Cura/Notice/e-interface-cura.jpg" alt="Interface Cura by Dagoma" />
            {items.map((i, k) => (
              <Bubble
                key={k}
                content={i.bubble}
                onMouseEnter={() => setDescription(i.description)}
                onMouseLeave={() => setDescription()}
              />
            ))}
          </Col>
        </Row>
      </Container>
      <Description content={description} />
    </Container>
  );
}

export default Interface;
