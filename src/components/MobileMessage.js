import React from 'react';
import meImg from '../assets/img/me.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const MobileMessage = () => {
  return (
    <div className="mobile-message-container">
      <div className="mobile-message-card">
        <img src={meImg} alt="Akshita Sharma" className="mobile-avatar" />
        
        <h1 className="mobile-message-title">
          Aww, View it When You are On Your Laptop PLEASE <span className="mobile-heart">♡</span>
        </h1>
        
        <p className="mobile-message-subtitle">
          Till then Let's Connect on Socials <span className="mobile-heart">♡</span>
        </p>
        
        <div className="mobile-socials">
          <a 
            href="https://www.linkedin.com/in/akshita-sharma1234" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-social-link"
            aria-label="LinkedIn"
          >
            <img src={navIcon1} alt="LinkedIn" />
          </a>
          
          <a 
            href="https://github.com/akshita-xyz" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-social-link"
            aria-label="GitHub"
          >
            <img src={navIcon2} alt="GitHub" />
          </a>
          
          <a 
            href="https://www.instagram.com/akshita_shhh/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-social-link"
            aria-label="Instagram"
          >
            <img src={navIcon3} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};
