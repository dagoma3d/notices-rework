import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

function Title({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <p className="big-title">{t(content)}</p>;
}

function SubTitle({ small, content }) {
  const { t } = useTranslation();
  if (!content) return null;
  const classes = small ? (content.length === 1 ? ['col-vspace'] : ['col-vtspace', 'col-vbspace']) : null;
  return (
    <Fragment>
      {content.map((i, k) => <p key={k} className={classes ? classes[k] : null}>{t(i)}</p>)}
    </Fragment>
  );
}

function Banner({ small, content }) {
  if (!content) return null;

  const { title, subtitle } = content;
  const sectionClasses = (small) ? 'col-xl-24 bg-gradient-orange row' : 'col-xl-24 block-big-white-space bg-gradient-orange row';

  return (
    <section className={sectionClasses}>
      <Title content={title} />
      <SubTitle small={small} content={subtitle} />
    </section>
  );
}

Banner.defaultProps = {
  small: false
}

export default Banner;
