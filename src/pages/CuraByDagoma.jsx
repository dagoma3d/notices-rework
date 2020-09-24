import React, { Fragment, useEffect, useState } from 'react';
import Banner from '../components/common/Banner';
import Ribbon from '../components/common/Ribbon';
import Section from '../components/common/Section';
import Interface from '../components/cura-by-dagoma/Interface';

function Block({ index, content }) {
  switch (content.type) {
    case 'interface':
      return <Interface />;
    case 'banner':
      return <Banner content={content} />;
    default:
      return <Section index={index} content={content} />;
  };
}

function CuraByDagoma() {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch('./content/cura-by-dagoma/page.json').then(response => {
      response.json().then(data => {
        setContent(data);
      });
    });
  }, []);

  if (!content) return null;

  return (
    <Fragment>
      <Ribbon content={content.header} />
      {content.sections.map((i, k) => <Block key={k} index={k} content={i} />)}
      <Ribbon content={content.footer} />
    </Fragment>
  );
}

export default CuraByDagoma;
