import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import NevaVersion from './NevaVersion';

function Title({ title }) {
  const { t } = useTranslation();
  if (!title) return null;
  return (
    <div className="col-xl-24 col-vspace">
      <p className="big-title tcenter">{t(title)}</p>
    </div>
  );
}

function HomeSection({ id, title, children }) {
  const sectionClassName = (title) ? 'block-sub col-xl-24 bg-light-grey-blue row' : 'col-xl-24 row';
  const divClassName = (title) ? 'btn-diag-container container no-float wrap row' : 'btn-diag-container container wrap row';
  return (
    <Fragment>
      <section id={id} className={sectionClassName}>
        <div className={divClassName}>
          <Title title={title} />
          {children}
        </div>
      </section>
      {(title && ['magis', 'neva'].includes(title.toLowerCase())) ? <NevaVersion /> : null}
    </Fragment>
  );
}

export default HomeSection;
