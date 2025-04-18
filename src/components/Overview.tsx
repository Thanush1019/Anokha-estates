'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Overview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id="overview" className="overview">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up" data-aos-duration="1200">Villa Overview</h2>
        <div className="divider" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800"></div>
        <p className="section-description" data-aos="fade-up" data-aos-delay="200">
          Experience luxury living in our meticulously designed villa offering spacious accommodations and premium amenities.
        </p>
        <div className="features-grid">
          <div className="feature" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            </div>
            <span className="feature-number">2,762</span>
            <span className="feature-label">Square Feet</span>
          </div>
          <div className="feature" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
            </div>
            <span className="feature-number">3</span>
            <span className="feature-label">Bedrooms</span>
          </div>
          <div className="feature" data-aos="fade-up" data-aos-delay="500">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2H2v20h20V2zM2 12h20M7 12v10M17 12v10"></path></svg>
            </div>
            <span className="feature-number">4</span>
            <span className="feature-label">Bathrooms</span>
          </div>
          <div className="feature" data-aos="fade-up" data-aos-delay="600">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
            </div>
            <span className="feature-number">2</span>
            <span className="feature-label">Car Garage</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .overview {
          padding: 120px 0;
          background-color: var(--white);
          position: relative;
          overflow: hidden;
        }
        .overview::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(245,245,245,0.5) 0%, rgba(255,255,255,0) 100%);
          z-index: 0;
        }
        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
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
        .section-description {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
          font-size: 1.2rem;
          color: var(--text-color);
          line-height: 1.6;
        }
        .divider {
          height: 4px;
          width: 100px;
          background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
          margin: 0 auto 30px;
          border-radius: 2px;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 40px;
          margin-top: 30px;
        }
        .feature {
          text-align: center;
          padding: 40px 30px;
          background-color: var(--white);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          border: 1px solid rgba(235,235,235,0.8);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .feature:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
          border-color: rgba(200,200,200,0.5);
        }
        .feature-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: var(--accent-color);
          background-color: rgba(var(--accent-color-rgb), 0.1);
          border-radius: 50%;
          padding: 15px;
        }
        .feature-number {
          display: block;
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 10px;
          line-height: 1.1;
        }
        .feature-label {
          font-size: 1.1rem;
          color: var(--text-color);
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .overview {
            padding: 80px 0;
          }
          .section-title {
            font-size: 2.5rem;
          }
          .section-description {
            font-size: 1.1rem;
            margin-bottom: 40px;
          }
          .features-grid {
            gap: 30px;
            margin-top: 20px;
          }
          .feature {
            padding: 30px 20px;
          }
          .feature-icon {
            width: 50px;
            height: 50px;
          }
          .feature-number {
            font-size: 3rem;
          }
        }
        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }
          .section-description {
            font-size: 1rem;
          }
          .feature-number {
            font-size: 2.5rem;
          }
          .feature-icon {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </section>
  );
};

export default Overview; 