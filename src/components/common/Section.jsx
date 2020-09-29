import React from 'react';
import Media from './Media';
import Item from './Item';

function Article({ index, content }) {
  return (
    <section className={`col col-xl-12 col-m-24 row ${(index % 2 === 0) ? 'col-xl-pull-12 col-m-pull-0' : ''}`}>
      <div className="block-caption-classic block-caption-left row col-vspace">
        {content.map((i, k) => <Item key={k} content={i} />)}
      </div>
    </section>
  );
}

function Section({ index, content }) {
  const { id, media, article } = content;
  return (
    <section id={id} className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
      <Media index={index} content={media} />
      <Article index={index} content={article} />
    </section>
  );
}

export default Section;
