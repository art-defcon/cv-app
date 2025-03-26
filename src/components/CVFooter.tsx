import React from 'react';
import { Card, Row } from 'react-bootstrap';
import '../styles/footer.css';

export default function CVFooter() {
  return (
    <Card className="cv-footer">
      <Row>
        <h5 className="cv-footer-name">John Henrik Petroff</h5>
        <div className="cv-footer-contact">
          <span>Email: john (@) petroff.se</span>
          <span className="separator">•</span>
          <span>Phone: +46 (0) 707 20 00 87</span>
          <span className="separator">•</span>
          <span>Location: Stockholm, Sweden</span>
          <span className="separator">•</span>
          <span>LinkedIn: linkedin.com/in/johnpetroff</span>
        </div>
      </Row>
    </Card>
  );
}
