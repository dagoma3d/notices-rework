import React from 'react';
import { Col } from 'react-bootstrap';
import './Media.css';

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
  const classes = small ? 'notice-small-img text-center mb-0' : 'mb-0';
  return (
    <figure className={classes}>
      <img src={`/img/${src}`} alt="" />
    </figure>
  );
}

function Media({ content, flip }) {
  const { id, src, small, color } = content;

  const c = `bg-${color || 'white'}`;
  const position = flip ? 'right' : 'left';
  const forcePosition = flip ? 'force-right' : '';
  let media = null;
  if (id) media = <Youtube id={id} />;
  else if (src) media = <Image small={small || color === 'anthracite'} src={src} />;
  return <Col className={`media-arrow media-arrow-${position} ${c} px-0 ${forcePosition}`} xl={6}>{media}</Col>;
}

export default Media;
