import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Item from './Item';

function Title({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <p className="big-title">{t(content)}</p>;
}

function SubTitle({ content, small }) {
  const { t } = useTranslation();
  if (!content) return null;
  const classes = small ? (content.length === 1 ? ['col-vspace'] : ['col-vtspace', 'col-vbspace']) : null;
  const getItem = (i, k) => {
    if (typeof i === 'string') return <p key={k} className={classes ? classes[k] : null}>{t(i)}</p>
    return <Item content={i} />
  }
  return (
    <Fragment>
      {content.map((i, k) => getItem(i, k))}
    </Fragment>
  );
}

function Items({ content }) {
  if (!content) return null;
  return content.map((i, k) => <Item key={k} content={i} />);
}

function Banner({ content, small }) {
  if (!content) return null;

  const { title, subtitle, background, items } = content;
  const getBackground = (style) => {
    const bg = {
      'default': 'bg-gradient-orange',
      'grey': 'bg-light-grey-blue',
      'transparent': ' '
    }
    return bg[style] || bg.default
  }

  const sectionClasses = ((small) ? `col-xl-24 row ${getBackground(background)}` : `col-xl-24 block-big-white-space row ${getBackground(background)}`);
  return (
    <section className={sectionClasses}>
      <Title content={title} />
      <SubTitle small={small} content={subtitle} />
      <Items content={items} />
    </section>
  );
}

Banner.defaultProps = {
  small: false,
}

export default Banner;
