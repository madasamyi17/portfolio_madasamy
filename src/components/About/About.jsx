import React from 'react';
import './About.css';
import { education, personalInfo } from '../../constants/portfolioData';
import SectionHeading from '../SectionHeading/SectionHeading';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container about-container">
        <div className="about-content">
          <SectionHeading heading="About me" align="left" />
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
