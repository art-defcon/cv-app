import React from 'react';
import '../styles/header.css';

export default function CVHeader() {
  return (
    <div className="cv-header">
      <div className="header-image-container">
        <img 
          src={`${process.env.PUBLIC_URL}/img/header.png`}
          alt="Team" 
          className="header-image" 
        />
        <div className="header-overlay">
          <h1 className="header-title">CV - John Henrik Petroff</h1>
        </div>
      </div>
    </div>
  );
}
