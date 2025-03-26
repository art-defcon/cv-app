import React from 'react';
import { Card } from 'react-bootstrap';

interface CardProps {
  title: string;
  content: string;
  style?: Record<string, string>;
}

export default function CVCard({ card }: { card: CardProps }) {
  return (
    <Card className="cv-card">
      <h5 className="cv-card-title">{card.title}</h5>
      <p className="cv-card-content">{card.content}</p>
    </Card>
  );
}
