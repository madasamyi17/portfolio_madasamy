import React, { useEffect, useMemo, useState } from 'react';
import './Achievements.css';
import { achievements } from '../../constants/portfolioData';
import SectionHeading from '../SectionHeading/SectionHeading';

const Achievements = () => {
  const achievementImages = useMemo(
    () =>
      achievements.map((achievement) => ({
        id: achievement.id,
        images:
          achievement.images && achievement.images.length > 0
            ? achievement.images
            : achievement.image
              ? [achievement.image]
              : [],
      })),
    []
  );

  const initialIndexes = useMemo(
    () => achievementImages.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {}),
    [achievementImages]
  );

  const [activeIndexes, setActiveIndexes] = useState(initialIndexes);

  useEffect(() => {
    const timers = achievementImages
      .filter((item) => item.images.length > 1)
      .map((item) =>
        setInterval(() => {
          setActiveIndexes((prev) => ({
            ...prev,
            [item.id]: ((prev[item.id] ?? 0) + 1) % item.images.length,
          }));
        }, 3000)
      );

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [achievementImages]);

  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <SectionHeading heading="Achievements" />

        <div className="achievements-grid">
          {achievements.map((achievement) => {
            const imageSet =
              achievement.images && achievement.images.length > 0
                ? achievement.images
                : achievement.image
                  ? [achievement.image]
                  : [];
            const currentIndex = activeIndexes[achievement.id] || 0;
            const currentImage = imageSet[currentIndex] || '';

            return (
              <article className="achievement-card reveal-card" key={achievement.id}>
                {currentImage ? (
                  <>
                    <div className="achievement-image-wrap">
                      <img src={currentImage} alt={achievement.title} className="achievement-image" />
                    </div>

                    {imageSet.length > 1 ? (
                      <div className="achievement-carousel-dots">
                        {imageSet.map((_, index) => (
                          <button
                            key={`${achievement.id}-${index}`}
                            className={`achievement-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() =>
                              setActiveIndexes((prev) => ({
                                ...prev,
                                [achievement.id]: index,
                              }))
                            }
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : null}

                <h3>{achievement.title}</h3>
                <p className="achievement-highlight">{achievement.highlight}</p>
                <p className="achievement-description">{achievement.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
