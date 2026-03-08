import React, { useState } from 'react';
import '../pages/Pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="page-container" data-testid="contact-page">
      <div className="page-header">
        <h1 className="page-title" data-testid="contact-title">Contact</h1>
        <p className="page-subtitle">Reach out across the horizon</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2 className="contact-info-title">Get in Touch</h2>
          <p className="contact-info-text">
            Whether you wish to discuss poetry, explore collaboration opportunities,
            or simply share your thoughts, I welcome your message.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item" data-testid="contact-email">
              <span className="contact-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>poet@thewrittensky.com</p>
              </div>
            </div>

            <div className="contact-detail-item" data-testid="contact-social">
              <span className="contact-icon">🌐</span>
              <div>
                <h4>Social Media</h4>
                <p>@thewrittensky</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-testid="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              data-testid="contact-name-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              data-testid="contact-email-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              data-testid="contact-subject-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              data-testid="contact-message-input"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" data-testid="contact-submit-btn">
            Send Message
          </button>

          {submitted && (
            <div className="success-message" data-testid="success-message">
              ✓ Message sent successfully! I'll respond soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
