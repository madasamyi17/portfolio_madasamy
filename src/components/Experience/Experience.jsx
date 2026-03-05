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
              <div className="experience-video-wrap">
                {experience.videoUrl ? (
                  <video controls className="experience-video">
                    <source src={experience.videoUrl} type="image/png" />
                  </video>
                ) : (
                  <div className="experience-video-placeholder">
                    Add your experience demo video URL in constants
                  </div>
                )}
              </div>

              <div className="experience-content">
                <h3>{experience.title}</h3>
                <p className="experience-company">{experience.company}</p>

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
