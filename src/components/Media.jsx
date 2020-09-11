import React from 'react';

function Image(props) {
  return (
    <figure className={props.classes}>
      <img src={"/medias/" + props.src} alt="" />
    </figure>
  );
}

function Youtube(props) {
  return (
    <div className="block-video-yt">
      {props.children}
      <iframe title={props.id} src={`https://www.youtube.com/embed/${props.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}

function Media(props) {
  const type = props.info.type;
  if (type === "image") return <Image src={props.info.src} classes={props.info.classes} />;
  if (type === "yt") return <Youtube id={props.info.id} children={props.children} />;
  return <span>No valid media type</span>;
}

export default Media
