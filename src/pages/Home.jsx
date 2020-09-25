import React, { Fragment, useEffect, useState } from 'react';
import Choices from '../components/home/Choices';
import Ribbon from '../components/common/Ribbon';
import Banner from '../components/common/Banner';

function Home() {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch('./content/home.json').then(response => {
      response.json().then(data => {
        setContent(data);
      });
    });
  }, [])

  if (!content) return null;

  return (
    <Fragment>
      <Ribbon content={content.header} />
      <Banner content={content.title} />
      <Choices content={content.choices} />
    </Fragment>
  );
}

export default Home
