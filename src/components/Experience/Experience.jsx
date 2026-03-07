import React, { useEffect, useMemo, useState } from 'react';
import './Experience.css';
import { experiences } from '../../constants/portfolioData';
import SectionHeading from '../SectionHeading/SectionHeading';

const Experience = () => {
  const experienceImages = useMemo(
    () =>
      experiences.map((experience) => ({
        id: experience.id,
        images:
          experience.imageUrls && experience.imageUrls.length > 0
            ? experience.imageUrls
            : experience.imageUrl
              ? [experience.imageUrl]
              : [],
      })),
    []
  );

  const initialIndexes = useMemo(
    () => experienceImages.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {}),
    [experienceImages]
  );

  const [activeIndexes, setActiveIndexes] = useState(initialIndexes);

  useEffect(() => {
    const timers = experienceImages
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
  }, [experienceImages]);

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHeading heading="Experience" />

        <div className="experience-grid">
          {experiences.map((experience) => {
            const imageSet =
              experience.imageUrls && experience.imageUrls.length > 0
                ? experience.imageUrls
                : experience.imageUrl
                  ? [experience.imageUrl]
                  : [];
            const currentIndex = activeIndexes[experience.id] || 0;
            const currentImage = imageSet[currentIndex] || '';

            return (
              <article className="experience-card reveal-card" key={experience.id}>
                <div className="experience-media-column">
                  <div className="experience-media-wrap">
                    {currentImage ? (
                      <img
                        src={currentImage}
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

                  {imageSet.length > 1 ? (
                    <div className="experience-carousel-dots">
                      {imageSet.map((_, index) => (
                        <button
                          key={`${experience.id}-${index}`}
                          className={`experience-dot ${index === currentIndex ? 'active' : ''}`}
                          onClick={() =>
                            setActiveIndexes((prev) => ({
                              ...prev,
                              [experience.id]: index,
                            }))
                          }
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  ) : null}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
