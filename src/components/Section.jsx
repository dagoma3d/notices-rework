import React from 'react';
import { useTranslation } from 'react-i18next';
import Media from './Media';
import Text from './Text';

function Title(props) {
  const { t } = useTranslation();
  if (props.title) {
    return (
      <div className="col-xl-24 col-vspace">
        <p className="big-title tcenter">{t(props.title)}</p>
      </div>
    );
  } else {
    return null;
  }
}

function Article(props) {
  const { id, href, picto, alt, title, onClick } = props;
  const { t } = useTranslation();
  return (
    <article className="col-xl-6 col-l-8 col-m-12 col-s-24 col-space margin-bottom-box">
      <a className={"btn-diag-or" + (id ? " btn-sub-step" : "")} data-id={id} href={href} onClick={onClick}>
        <div className="btn-diag">
          <img src={"/pictos/" + picto} alt={t(alt)} />
        </div>
        <h2>{title ? t(title) : t(alt)}</h2>
      </a>
    </article>
  );
}

function Section(props) {
  const { id, flip, wrap, color, media, content, title, articles, onClick } = props;
  if (articles) {
    return (
      <section id={id} className={(title ? "block-sub " : "") + "col-xl-24 " + (title ? "bg-light-grey-blue block-hidden " : "") + "row"}>
        <div className={"btn-diag-container container " + (title ? "no-float " : "") + "block-white-space wrap row"}>
          <Title title={title} />
          {articles.map((i, k) => <Article key={k} id={i.id} href={i.href} picto={i.picto} alt={i.alt} title={i.title} onClick={onClick} />)}
        </div>
      </section>
    );
  } else {
    return (
      <section id={id} className={(wrap ? "wrap " : "col-xl-24 ") + "display-flex height-350" + (color ? "" : " bg-light-grey-blue") + " row"}>
        <section className={"col col-xl-12 col-m-24 block-info-cursor " + (color ? color : "bg-white") + " row" + (flip ? " col-xl-push-12 col-m-push-0" : "")}>
          <Media info={media} />
        </section>
        <section className={"col col-xl-12 col-m-24 row" + (flip ? " col-xl-pull-12 col-m-pull-0" : "")}>
          <div className="block-caption-classic block-caption-left row col-vspace">
            {content.map((i, k) => {
              return <Text key={k} tag={i.tag} classes={i.classes} text={i.text} link={i.link} list={i.list} />
            })}
            {props.children}
          </div>
        </section>
      </section>
    );
  }

}

export default Section;
