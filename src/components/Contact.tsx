'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    time: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      // Simulating form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        date: '',
        time: ''
      });
    } catch (err) {
      setError('There was an error submitting your request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up" data-aos-duration="1200">Schedule a Viewing</h2>
        <div className="divider" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800"></div>
        <p className="section-description" data-aos="fade-up" data-aos-delay="200">
          Experience the luxury firsthand. Book your private tour of our exclusive properties.
        </p>
        
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right" data-aos-delay="300">
            <div className="info-card">
              <h3>Contact Information</h3>
              <div className="info-item">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Luxury Avenue, Paradise City</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>info@anokhaestate.com</p>
                </div>
              </div>
              
              <div className="availability">
                <h4>Viewing Hours</h4>
                <p>Monday - Friday: 9AM - 6PM</p>
                <p>Saturday: 10AM - 4PM</p>
                <p>Sunday: By Appointment Only</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form" data-aos="fade-left" data-aos-delay="300">
            {success ? (
              <div className="success-message" data-aos="zoom-in">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3>Thank You!</h3>
                <p>Your viewing request has been successfully submitted. Our team will contact you shortly to confirm your appointment.</p>
                <button onClick={() => setSuccess(false)} className="btn">Schedule Another Viewing</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-header">
                  <h3>Book Your Private Tour</h3>
                  <p>Please fill out the form below and we'll get back to you shortly.</p>
                </div>
                
                <div className="form-group" data-aos="fade-up" data-aos-delay="400">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group" data-aos="fade-up" data-aos-delay="450">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div className="form-group" data-aos="fade-up" data-aos-delay="500">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group" data-aos="fade-up" data-aos-delay="550">
                    <label htmlFor="date">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group" data-aos="fade-up" data-aos-delay="600">
                    <label htmlFor="time">Preferred Time</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a time</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group" data-aos="fade-up" data-aos-delay="650">
                  <label htmlFor="message">Special Requests (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific requests or questions..."
                    rows={4}
                  ></textarea>
                </div>
                
                {error && <div className="error-message">{error}</div>}
                
                <button type="submit" className="submit-btn" data-aos="fade-up" data-aos-delay="700" disabled={submitting}>
                  {submitting ? (
                    <span className="loading">
                      <span className="loading-circle"></span>
                      <span className="loading-text">Submitting...</span>
                    </span>
                  ) : (
                    'Schedule Viewing'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact {
          padding: 120px 0;
          background-color: var(--white);
          position: relative;
          overflow: hidden;
        }
        
        .section-title {
          font-size: 3rem;
          text-align: center;
          color: var(--primary-color);
          margin-bottom: 15px;
          font-weight: 700;
          letter-spacing: -0.5px;
          position: relative;
        }
        
        .divider {
          height: 4px;
          width: 100px;
          background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
          margin: 0 auto 30px;
          border-radius: 2px;
        }
        
        .section-description {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
          font-size: 1.2rem;
          color: var(--text-color);
          line-height: 1.6;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
          align-items: start;
        }
        
        .contact-info {
          position: relative;
        }
        
        .info-card {
          background: linear-gradient(145deg, var(--primary-color), var(--secondary-color));
          color: var(--white);
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          height: 100%;
        }
        
        .info-card h3 {
          font-size: 1.8rem;
          margin-bottom: 30px;
          font-weight: 700;
          position: relative;
          padding-bottom: 15px;
        }
        
        .info-card h3:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background-color: var(--accent-color);
        }
        
        .info-item {
          display: flex;
          align-items: center;
          margin-bottom: 25px;
          gap: 15px;
        }
        
        .info-icon {
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .info-icon svg {
          width: 20px;
          height: 20px;
          color: var(--white);
        }
        
        .info-item h4 {
          margin: 0 0 5px 0;
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .info-item p {
          margin: 0;
          font-size: 0.95rem;
          opacity: 0.85;
        }
        
        .availability {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .availability h4 {
          margin: 0 0 15px 0;
          font-size: 1.2rem;
          font-weight: 600;
        }
        
        .availability p {
          margin: 5px 0;
          font-size: 0.95rem;
          opacity: 0.85;
        }
        
        .contact-form {
          background-color: var(--white);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(235, 235, 235, 0.8);
          padding: 40px;
          position: relative;
        }
        
        .form-header {
          margin-bottom: 30px;
        }
        
        .form-header h3 {
          font-size: 1.8rem;
          color: var(--primary-color);
          margin: 0 0 10px 0;
          font-weight: 700;
        }
        
        .form-header p {
          margin: 0;
          color: var(--text-color);
          font-size: 1rem;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--primary-color);
        }
        
        input, select, textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e1e1e1;
          border-radius: 8px;
          background-color: #f9f9f9;
          font-size: 1rem;
          color: var(--text-color);
          transition: all 0.3s ease;
        }
        
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--accent-color);
          box-shadow: 0 0 0 3px rgba(var(--accent-color-rgb), 0.1);
          background-color: var(--white);
        }
        
        textarea {
          resize: vertical;
        }
        
        .submit-btn {
          background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
          color: var(--white);
          border: none;
          border-radius: 8px;
          padding: 14px 24px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(var(--primary-color-rgb), 0.2);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        
        .loading {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .loading-circle {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid var(--white);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .error-message {
          background-color: rgba(255, 0, 0, 0.1);
          color: #e53935;
          padding: 10px 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-size: 0.9rem;
        }
        
        .success-message {
          text-align: center;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 20px;
        }
        
        .success-message svg {
          width: 60px;
          height: 60px;
          color: #4caf50;
          margin-bottom: 20px;
        }
        
        .success-message h3 {
          font-size: 2rem;
          color: var(--primary-color);
          margin: 0;
        }
        
        .success-message p {
          color: var(--text-color);
          max-width: 500px;
          margin: 15px 0 25px;
        }
        
        .btn {
          background-color: var(--accent-color);
          color: var(--white);
          border: none;
          border-radius: 8px;
          padding: 12px 24px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn:hover {
          background-color: var(--primary-color);
        }
        
        @media (max-width: 992px) {
          .contact-content {
            grid-template-columns: 1fr;
          }
          
          .contact-info, .contact-form {
            max-width: 600px;
            margin: 0 auto;
          }
        }
        
        @media (max-width: 768px) {
          .contact {
            padding: 80px 0;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .section-description {
            font-size: 1.1rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          .contact-form, .info-card {
            padding: 30px;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }
          
          .section-description {
            font-size: 1rem;
          }
          
          .form-header h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact; 