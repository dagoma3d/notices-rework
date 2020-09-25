import React from 'react';
import Banner from './Banner';
import Section from './Section';
import Interface from '../cura-by-dagoma/Interface';

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

export default Block
