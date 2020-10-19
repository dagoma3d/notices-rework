import React, { Fragment } from 'react';

function NotFound({ content }) {
  const message = content || '?';
  return (
    <Fragment>
      <h1>404</h1>
      <p>{message}</p>
    </Fragment>
  );
}

export default NotFound;
