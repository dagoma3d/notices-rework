import React, { Fragment, useState } from 'react';
import Options from './Options';
import Pictogram from './Pictogram';

function Choices({ content }) {
  const [choice, setChoice] = useState();
  return (
    <Fragment>
      <section className='col-xl-24 row'>
        <div className='btn-diag-container container wrap row'>
          {content.map((p, k) => <Pictogram key={k} to={p.to} src={p.src} title={p.title} onClick={() => setChoice(k)} />)}
        </div>
      </section>
      <Options choice={content[choice]} />
    </Fragment>
  );
}

export default Choices;
