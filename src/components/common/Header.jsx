import React, { useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleKeyPress = (event) => {
    const events = {
      e: changeLanguage('en'),
      f: changeLanguage('fr'),
    };
    return events[event.key];
  };

  useEffect(() => {
    document.title = t("Notices de montage et d'utilisation");
  });

  return (
    <Navbar sticky="top" bg="gray" className="p-0">
      <Container>
        <Navbar.Brand>
          <Link
            to={{ pathname: '/' }}
            onClick={() => document.body.scrollIntoView({ behavior: 'smooth' })}
          >
            <i className="fa fa-home" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Text>
          <span
            onClick={() => changeLanguage('en')}
            onKeyPress={handleKeyPress}
            role="button"
            tabIndex={0}
          >
            en
          </span>{' '}
          |{' '}
          <span
            onClick={() => changeLanguage('fr')}
            onKeyPress={handleKeyPress}
            role="button"
            tabIndex={-1}
          >
            fr
          </span>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;
