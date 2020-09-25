import React from 'react';
import { useTranslation } from 'react-i18next';

function Title({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <p className="big-title">{t(content)}</p>;
}

function SubTitle({ small, content }) {
  const { t } = useTranslation();
  if (!content) return null;
  const classes = small ? 'col-vspace' : null;
  return <p className={classes}>{t(content)}</p>;
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
