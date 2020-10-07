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

  useEffect(() => {
    fetch(`/content${match.url}.json`)
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
      })
      .catch(() => {
        fetch(`/content${match.url}/0.json`)
          .then((response) => response.json())
          .then((data) => {
            setContent(data);
          })
          .catch((error) => {
            setContent({ error: error.message });
          });
      })
  }, [match]);

  useEffect(() => {
    const params = Object.values(match.params).filter((i) => i !== undefined);
    fetch(`/nav/${params.join('/')}.json`)
      .then((response) => response.json())
      .then((data) => {
        setNav(data);
        for (let i = 0; i < data.length; i += 1) {
          if (data[i].href === match.url) {
            setActive(i);
            break;
          }
        }
      })
      .catch(() => {
        params.pop();
        fetch(`/nav/${params.join('/')}.json`)
          .then((response) => response.json())
          .then((data) => {
            setNav(data);
            for (let i = 0; i < data.length; i += 1) {
              if (data[i].href === match.url) {
                setActive(i);
                break;
              }
            }
          })
          .catch(() => {
            setNav();
          });
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
      <Ribbon content={content.footer} />
    </Fragment>
  );
}

export default Page;
