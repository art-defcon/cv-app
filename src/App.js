import React from 'react';
import { Container } from 'react-bootstrap';
import CVCard from './components/CVCard';
import CVFooter from './components/CVFooter';
import CVHeader from './components/CVHeader';
import EmploymentHistory from './components/EmploymentHistory';
import FloatingProfile from './components/FloatingProfile';
import './styles/CV.css';

function App() {
  const cards = [
    { title: 'Education', content: 'Royal Institute of Technology - KTH - IT / Parallel & Distributed Systems' },
    { title: 'Certifications', content: 'Certified SA - Scaled Agile Framework (SAFe)' },
  ];

  return (
    <Container className="cv-container">
      <FloatingProfile />
      <CVHeader />
      
      <EmploymentHistory />
      
      {cards.map((card, index) => (
        <CVCard key={index} card={card} />
      ))}
      
      <CVFooter />
    </Container>
  );
}

export default App;
