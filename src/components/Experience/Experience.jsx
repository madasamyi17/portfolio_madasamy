import React from 'react';
import './Experience.css';
import { experiences } from '../../constants/portfolioData';
import SectionHeading from '../SectionHeading/SectionHeading';

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHeading heading="Experience" />

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.id}>
              <div className="experience-media-wrap">
                {experience.imageUrl ? (
                  <img
                    src={experience.imageUrl}
                    alt={`${experience.title} preview`}
                    className="experience-media"
                    loading="lazy"
                  />
                ) : (
                  <div className="experience-media-placeholder">
                    Add your experience preview image URL in constants
                  </div>
                )}
              </div>

              <div className="experience-content">
                <h3>{experience.title}</h3>
                <a
                  href={experience.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="experience-company experience-company-link"
                >
                  {experience.company}
                </a>

                <div className="experience-tags">
                  {experience.stack.map((item) => (
                    <span className="tag" key={item}>{item}</span>
                  ))}
                </div>

                <ul className="experience-points">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <a href={experience.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Live Link
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
