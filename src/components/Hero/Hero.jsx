import React from 'react';
import './Hero.css';
// import profileImage from '../../assets/profile.jpg';
import profileImage from '../../assets/canva_profile_3.png';
import { personalInfo } from '../../constants/portfolioData';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="greeting">
            <h2>Hello, I'm</h2>
          </div>
          <h1 className="hero-name">
            <span className="typing-text" style={{ '--typing-chars': personalInfo.name.length }}>
              {personalInfo.name}
            </span>
          </h1>
          <p className="role">{personalInfo.heroSubtitle}</p>
          <div className="hero-btns">
            <a href="#about" className="btn btn-outline">About me</a>
            <a href={personalInfo.resumeUrl} className="btn btn-primary" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-img"></div>
          <img 
            src={profileImage}
            alt={personalInfo.name}
            className="hero-img" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
