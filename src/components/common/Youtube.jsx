import React from 'react';

function Youtube({ id, children }) {
  return (
    <div className="block-video-yt">
      {children}
      <iframe title={id} src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
  );
}

export default Youtube;
