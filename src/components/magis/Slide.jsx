import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Slide.css';

function Slide() {
  const [slide, setSlide] = useState();
  const [ok, setOk] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('/content/magis/slide.json').then((response) => {
      response.json().then((data) => {
        setSlide(data);
      });
    });
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 't') setOk(!ok);
  };

  if (!slide) return null;
  const { left, right } = slide;
  return (
    <Container fluid as="section" className="moving-banner-top">
      <article className={`${ok ? 'covered' : 'hover'}`}>
        <figure>
          <div className="hover-tap text-center">
            <i
              className="fa fa-hand-pointer-o"
              onClick={() => setOk(!ok)}
              onKeyPress={handleKeyPress}
              tabIndex={0}
              role="button"
            >
              <span>t</span>
            </i>
          </div>
          <img src={`/img/${left.img}`} alt={t(left.title)} />
          <figcaption className="error">
            <h3 className="text-uppercase text-left font-weight-bold">
              <i className="fa fa-times-circle-o text-danger" aria-hidden="true" />
              {t(left.title)}
            </h3>
            <p className="text-left">{t(left.text)}</p>
          </figcaption>
        </figure>
      </article>
      <article className={`${!ok ? 'covered' : 'hover'}`}>
        <figure>
          <div className="hover-tap text-center">
            <i
              className="fa fa-hand-pointer-o"
              onClick={() => setOk(!ok)}
              onKeyPress={handleKeyPress}
              tabIndex={0}
              role="button"
            >
              <span>t</span>
            </i>
          </div>
          <img src={`/img/${right.img}`} alt={t(right.title)} />
          <figcaption className="valid">
            <h3 className="text-uppercase text-left font-weight-bold">
              <i className="fa fa-times-circle-o text-success" aria-hidden="true" />
              {t(right.title)}
            </h3>
            <p className="text-left">{t(right.text)}</p>
          </figcaption>
        </figure>
      </article>
    </Container>
  );
}

export default Slide;
