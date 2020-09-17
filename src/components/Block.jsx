import React from 'react';
import Text from './Text';

function Block({ img, flip, content, children }) {
  if (img) {
    return (
      <section className="col-xl-24 notice-mask row">
        <figure className="row col-xl-24">
          <img className="col-xl-24" src={`/img/${img}`} alt="" />
        </figure>

        <section className={`block-caption-classic block-caption-${flip ? 'left' : 'right'}`}>
          {content.map((i, k) => <Text key={k} tag={i.tag} classes={i.classes} text={i.text} link={i.link} />)}
          {children}
        </section>
      </section>
    );
  }
  return (
    <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
      <section className="col-xl-12 col-xl-offset-6 col-l-18 col-l-offset-3 col-m-24 col-m-offset-0 row">
        <div className="col-xl-24 block-caption row col-vspace">
          {content.map((i, k) => <Text key={k} tag={i.tag} classes={i.classes} text={i.text} link={i.link} />)}
          {children}
        </div>
      </section>
    </section>
  );
}


export default Block;
