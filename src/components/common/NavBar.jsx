import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Image({ img }) {
  if (!img) return null;
  return <figure><img src={`/img/${img}`} alt="" /></figure>;
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

function NavBar({ path, active }) {
  const [nav, setNav] = useState();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    fetch(`/content/nav/${path}.json`)
      .then(response => response.json())
      .then(data => { setNav(data); })
      .catch(error => { setNav(); });
  }, [path]);

  if (!nav) return null;
  return (
    <nav className={`nav-vertical col-xl-4 row ${!opened ? 'closed' : null}`}>
      <div className="border-nav col-xl-3">
        <p>Navigation</p>
      </div>
      <ul className="col-xl-21 col-xl-offset-3 row notice-step lsn">
        {nav.map((i, k) => <NavItem key={k} href={i.href} label={i.label} img={i.img} active={active === k} />)}
      </ul>
      <button className="toggle-nav" onClick={() => setOpened(!opened)} type='button'>
        <i className="fa fa-arrow-right" />
      </button>
    </nav>
  );
}

export default NavBar;
