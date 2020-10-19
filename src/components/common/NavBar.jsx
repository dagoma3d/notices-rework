import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './NavBar.css';

function Image({ img }) {
  if (!img) return null;
  return (
    <figure>
      <img src={`/img/${img}`} alt="" />
    </figure>
  );
}

function NavItem(props) {
  const { t } = useTranslation();
  const { active, href, label, img } = props;
  return (
    <li className={`new-btn btn-classic btn-grey step ${active ? 'active' : null}`}>
      <a className="btn-wide btn-big" href={href}>
        {t(label)}
        <Image img={img} />
      </a>
    </li>
  );
}

function NavBar({ nav, active }) {
  const [opened, setOpened] = useState(false);

  if (!nav) return null;
  return (
    <nav className={`nav-vertical ${!opened ? 'closed' : null}`}>
      <div className="border-nav">
        <p>Navigation</p>
      </div>
      <ul className="notice-step lsn">
        {nav.map((i, k) => (
          <NavItem key={k} href={i.href} label={i.label} img={i.img} active={active === k} />
        ))}
      </ul>
      <button className="toggle-nav" onClick={() => setOpened(!opened)} type="button">
        <i className="fa fa-arrow-right" />
      </button>
    </nav>
  );
}

export default NavBar;
