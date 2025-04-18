'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    AOS.refresh();
  }, []);

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{8,20}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error for this field when user types
    if (formErrors[id]) {
      setFormErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setSubmitSuccess(false);
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
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
        {submitSuccess ? (
          <div className="success-message" data-aos="fade-up">
            <h3>Thank you for your inquiry!</h3>
            <p>We will contact you shortly to schedule your viewing experience.</p>
          </div>
        ) : (
          <div className="form-container" data-aos="fade-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className={`form-group ${formErrors.name ? 'error' : ''}`}>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Full Name</label>
                {formErrors.name && <span className="error-text">{formErrors.name}</span>}
              </div>
              <div className={`form-group ${formErrors.email ? 'error' : ''}`}>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email Address</label>
                {formErrors.email && <span className="error-text">{formErrors.email}</span>}
              </div>
              <div className={`form-group ${formErrors.phone ? 'error' : ''}`}>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phone">Phone Number</label>
                {formErrors.phone && <span className="error-text">{formErrors.phone}</span>}
              </div>
              <div className={`form-group ${formErrors.message ? 'error' : ''}`}>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="message">Message</label>
                {formErrors.message && <span className="error-text">{formErrors.message}</span>}
              </div>
              <button 
                type="submit" 
                className="cta-button" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .contact {
          padding: 120px 0;
          background-image: url('/VILLA 4 FINAL OUTPUT/VILLA 4-45.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
        }
        
        .contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 1;
        }
        
        .container {
          position: relative;
          z-index: 2;
        }
        
        .section-title {
          font-size: 3rem;
          text-align: center;
          color: var(--white);
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
          color: var(--white);
          line-height: 1.6;
        }

        .form-container {
          max-width: 550px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 35px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .contact-form {
          width: 100%;
        }
        
        .success-message {
          max-width: 500px;
          margin: 30px auto 0;
          padding: 30px;
          background-color: rgba(46, 204, 113, 0.9);
          border-radius: 10px;
          text-align: center;
          color: white;
        }
        
        .success-message h3 {
          color: white;
          margin-bottom: 15px;
        }
        
        .form-group.error input,
        .form-group.error textarea {
          border-bottom: 1px solid #e74c3c;
        }
        
        .error-text {
          color: #e74c3c;
          font-size: 0.8rem;
          margin-top: 5px;
          display: block;
        }
        
        .cta-button {
          background: var(--accent-color);
          width: 100%;
        }

        .form-group {
          position: relative;
          margin-bottom: 25px;
        }
        
        .form-group input, 
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          font-size: 1rem;
          border: none;
          border-radius: 5px;
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          background-color: #fff;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        }
        
        .form-group textarea {
          height: 100px;
          resize: none;
        }
        
        .form-group label {
          position: absolute;
          left: 15px;
          top: 12px;
          font-size: 1rem;
          color: #666;
          transition: all 0.3s ease;
          pointer-events: none;
        }
        
        .form-group input:focus + label,
        .form-group textarea:focus + label,
        .form-group input:valid + label,
        .form-group textarea:valid + label {
          top: -20px;
          left: 5px;
          font-size: 0.85rem;
          color: var(--accent-color);
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
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }
          
          .section-description {
            font-size: 1rem;
          }
          
          .form-container {
            padding: 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact; 