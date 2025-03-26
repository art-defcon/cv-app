import React, { useState, useEffect } from 'react';
import '../styles/floatingProfile.css';

export default function FloatingProfile() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="floating-profile"
      style={{ 
        transform: `translateY(${Math.min(scrollY * 0.5, 300)}px)`,
      }}
    >
      <div className="profile-image-container">
        <img 
          src="/img/johnpetroff.jpg" 
          alt="John Henrik Petroff" 
          className="profile-image"
        />
      </div>
    </div>
  );
}
