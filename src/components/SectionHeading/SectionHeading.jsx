import React from 'react';
import './SectionHeading.css';

const SectionHeading = ({ heading, align = 'center' }) => {
  return (
    <div className={`section-heading ${align === 'left' ? 'left' : ''}`}>
      <h2 className="section-heading-title">{heading}</h2>
      <div className="section-heading-lines" aria-hidden="true">
        <span className="line line-primary" />
        <span className="line line-secondary" />
      </div>
    </div>
  );
};

export default SectionHeading;