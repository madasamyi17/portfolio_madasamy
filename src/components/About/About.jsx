import React from 'react';
import './About.css';
import { education, personalInfo } from '../../constants/portfolioData';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title left-align">About me</h2>
          <p className="about-description">
            {personalInfo.profileSummary}
          </p>
          <ul className="about-highlights">
            <li>{education.college}</li>
            <li>{education.degree} (CGPA: {education.cgpa})</li>
            <li>{education.timeline}</li>
            <li>Location: {personalInfo.location}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
