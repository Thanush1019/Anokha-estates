'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DiningPage() {
  const [lightbox, setLightbox] = useState<{show: boolean, src: string, index: number}>({
    show: false,
    src: '',
    index: 0
  });

  const diningImages = [
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-31.jpg',
      alt: 'Formal Dining Area',
      description: 'Elegant formal dining area with sophisticated furnishings and ambient lighting'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-4.jpg',
      alt: 'Casual Dining Space',
      description: 'Inviting casual dining space perfect for everyday meals and gatherings'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-45.jpg',
      alt: 'Designer Dining Room',
      description: 'Designer dining room with custom table and statement lighting fixture'
    }
  ];

  const openLightbox = (src: string, index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setLightbox({
      show: true,
      src,
      index
    });
    // Lock scroll
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({
      show: false,
      src: '',
      index: 0
    });
    // Restore scroll
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    let newIndex = lightbox.index;
    if (direction === 'prev') {
      // If at first image, don't go to the last image
      if (newIndex > 0) {
        newIndex = newIndex - 1;
      } else {
        return; // Don't do anything if already at first image
      }
    } else {
      // If at last image, don't loop back to first
      if (newIndex < diningImages.length - 1) {
        newIndex = newIndex + 1;
      } else {
        return; // Don't do anything if already at last image
      }
    }
    
    setLightbox({
      ...lightbox,
      src: diningImages[newIndex].src,
      index: newIndex
    });
  };

  return (
    <div className="category-page">
      <Navbar />
      
      <div className="category-header">
        <div className="container">
          <h1>Dining Areas</h1>
          <p>Explore our exquisite dining spaces designed for memorable gatherings</p>
        </div>
      </div>
      
      <section className="category-gallery">
        <div className="container">
          <div className="category-intro" data-aos="fade-up">
            <h2>Spaces for Gathering</h2>
            <p>
              Our dining areas are designed to be the gathering point of the home, where memories are made 
              around shared meals. Each dining space features thoughtful layouts, premium materials, and 
              elegant lighting to create the perfect ambiance for both everyday dining and special occasions.
            </p>
          </div>
          
          <div className="image-grid">
            {diningImages.map((image, index) => (
              <div 
                key={index} 
                className="image-item" 
                data-aos="fade-up" 
                data-aos-delay={`${index * 100}`}
              >
                <div className="image-container">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={800}
                    height={600}
                    style={{ objectFit: 'cover', width: '100%', height: '500px' }}
                    onClick={(e) => openLightbox(image.src, index, e)}
                  />
                  <div className="image-caption">
                    <h3>{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="dining-features" data-aos="fade-up">
            <h2>Dining Space Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Designer Furniture</h3>
                <p>Custom tables and chairs crafted for both comfort and style</p>
              </div>
              <div className="feature-item">
                <h3>Statement Lighting</h3>
                <p>Elegant chandeliers and pendant lights that create the perfect ambiance</p>
              </div>
              <div className="feature-item">
                <h3>Multi-functional Spaces</h3>
                <p>Versatile dining areas that adapt to different occasions and needs</p>
              </div>
              <div className="feature-item">
                <h3>Indoor-Outdoor Flow</h3>
                <p>Seamless transitions to outdoor dining spaces for al fresco enjoyment</p>
              </div>
            </div>
          </div>
          
          <div className="design-approach" data-aos="fade-up">
            <div className="approach-content">
              <h2>Our Design Philosophy</h2>
              <p>
                We believe dining spaces should balance sophistication with comfort, creating environments 
                that encourage connection and conversation. Our designers carefully consider proportions, 
                sightlines, and traffic flow to ensure each dining area is as functional as it is beautiful.
              </p>
            </div>
          </div>
          
          <div className="navigation-links" data-aos="fade-up">
            <Link href="/gallery" className="secondary-button">Back to Gallery</Link>
            <Link href="/" className="primary-button">Back to Home</Link>
          </div>
        </div>
      </section>
      
      {lightbox.show && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="close-lightbox">&times;</button>
          <button 
            className={`nav-button prev-button ${lightbox.index === 0 ? 'disabled' : ''}`} 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            disabled={lightbox.index === 0}
          >
            &lsaquo;
          </button>
          <div className="lightbox-image-container">
            <Image 
              src={lightbox.src} 
              alt="Enlarged view" 
              width={1200}
              height={800}
              style={{ objectFit: 'contain', maxWidth: '90%', maxHeight: '90%' }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button 
            className={`nav-button next-button ${lightbox.index === diningImages.length - 1 ? 'disabled' : ''}`} 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            disabled={lightbox.index === diningImages.length - 1}
          >
            &rsaquo;
          </button>
        </div>
      )}
      
      <Footer />
      
      <style jsx>{`
        .category-header {
          padding: 150px 0 70px;
          background-color: var(--primary-color);
          color: var(--white);
          text-align: center;
        }
        
        .category-header h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        .category-header p {
          font-size: 1.2rem;
        }
        
        .category-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }
        
        .category-intro h2 {
          color: var(--primary-color);
          font-size: 2.2rem;
          margin-bottom: 20px;
        }
        
        .category-intro p {
          font-size: 1.1rem;
          line-height: 1.6;
        }
        
        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        
        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .image-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 20px;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }
        
        .image-container:hover .image-caption {
          transform: translateY(0);
        }
        
        .image-caption h3 {
          margin-bottom: 8px;
          font-size: 1.2rem;
        }
        
        .image-caption p {
          font-size: 0.95rem;
          line-height: 1.4;
        }
        
        .dining-features {
          background-color: #f9f9f9;
          padding: 60px;
          border-radius: 15px;
          margin-bottom: 60px;
        }
        
        .dining-features h2 {
          text-align: center;
          color: var(--primary-color);
          margin-bottom: 40px;
          font-size: 2.2rem;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .feature-item {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }
        
        .feature-item:hover {
          transform: translateY(-5px);
        }
        
        .feature-item h3 {
          color: var(--accent-color);
          margin-bottom: 15px;
          font-size: 1.3rem;
        }
        
        .feature-item p {
          font-size: 1rem;
          line-height: 1.5;
        }
        
        .design-approach {
          padding: 40px 0;
          margin-bottom: 60px;
          background: linear-gradient(to right, #f9f9f9, white);
          border-radius: 15px;
        }
        
        .approach-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
        }
        
        .approach-content h2 {
          color: var(--primary-color);
          font-size: 2.2rem;
          margin-bottom: 20px;
        }
        
        .approach-content p {
          font-size: 1.1rem;
          line-height: 1.6;
        }
        
        .navigation-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .primary-button, .secondary-button {
          padding: 12px 24px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .primary-button {
          background: var(--accent-color);
          color: white;
        }
        
        .secondary-button {
          background: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }
        
        .primary-button:hover {
          background: var(--primary-color);
          transform: translateY(-3px);
        }
        
        .secondary-button:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-3px);
        }
        
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
        }
        
        .lightbox-image-container {
          position: relative;
          width: 80%;
          height: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .close-lightbox {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          color: white;
          font-size: 2.5rem;
          cursor: pointer;
          z-index: 2001;
        }
        
        .nav-button {
          position: absolute;
          background: rgba(0, 0, 0, 0.3);
          border: none;
          color: white;
          font-size: 3rem;
          height: 80px;
          width: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2001;
          transition: background 0.3s ease;
        }
        
        .nav-button:hover {
          background: rgba(0, 0, 0, 0.6);
        }
        
        .prev-button {
          left: 20px;
          border-radius: 5px;
        }
        
        .next-button {
          right: 20px;
          border-radius: 5px;
        }
        
        .nav-button.disabled {
          opacity: 0.3;
          cursor: default;
        }
        
        .nav-button.disabled:hover {
          background: rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 768px) {
          .image-grid, .features-grid {
            grid-template-columns: 1fr;
          }
          
          .navigation-links {
            flex-direction: column;
            align-items: center;
          }
          
          .dining-features {
            padding: 30px;
          }
          
          .design-approach {
            padding: 30px 0;
          }
        }
      `}</style>
    </div>
  );
} 