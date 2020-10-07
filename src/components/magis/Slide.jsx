import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Slide.css';

function Slide() {
  const [slide, setSlide] = useState();
  const [ok, setOk] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('/content/magis/slide.json').then(response => {
      response.json().then(data => {
        setSlide(data);
      });
    });
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 't') setOk(!ok);
  }

  if (!slide) return null;
  const { left, right } = slide;
  return (
    <section className="moving-banner-top row">
      <article className={`row ${ok ? 'covered' : 'hover'}`}>
        <figure>
          <div className="hover-tap">
            <i className="fa fa-hand-pointer-o" onClick={() => setOk(!ok)} onKeyPress={handleKeyPress} tabIndex={0} role='button'>
              <span>t</span>
            </i>
          </div>
          <img src={`/img/${left.img}`} alt={t(left.title)} />
          <figcaption className="error row">
            <p className="title-banner title">
              <i className="fa fa-times-circle-o text-red" aria-hidden="true" />{t(left.title)}
            </p>
            <p>{t(left.text)}</p>
          </figcaption>
        </figure>
      </article>
      <article className={`row ${!ok ? 'covered' : 'hover'}`}>
        <figure>
          <div className="hover-tap">
            <i className="fa fa-hand-pointer-o" onClick={() => setOk(!ok)} onKeyPress={handleKeyPress} tabIndex={0} role='button'>
              <span>t</span>
            </i>
          </div>
          <img src={`/img/${right.img}`} alt={t(right.title)} />
          <figcaption className="valid row">
            <p className="title-banner title">
              <i className="fa fa-times-circle-o text-green" aria-hidden="true" />{t(right.title)}
            </p>
            <p>{t(right.text)}</p>
          </figcaption>
        </figure>
      </article>
    </section >
  );
}

export default Slide;
