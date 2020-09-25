import React, { Fragment, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Banner from '../components/common/Banner';
import Block from '../components/common/Block';
import NavBar from '../components/common/NavBar';
import NotFound from '../components/common/NotFound';
import Ribbon from '../components/common/Ribbon';

function Page() {
  const [content, setContent] = useState();
  const match = useRouteMatch();
  console.log(match);

  useEffect(() => {
    const path = `/content${match.url}/index.json`;
    fetch(path)
      .then(response => response.json())
      .then(data => { setContent(data); })
      .catch(error => { setContent({ 'error': error.message }); });
  }, [match]);

  if (!content) return null;

  if (content.error) return <NotFound content={content.error} />;

  return (
    <Fragment>
      <NavBar path={match.params.option} />
      <Banner small content={content.time} />
      <Ribbon content={content.header} />
      {content.blocks.map((i, k) => <Block key={k} index={k} content={i} />)}
      <Ribbon content={content.footer} />
    </Fragment>
  );
}

export default Page;
