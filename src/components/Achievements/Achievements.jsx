import React from 'react';
import './Achievements.css';
import { achievements } from '../../constants/portfolioData';
import SectionHeading from '../SectionHeading/SectionHeading';

const Achievements = () => {
  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <SectionHeading heading="Achievements" />

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <article className="achievement-card" key={achievement.id}>
              {achievement.image ? (
                <div className="achievement-image-wrap">
                  <img src={achievement.image} alt={achievement.title} className="achievement-image" />
                </div>
              ) : null}

              <h3>{achievement.title}</h3>
              <p className="achievement-highlight">{achievement.highlight}</p>
              <p className="achievement-description">{achievement.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
