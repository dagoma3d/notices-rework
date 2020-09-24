import React, { Fragment, useEffect, useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import PageSection from '../components/common/PageSection';
import Interface from '../components/cura-by-dagoma/Interface';

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
      <PageHeader content={content.header} />
      {content.sections.map((i, k) => (i.id === 'interface') ? <Interface key={k} /> : <PageSection key={k} index={k} content={i} />)}
    </Fragment>
  );
}

export default CuraByDagoma;
