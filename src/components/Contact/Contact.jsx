import React from 'react';
import './Contact.css';
import { personalInfo } from '../../constants/portfolioData';
import SectionHeading from '../SectionHeading/SectionHeading';

const Contact = () => {
  return (
    <section className="section contact" id="contacts">
      <div className="container contact-container">
        <div className="contact-info">
          <SectionHeading heading="Contact" align="left" />
          <h2 className="contact-title">Let's build something meaningful.</h2>
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary submit-btn-large">Email Me</a>
        </div>
        
        <div className="contact-form contact-details">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" id="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea id="message" rows="4" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          <div className="contact-meta">
            <p><strong>Name:</strong> {personalInfo.name}</p>
            <p><strong>Location:</strong> {personalInfo.location}</p>
            <p><strong>Phone:</strong> {personalInfo.phone}</p>
            <p><strong>Email:</strong> {personalInfo.email}</p>
          </div>

          <div className="contact-links">
            <a href={personalInfo.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={personalInfo.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={personalInfo.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
            <a href={personalInfo.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
