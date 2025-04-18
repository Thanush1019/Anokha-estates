'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';

const Blueprint = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    AOS.refresh();
  }, []);
  
  const blueprints = [
    {
      image: '/VILLA 4 FINAL OUTPUT/WhatsApp Image 2025-01-24 at 9.13.38 AM.jpeg',
      title: 'Ground Level',
      features: [
        'Grand Entrance',
        'Living & Dining Area',
        'Gourmet Kitchen',
        'Guest Suite'
      ]
    },
    {
      image: '/VILLA 4 FINAL OUTPUT/WhatsApp Image 2025-01-24 at 9.13.39 AM.jpeg',
      title: 'First Floor',
      features: [
        'Master Suite',
        'Private Terrace',
        'Family Lounge',
        'Study Room'
      ]
    },
    {
      image: '/VILLA 4 FINAL OUTPUT/WhatsApp Image 2025-01-24 at 9.13.39 AM (1).jpeg',
      title: 'Second Level',
      features: [
        'Entertainment Area',
        'Rooftop Garden',
        'Infinity Pool',
        'Outdoor Kitchen'
      ]
    }
  ];

  // Auto rotate the blueprint carousel
  useEffect(() => {
    const autoRotate = setTimeout(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 8000);
    
    return () => clearTimeout(autoRotate);
  }, [currentSlide, isAnimating]);

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + blueprints.length) % blueprints.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % blueprints.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleIndicatorClick = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section id="blueprint" className="blueprint">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up" data-aos-duration="1200">Interactive Blueprint</h2>
        <div className="divider" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800"></div>
        <p className="section-description" data-aos="fade-up" data-aos-delay="200">
          Explore detailed floor plans of our exquisite villa to discover the thoughtful layout and premium features.
        </p>
        <div className="blueprint-carousel" data-aos="fade-up" data-aos-delay="300">
          <div className="blueprint-slides">
            {blueprints.map((blueprint, index) => (
              <div 
                key={index}
                className={`blueprint-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="blueprint-image-container">
                  <Image 
                    src={blueprint.image} 
                    alt={`${blueprint.title} Blueprint`}
                    width={500}
                    height={600}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    priority={index === 0}
                  />
                </div>
                <div className="blueprint-info">
                  <div className="floor-badge">{index + 1}</div>
                  <h3>{blueprint.title}</h3>
                  <div className="feature-divider"></div>
                  <ul>
                    {blueprint.features.map((feature, i) => (
                      <li key={i} data-aos="fade-left" data-aos-delay={i * 100} data-aos-anchor=".blueprint-carousel">
                        <span className="feature-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="blueprint-btn prev" 
            onClick={handlePrev}
            aria-label="Previous blueprint"
            disabled={isAnimating}
          >
            &lt;
          </button>
          <button 
            className="blueprint-btn next" 
            onClick={handleNext}
            aria-label="Next blueprint"
            disabled={isAnimating}
          >
            &gt;
          </button>
          <div className="blueprint-indicators">
            {blueprints.map((_, index) => (
              <span 
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleIndicatorClick(index)}
                data-index={index}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .blueprint {
          padding: 120px 0;
          background-color: var(--white);
          position: relative;
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
        
        .blueprint-carousel {
          position: relative;
          width: 100%;
          height: 600px;
          margin-top: 30px;
          background: linear-gradient(145deg, #f3f3f3, #ffffff);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0,0,0,0.05);
        }
        
        .blueprint-slides {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .blueprint-slide {
          position: absolute;
          width: 100%;
          height: 100%;
          display: none;
          opacity: 0;
          transition: opacity 0.5s ease;
          
          &.active {
            display: flex;
            opacity: 1;
          }
        }
        
        .blueprint-image-container {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          background: rgba(245,245,245,0.5);
        }
        
        .blueprint-info {
          float: right;
          width: 50%;
          height: 100%;
          padding: 60px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }
        
        .floor-badge {
          position: absolute;
          top: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--accent-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .blueprint-info h3 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: var(--primary-color);
          position: relative;
        }
        
        .feature-divider {
          width: 80px;
          height: 3px;
          background: var(--accent-color);
          margin-bottom: 30px;
        }
        
        .blueprint-info ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .blueprint-info li {
          font-size: 1.2rem;
          margin-bottom: 20px;
          padding-left: 35px;
          position: relative;
          display: flex;
          align-items: center;
          transition: transform 0.3s ease;
        }
        
        .blueprint-info li:hover {
          transform: translateX(5px);
        }
        
        .feature-icon {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
        }
        
        .blueprint-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: white;
          border: none;
          border-radius: 50%;
          font-size: 1.5rem;
          color: var(--primary-color);
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .blueprint-btn:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-50%) scale(1.1);
        }
        
        .blueprint-btn.prev {
          left: 20px;
        }
        
        .blueprint-btn.next {
          right: 20px;
        }
        
        .blueprint-indicators {
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 10px;
          z-index: 10;
        }
        
        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator:hover {
          background: rgba(0, 0, 0, 0.4);
        }
        
        .indicator.active {
          background: var(--accent-color);
          width: 30px;
          border-radius: 10px;
        }
        
        @media (max-width: 992px) {
          .blueprint-slide {
            flex-direction: column;
          }
          
          .blueprint-image-container,
          .blueprint-info {
            width: 100%;
            height: auto;
          }
          
          .blueprint-carousel {
            height: auto;
            min-height: 800px;
          }
          
          .blueprint-info {
            padding: 40px;
          }
        }
        
        @media (max-width: 768px) {
          .blueprint {
            padding: 80px 0;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .section-description {
            font-size: 1.1rem;
          }
          
          .blueprint-info h3 {
            font-size: 2rem;
          }
          
          .blueprint-info {
            padding: 30px;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }
          
          .blueprint-carousel {
            min-height: 700px;
          }
          
          .blueprint-info h3 {
            font-size: 1.8rem;
          }
          
          .blueprint-info li {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Blueprint; 