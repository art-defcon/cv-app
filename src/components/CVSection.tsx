import React from 'react';
import { Card, Row } from 'react-bootstrap';

interface Section {
  title: string;
  content: string;
}

export default function CVSection({ section }: { section: Section }) {
  return (
    <Card className="mb-3 p-3">
      <h5 className="font-weight-bold">{section.title}</h5>
      <p>{section.content}</p>
    </Card>
  );
}
