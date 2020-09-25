import React, { Fragment } from 'react';

function NotFound({ content }) {
  return (
    <Fragment>
      <h1>404</h1>
      <p>{content}</p>
    </Fragment>
  );
}

export default NotFound
