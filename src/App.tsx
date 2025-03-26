import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CVCard from './components/CVCard';
import CVFooter from './components/CVFooter';

function App() {
  const cards = [
    { title: 'Education', content: 'Royal Institute of Technology - KTH - IT / Parallel & Distributed Systems' },
    { title: 'Certifications', content: 'Certified SA - Scaled Agile Framework (SAFe)' },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">My CV</h1>
      <Row>
        {cards.map((card, index) => (
          <Col md={4} key={index}>
            <CVCard card={card} />
          </Col>
        ))}
      </Row>
      <CVFooter/>
    </Container>
  );
}

export default App;
