import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'e') changeLanguage('en');
    if (event.key === 'f') changeLanguage('fr');
  }

  useEffect(() => {
    document.title = t('title');
  });

  return (
    <section className="top-lang row">
      <div className="wrap row">
        <div className="left">
          <Link href="/"><i className="fa fa-home" /></Link>
        </div>
        <div className="right">
          <span className='language-choice' onClick={() => changeLanguage('en')} onKeyPress={handleKeyPress} role='button' tabIndex={0}>en</span> | <span className='language-choice' onClick={() => changeLanguage('fr')} onKeyPress={handleKeyPress} role='button' tabIndex={-1}>fr</span>
        </div>
      </div>
    </section>
  );
}

export default Header
