import React from 'react';
import { useTranslation } from 'react-i18next';

function Link({ link }) {
  const { t } = useTranslation();
  if (!link) return null;
  const { href, classes, download, target, text } = link;
  return <a href={href} className={classes} download={download} target={target}>{t(text)}</a>;
}

function Item(props) {
  const { classes, text, tag, link } = props;
  const { t } = useTranslation();
  const customClasses = classes || 'tleft col-vbspace';
  const CustomTag = tag ? `${tag.name}` : null;
  if (CustomTag) return <li><CustomTag className={tag.classes}>{t(text)}</CustomTag></li>;
  if (link) return <li className={customClasses}>{text}<Link link={link} /></li>;
  return <li className={customClasses}>{t(text)}</li>;
}

function List({ list }) {
  const { tag, classes, items } = list;
  const CustomTag = tag ? `${tag}` : `ul`;
  const customClasses = classes || ((classes === '') ? null : 'list-classic tnormal row tleft-child');
  return (
    <CustomTag className={customClasses}>
      {items.map((i, k) => <Item key={k} tag={i.tag} classes={i.classes} text={i.text} link={i.link} />)}
    </CustomTag>
  );
}

function Text(props) {
  const { tag, classes, text, link, list } = props;
  const { t } = useTranslation();
  const CustomTag = tag ? `${tag}` : `p`;
  if (list) return <List list={list} />;
  if (link) return <CustomTag className={classes}>{text} <Link link={link} />{(text ? '.' : '')}</CustomTag>
  return <CustomTag className={classes}>{t(text)}</CustomTag>;
}

export default Text
