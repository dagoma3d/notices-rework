import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Choices from '../components/home/Choices';

function Home() {
  const { t } = useTranslation();

  const [content, setContent] = useState();

  useEffect(() => {
    fetch('./content/home.json').then(response => {
      response.json().then(data => {
        setContent(data);
      });
    });
  }, [])

  if (!content) return null;

  return (
    <Fragment>
      <section className="col-xl-24 notice-mask row">
        <figure className="row col-xl-24">
          <img className="col-xl-24" src={`/img/${content.welcome.src}`} alt="" />
        </figure>
        <section className='block-caption-classic block-caption-right'>
          <h1 className='title big tleft'>{t(content.welcome.title)}</h1>
          <p className='tleft big-title'>{t(content.welcome.subtitle)}</p>
          <p className='ijustify light'>{t(content.welcome.description)}</p>
        </section>
      </section>
      <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
        <p className="big-title">{t('Choisissez votre imprimante 3D pour commencer')}</p>
      </section>
      <Choices content={content.choices} />
    </Fragment>
  );
}

export default Home
