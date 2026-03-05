import React from 'react';
import './Achievements.css';
import { achievements } from '../../constants/portfolioData';

const Achievements = () => {
  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>

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
