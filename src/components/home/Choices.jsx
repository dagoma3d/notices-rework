import React, { Fragment, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Options from './Options';
import Pictogram from './Pictogram';

function Choices({ content }) {
  const [choice, setChoice] = useState();
  if (!content) return null;
  return (
    <Fragment>
      <Container as="section">
        <Row className="justify-content-md-center">
          {content.map((p, k) => (
            <Pictogram
              key={k}
              to={p.to}
              href={p.href}
              src={p.src}
              title={p.title}
              onClick={() => setChoice(k)}
            />
          ))}
        </Row>
      </Container>
      <Options choice={content[choice]} />
    </Fragment>
  );
}

export default Choices;
