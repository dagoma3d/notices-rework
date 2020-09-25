import React from 'react';
import Media from './Media';
import Paragraph from './Paragraph';

function Section({ index, content }) {
  const { id, media, pretitle, title, description } = content;
  return (
    <section id={id} className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
      <Media index={index} content={media} />
      <Paragraph index={index} pretitle={pretitle} title={title} description={description} />
    </section>
  );
}

export default Section;
