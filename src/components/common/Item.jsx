import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Item.css';

function Text({ content, italic, frame, warning, bold }) {
  const { t } = useTranslation();
  if (!content) return null;
  if (Array.isArray(content)) return content.map((i, k) => <Text key={k} content={i} />);
  const classes = [];
  if (italic) classes.push('font-italic');
  if (bold) classes.push('font-weight-bold');
  if (frame) classes.push('bg-orange text-white p-3');
  if (warning) classes.push('text-danger');
  return <p className={classes.join(' ')}>{t(content)}</p>;
}

function PreTitle({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <h5 className="font-weight-bold text-uppercase">{t(content)}</h5>;
}

function Title({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return <h1 className="font-weight-bold text-uppercase">{t(content)}</h1>;
}

function List({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return (
    <ul className="list-classic">
      {content.map((i, k) => (
        <li key={k}>
          <p className="text-left">{typeof i === 'string' ? t(i) : <Item key={k} content={i} />}</p>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return (
    <ol type="1" className="list-classic">
      {content.map((i, k) => (
        <li key={k}>
          <p className="text-left">{typeof i === 'string' ? t(i) : <Item key={k} content={i} />}</p>
        </li>
      ))}
    </ol>
  );
}

function LetteredList({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return (
    <ol type="A" className="list-classic">
      {content.map((i, k) => (
        <li key={k}>
          <p className="text-left">{typeof i === 'string' ? t(i) : <Item key={k} content={i} />}</p>
        </li>
      ))}
    </ol>
  );
}

function Frame({ content }) {
  if (!content) return null;
  return (
    <div className="bg-orange p-3">
      {content.map((i, k) => (
        <Item key={k} content={i} frame />
      ))}
    </div>
  );
}

function Button({ text, color, to, href, download, label, position }) {
  const { t } = useTranslation();
  if (!to && !href) return null;

  const getClasses = (c) => {
    const classes = {
      white: 'new-btn btn-classic btn-grey btn-wide',
      orange: 'new-btn btn-valid btn-wide',
      default: 'link-classic',
    };
    return classes[c] || classes.default;
  };

  const getPosition = (p) => {
    const classes = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      default: 'text-left',
    };
    return classes[p] || classes.default;
  };

  const pre = text ? `${t(text)} ` : null;
  const post = text ? '.' : null;
  const link = to ? (
    <Link to={to} className={getClasses(color)} download={download}>
      {t(label)}
    </Link>
  ) : (
      <a
        href={href}
        className={getClasses(color)}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t(label)}
      </a>
    );
  return (
    <p className={getPosition(position)}>
      {pre}
      {link}
      {post}
    </p>
  );
}

Button.defaultProps = {
  label: 'ici',
};

function MyContainer({ content }) {
  if (!content) return null;
  return (
    <Container>
      <Row>
        <Col>
          {content.map((i, k) => (
            <Item key={k} content={i} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

function AdditionalInfo({ content }) {
  const { t } = useTranslation();
  if (!content) return null;
  return content.map((p, k) => (
    <p className="text-left mb-3" key={k}>
      {t(p)}
    </p>
  ));
}

function Help({ content }) {
  const { t } = useTranslation();
  if (!content) return null;

  function HelpInfo({ type }) {
    if (!content[type]) return null;

    return (
      <Col className={Object.keys(content).length > 1 ? `text-center ${type}` : 'text-left'}>
        <div className="help-container align-items-center">
          <div>
            <img height="50px" src={`/pictos/${type}.png`} alt={`${type}`} />
          </div>
          <p className="text-justify font-weight-bold m-0">{t(content[type])}</p>
        </div>
      </Col>
    );
  }

  return (
    <Row>
      <HelpInfo type="quick_tips" />
      <HelpInfo type="danger" />
    </Row>
  );
}

function Video({ content }) {
  const { text, id } = content;
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  const handleKeyPress = (event) => {
    if (event.key === 's') setActive(!active);
  };

  return (
    <section>
      <p className="text-left mb-3">
        <button
          className="new-btn btn-classic btn-grey btn-wide btn-show-video"
          type="button"
          onClick={() => setActive(!active)}
        >
          {t('Lire la vidéo')}
        </button>
      </p>
      <AdditionalInfo content={text} />
      <section
        className={`block-video block-video-hidden ${active ? 'active' : null}`}
        style={{ border: 'none' }}
      >
        <div className="block-video-yt">
          <iframe
            title={id}
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <i
            className="fa fa-times-circle-o close-video"
            onClick={() => setActive(!active)}
            onKeyPress={handleKeyPress}
            tabIndex={0}
            role="button"
          >
            <span>s</span>
          </i>
        </div>
      </section>
    </section>
  );
}

function Item({ content }) {
  if (!content) return null;
  const [k, v] = Object.entries(content).filter(entry => entry[0] !== 'type')[0];
  if (!v) return null;
  const items = {
    container: <MyContainer content={v} />,
    pretitle: <PreTitle content={v} />,
    title: <Title content={v} />,
    text: <Text content={v} />,
    bold: <Text content={v} bold />,
    italic: <Text content={v} italic />,
    warning: <Text content={v} warning />,
    list: <List content={v} />,
    'numbered-list': <NumberedList content={v} />,
    'lettered-list': <LetteredList content={v} />,
    help: <Help content={v} />,
    frame: typeof v === 'string' ? <Text content={v} frame /> : <Frame content={v} />,
    button: (
      <Button
        text={v.text}
        color={v.color}
        to={v.to}
        href={v.href}
        download={v.download}
        label={v.label}
        position={v.position}
      />
    ),
    video: <Video content={v} />,
    default: null,
  };
  return items[k] || items.default;
}

export default Item;
