import React, { Fragment } from 'react';
import Header from './Header';

function NotFound({ content }) {
  const message = content || '?';
  return (
    <Fragment>
      <Header />
      <h1>404</h1>
      <p>{message}</p>
    </Fragment>
  );
}

export default NotFound;
