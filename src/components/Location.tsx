'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const Location = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="location" className="location">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up" data-aos-duration="1200">Prime Location</h2>
        <div className="divider" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800"></div>
        <p className="section-description" data-aos="fade-up" data-aos-delay="200">
          Situated in a prestigious neighborhood with convenient access to premium amenities and natural surroundings.
        </p>
        <div className="location-content">
          <div className="map-container" data-aos="fade-right" data-aos-delay="300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.9513770830612!2d73.82169827584905!3d15.535999253764565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMTXCsDMyJzA5LjYiTiA3M8KwNDknMTguMSJF!5e0!3m2!1sen!2sin!4v1709825169774!5m2!1sen!2sin&markers=color:red%7Clabel:T%7C15.535999,73.821698&zoom=19"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="location-highlights" data-aos="fade-left" data-aos-delay="300">
            <h3>Neighborhood Highlights</h3>
            <div className="highlight-list">
              <div className="highlight-item" data-aos="fade-up" data-aos-delay="400">
                <div className="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Airport Access</h4>
                  <p>10 minutes to International Airport</p>
                </div>
              </div>
              <div className="highlight-item" data-aos="fade-up" data-aos-delay="500">
                <div className="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Shopping District</h4>
                  <p>5 minutes to Premium Shopping District</p>
                </div>
              </div>
              <div className="highlight-item" data-aos="fade-up" data-aos-delay="600">
                <div className="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s-8-4.5-8-11.8a8 8 0 0 1 16 0c0 7.3-8 11.8-8 11.8z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Nature</h4>
                  <p>Adjacent to Central Park</p>
                </div>
              </div>
              <div className="highlight-item" data-aos="fade-up" data-aos-delay="700">
                <div className="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Education</h4>
                  <p>Premium Schools Nearby</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .location {
          padding: 120px 0;
          background-color: var(--light-gray);
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
        
        .location-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        
        .map-container {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .map-container:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .location-highlights {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(235, 235, 235, 0.8);
        }
        
        .location-highlights h3 {
          font-size: 2rem;
          color: var(--primary-color);
          margin-bottom: 30px;
          font-weight: 700;
          position: relative;
          padding-bottom: 15px;
        }
        
        .location-highlights h3:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background-color: var(--accent-color);
        }
        
        .highlight-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          border-radius: 10px;
          background-color: var(--white);
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        
        .highlight-item:hover {
          transform: translateX(5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          border-color: rgba(235, 235, 235, 1);
        }
        
        .highlight-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          background-color: rgba(var(--accent-color-rgb), 0.1);
          border-radius: 50%;
          padding: 12px;
          flex-shrink: 0;
        }
        
        .highlight-content h4 {
          font-size: 1.1rem;
          margin: 0 0 5px 0;
          color: var(--primary-color);
        }
        
        .highlight-content p {
          margin: 0;
          color: var(--text-color);
        }
        
        @media (max-width: 992px) {
          .location-content {
            grid-template-columns: 1fr;
          }
          
          .map-container {
            order: 2;
          }
          
          .location-highlights {
            order: 1;
          }
        }
        
        @media (max-width: 768px) {
          .location {
            padding: 80px 0;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .section-description {
            font-size: 1.1rem;
          }
          
          .location-highlights {
            padding: 30px;
          }
          
          .location-highlights h3 {
            font-size: 1.8rem;
          }
          
          .highlight-item {
            padding: 15px;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }
          
          .section-description {
            font-size: 1rem;
          }
          
          .highlight-icon {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Location; 