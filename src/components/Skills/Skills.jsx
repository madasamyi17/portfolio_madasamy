import React from 'react';
import './Skills.css';

const skillLines = [
  'Java, Python, C, JavaScript',
  'React, Express, Spring Boot, MySQL',
  'AWS, Git, GitHub',
];

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-lines">
          {skillLines.map((line) => (
            <p key={line} className="skills-line">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
