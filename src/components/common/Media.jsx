import React from 'react';
import { Col } from 'react-bootstrap';

function Youtube({ id, children }) {
  return (
    <div className="block-video-yt">
      {children}
      <iframe
        title={id}
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function Image({ small, src }) {
  const classes = small ? 'notice-small-img' : null;
  return (
    <figure className={classes}>
      <img src={`/img/${src}`} alt="" />
    </figure>
  );
}

function Media({ content }) {
  const { id, src, small, gray } = content;
  const color = gray ? 'color-anthracite' : 'bg-white';
  let media = null;
  if (id) media = <Youtube id={id} />;
  else if (src) media = <Image small={small || gray} src={src} />;
  return <Col className={`col-xl-6 ${color} px-0`}>{media}</Col>;
}

export default Media;
