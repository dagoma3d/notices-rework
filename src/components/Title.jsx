import React from 'react';
import Text from './Text';

function Title(props) {
  const { small, color, content } = props;
  return (
    <section className={"col-xl-24" + (small ? " " : " block-big-white-space ") + (color ? "bg-light-grey-blue " : "bg-gradient-orange ") + "row"}>
      {content.map((i, k) => {
        return <Text key={k} tag={i.tag} classes={i.classes} text={i.text} link={i.link} />
      })}
      {props.children}
    </section>
  );
}

export default Title
