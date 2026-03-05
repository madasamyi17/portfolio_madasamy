import React, { useMemo, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Leadership.css';
import { leadershipHighlights } from '../../constants/portfolioData';

const Leadership = () => {
  const initialIndexes = useMemo(
    () => leadershipHighlights.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {}),
    []
  );

  const [activeIndexes, setActiveIndexes] = useState(initialIndexes);

  const updateSlide = (id, step, total) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [id]: (prev[id] + step + total) % total,
    }));
  };

  return (
    <section className="section leadership" id="leadership">
      <div className="container">
        <h2 className="section-title">Leadership & Volunteering</h2>

        <div className="leadership-grid">
          {leadershipHighlights.map((item) => {
            const currentIndex = activeIndexes[item.id] || 0;
            const hasImages = item.images && item.images.length > 0;
            const currentImage = hasImages ? item.images[currentIndex] : '';

            return (
              <article className="leadership-card" key={item.id}>
                <div className="leadership-carousel">
                  {hasImages ? (
                    <img src={currentImage} alt={item.title} className="leadership-image" />
                  ) : (
                    <div className="leadership-image-placeholder">Add your leadership images in constants</div>
                  )}

                  {hasImages && item.images.length > 1 ? (
                    <>
                      <button
                        className="carousel-btn prev"
                        aria-label="Previous image"
                        onClick={() => updateSlide(item.id, -1, item.images.length)}
                      >
                        <FiChevronLeft />
                      </button>
                      <button
                        className="carousel-btn next"
                        aria-label="Next image"
                        onClick={() => updateSlide(item.id, 1, item.images.length)}
                      >
                        <FiChevronRight />
                      </button>
                    </>
                  ) : null}
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
