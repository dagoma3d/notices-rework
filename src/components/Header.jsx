import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// page uses the hook
function Header(props) {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.title = t("title");
  });

  return (
    <section id="header" className="top-lang row">
      <div className="wrap row">
        <div className="left">
          <a href="//www.dagoma3d.com" target="_blank" rel="noopener noreferrer"><img src='/logo.png' className="home-icon" alt="home"/></a> | <a href="/"><i className="fa fa-home"></i></a>
        </div>
        <div className="right">
          <a href="#header" className="user-locale" onClick={()=> changeLanguage('en')}>en</a> | <a href="#header" className="user-locale" onClick={()=> changeLanguage('fr')}>fr</a>
        </div>
      </div>
    </section>
  );
}

export default Header
