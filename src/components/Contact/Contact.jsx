import React, { useState } from 'react';
import './Contact.css';
import { personalInfo } from '../../constants/portfolioData';
import SectionHeading from '../SectionHeading/SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || 'Unable to send message right now.');
      }

      setStatus({ type: 'success', text: 'Message sent successfully.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', text: error.message || 'Message failed to send.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="section contact" id="contacts">
      <div className="container contact-container">
        <div className="contact-info">
          <SectionHeading heading="Contact" align="left" />
          <h2 className="contact-title">Let's build something meaningful.</h2>
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary submit-btn-large">Email Me</a>
        </div>
        
        <div className="contact-form contact-details reveal-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <textarea id="message" rows="4" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            {status.text ? (
              <p className={`contact-status ${status.type === 'success' ? 'success' : 'error'}`}>
                {status.text}
              </p>
            ) : null}

            <button type="submit" className="btn btn-primary" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="contact-meta">
            <p><strong>Name:</strong>MADASAMY I</p>
            <p><strong>Location:</strong> {personalInfo.location}</p>
            <p><strong>Phone:</strong> {personalInfo.phone}</p>
            <p><strong>Email:</strong> {personalInfo.email}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
