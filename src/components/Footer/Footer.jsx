import React from 'react';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.css';
import { personalInfo } from '../../constants/portfolioData';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <h3 className="footer-logo">MADASAMY I</h3>
        <p className="copyright">Built by {personalInfo.shortName}. All rights reserved.</p>
        
        <div className="social-links">
          <a href={`mailto:${personalInfo.email}`} className="social-icon" aria-label="Email"><FiMail /></a>
          <a href={personalInfo.links.github} className="social-icon" aria-label="GitHub" target="_blank" rel="noreferrer"><FiGithub /></a>
          <a href={personalInfo.links.linkedin} className="social-icon" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FiLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
