import React from 'react';

function Image({ classes, src }) {
  return (
    <figure className={classes}>
      <img src={`/medias/${src}`} alt='' />
    </figure>
  );
}

export default Image;
