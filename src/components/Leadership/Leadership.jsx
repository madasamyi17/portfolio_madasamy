import React, { useEffect, useMemo, useState } from 'react';
import './Leadership.css';
import { leadershipHighlights } from '../../constants/portfolioData';
import SectionHeading from '../SectionHeading/SectionHeading';

const Leadership = () => {
  const initialIndexes = useMemo(
    () => leadershipHighlights.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {}),
    []
  );

  const [activeIndexes, setActiveIndexes] = useState(initialIndexes);

  useEffect(() => {
    const timers = leadershipHighlights
      .filter((item) => item.images && item.images.length > 1)
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
  }, []);

  return (
    <section className="section leadership" id="leadership">
      <div className="container">
        <SectionHeading heading="Leadership & Volunteering" />

        <div className="leadership-grid">
          {leadershipHighlights.map((item) => {
            const currentIndex = activeIndexes[item.id] || 0;
            const hasImages = item.images && item.images.length > 0;
            const currentImage = hasImages ? item.images[currentIndex] : '';

            return (
              <article className="leadership-card reveal-card" key={item.id}>
                <div className="leadership-carousel">
                  {hasImages ? (
                    <img src={currentImage} alt={item.title} className="leadership-image" />
                  ) : (
                    <div className="leadership-image-placeholder">Add your leadership images in constants</div>
                  )}

                </div>

                {hasImages && item.images.length > 1 ? (
                  <div className="carousel-dots">
                    {item.images.map((_, index) => (
                      <button
                        key={`${item.id}-${index}`}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() =>
                          setActiveIndexes((prev) => ({
                            ...prev,
                            [item.id]: index,
                          }))
                        }
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                ) : null}

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
