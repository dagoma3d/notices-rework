import React from 'react';
import Banner from './Banner';
import Section from './Section';
import Item from './Item';
import GoogleDocument from './GoogleDocument';
import Interface from '../cura-by-dagoma/Interface';
import Slide from '../magis/Slide';

function Block({ index, content }) {
  const blocks = {
    interface: <Interface />,
    slide: <Slide />,
    banner: <Banner content={content} />,
    'google-document': <GoogleDocument content={content} />,
    item: <Item content={content} />,
    default: <Section index={index} content={content} />,
  };
  return blocks[content.type] || blocks.default;
}

export default Block;
