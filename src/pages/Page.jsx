import React, { Fragment, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Banner from '../components/common/Banner';
import Block from '../components/common/Block';
import NavBar from '../components/common/NavBar';
import NotFound from '../components/common/NotFound';
import Ribbon from '../components/common/Ribbon';

function Blocks({ content }) {
  if (!content) return null;
  return content.map((i, k) => <Block key={k} index={k} content={i} />);
}

function Page() {
  const [content, setContent] = useState();
  const [nav, setNav] = useState();
  const [active, setActive] = useState();
  const match = useRouteMatch();

  const getValidationUrl = () => {
    if (!nav) return null
    if (active < nav.length - 1) return nav[active + 1].href
  }

  useEffect(() => {
    const resources = [`/content${match.url}.json`, `/content${match.url}/0.json`];
    fetch(resources[0])
      .then((response) => response.json())
      .then(data => setContent(data))
      .catch(() => {
        fetch(resources[1])
          .then(response => response.json())
          .then(data => setContent(data))
          .catch((error) => setContent({ error: error.message }));
      });
  }, [match]);

  useEffect(() => {
    const params = Object.values(match.params).filter((i) => i !== undefined);
    const resources = [`/nav/${params.join('/')}.json`];
    console.log(resources);
    params.pop();
    resources.push(`/nav/${params.join('/')}.json`);

    const handleNav = (data) => {
      setNav(data);
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].href === match.url) {
          setActive(i);
          break;
        }
      }
    };

    fetch(resources[0])
      .then(response => response.json())
      .then(data => handleNav(data))
      .catch(() => {
        fetch(resources[1])
          .then(response => response.json())
          .then(data => handleNav(data))
          .catch(() => setNav());
      });
  }, [match]);

  if (!content) return null;

  if (content.error) return <NotFound content={content.error} />;

  return (
    <Fragment>
      <NavBar nav={nav} active={active} />
      <Banner small content={content.time} />
      <Ribbon content={content.header} />
      <Blocks content={content.blocks} />
      <Ribbon content={content.footer} validationUrl={getValidationUrl()} />
    </Fragment>
  );
}

export default Page;
