import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Interface.css';

function Bubble({ content, onMouseEnter, onMouseLeave }) {
  const { type, top, left, title } = content;
  const { t } = useTranslation();

  return <div className={type ? `zone zone-${type}` : 'zone'} style={{ top, left }} title={t(title)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />;
}

function List({ list }) {
  const { t } = useTranslation();
  if (!list) return null;
  return (
    <ul className="list-classic tleft-child">
      {list.map((i, k) => <li key={k}>{t(i)}</li>)}
    </ul>
  );
}

function Description({ content }) {
  const { t } = useTranslation();

  if (!content) return null;
  const { messages, list } = content;
  return (
    <div className="col-xl-offset-6 col-xl-12 row Interface-description">
      {messages.map((i, k) => <span key={k}>{t(i)}</span>)}
      <List list={list} />
    </div>
  );
}

function Interface() {
  const [items, setItems] = useState();
  const [description, setDescription] = useState();
  useEffect(() => {
    fetch('/content/cura-by-dagoma/interface.json').then(response => {
      response.json().then(data => {
        setItems(data.items);
      });
    });
  }, []);

  if (!items) return null;

  return (
    <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
      <div className="wrap row margin-bottom-shop">
        <div className="col-xl-24 row container-interface">
          <img src="/img/Cura/Notice/e-interface-cura.jpg" alt='Interface Cura by Dagoma' />
          {items.map((i, k) => <Bubble key={k} content={i.bubble} onMouseEnter={() => setDescription(i.description)} onMouseLeave={() => setDescription()} />)}
        </div>
        <Description content={description} />
      </div>
    </section>
  );
}

export default Interface;
