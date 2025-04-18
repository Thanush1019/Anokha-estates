'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const slides = [
    '/VILLA 4 FINAL OUTPUT/VILLA 4-14.jpg',
    '/VILLA 4 FINAL OUTPUT/VILLA 4-11.jpg',
    '/VILLA 4 FINAL OUTPUT/VILLA 4-12.jpg',
  ];

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoPlay();
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startAutoPlay();
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    startAutoPlay();
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero">
      <div className="carousel" 
           onMouseEnter={stopAutoPlay}
           onMouseLeave={startAutoPlay}>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <Image 
                src={slide} 
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <button className="carousel-btn prev" onClick={handlePrev} aria-label="Previous slide">&lt;</button>
        <button className="carousel-btn next" onClick={handleNext} aria-label="Next slide">&gt;</button>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              data-slide={index}
            ></span>
          ))}
        </div>
      </div>
      <div className="hero-content">
        <h1>Luxury Living Redefined</h1>
        <p>Experience unparalleled sophistication at The Terraces</p>
        <a href="#contact" className="cta-button" onClick={handleCtaClick}>Schedule a Viewing</a>
      </div>
    </header>
  );
};

export default Hero; 