'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LandscapesPage() {
  const [lightbox, setLightbox] = useState<{show: boolean, src: string}>({
    show: false,
    src: ''
  });

  const landscapeImages = [
    {
      src: '/landscape-1.jpg',
      alt: 'Zen Garden',
      description: 'Minimalist garden design with carefully placed stones and sculptural plantings'
    },
    {
      src: '/landscape-2.jpg',
      alt: 'Water Feature',
      description: 'Tranquil water elements integrated with natural stone and lush greenery'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-12.jpg',
      alt: 'Terraced Gardens',
      description: 'Multi-level garden design that follows the natural contours of the landscape'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-13.jpg',
      alt: 'Native Garden',
      description: 'Ecologically-sensitive landscape featuring indigenous plants and natural materials'
    }
  ];

  const openLightbox = (src: string, e: React.MouseEvent) => {
    e.preventDefault();
    setLightbox({
      show: true,
      src
    });
    // Lock scroll
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({
      show: false,
      src: ''
    });
    // Restore scroll
    document.body.style.overflow = '';
  };

  return (
    <div className="category-page">
      <Navbar />
      
      <div className="category-header">
        <div className="container">
          <h1>Landscapes</h1>
          <p>Harmonious integration of nature and architecture</p>
        </div>
      </div>
      
      <section className="category-gallery">
        <div className="container">
          <div className="category-intro" data-aos="fade-up">
            <h2>Natural Harmony</h2>
            <p>
              Our landscape designs create a seamless connection between built environments and 
              the natural world. Each garden and outdoor space is thoughtfully crafted to enhance 
              the architecture while establishing a sustainable, biodiverse setting that evolves 
              and matures over time.
            </p>
          </div>
          
          <div className="image-grid">
            {landscapeImages.map((image, index) => (
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
                    onClick={(e) => openLightbox(image.src, e)}
                  />
                  <div className="image-caption">
                    <h3>{image.alt}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="landscape-philosophy" data-aos="fade-up">
            <h2>Our Landscape Philosophy</h2>
            <div className="philosophy-content">
              <p>
                We believe landscapes should connect people with nature while respecting ecological 
                principles. Our designs balance aesthetic vision with environmental responsibility, 
                creating outdoor spaces that are beautiful, functional, and sustainable. From intimate 
                garden retreats to expansive natural settings, we develop landscapes that respond to 
                both the architecture and the inherent qualities of the site.
              </p>
            </div>
          </div>
          
          <div className="garden-features" data-aos="fade-up">
            <h2>Garden Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Water Elements</h3>
                <p>Reflecting pools, fountains, and natural water features that introduce movement and sound</p>
              </div>
              <div className="feature-item">
                <h3>Native Plantings</h3>
                <p>Indigenous species adapted to local climate conditions requiring minimal maintenance</p>
              </div>
              <div className="feature-item">
                <h3>Outdoor Rooms</h3>
                <p>Defined spaces for dining, entertaining, and quiet contemplation</p>
              </div>
              <div className="feature-item">
                <h3>Hardscape Design</h3>
                <p>Custom stone work, patios, and walkways that complement architectural details</p>
              </div>
            </div>
          </div>
          
          <div className="sustainable-practices" data-aos="fade-up">
            <h2>Sustainable Practices</h2>
            <div className="practices-grid">
              <div className="practice-item">
                <h3>Water Conservation</h3>
                <p>Rainwater harvesting, drought-tolerant plants, and efficient irrigation systems</p>
              </div>
              <div className="practice-item">
                <h3>Biodiversity</h3>
                <p>Plant selections that support local wildlife and promote ecological balance</p>
              </div>
              <div className="practice-item">
                <h3>Soil Health</h3>
                <p>Organic amendments and composting to build living soil systems</p>
              </div>
              <div className="practice-item">
                <h3>Material Selection</h3>
                <p>Local and reclaimed materials that minimize environmental impact</p>
              </div>
            </div>
          </div>
          
          <div className="seasonal-beauty" data-aos="fade-up">
            <h2>Year-Round Beauty</h2>
            <p>
              Our landscapes are designed to reveal different aspects of beauty throughout the seasons.
              From spring blossoms to summer abundance, autumn colors to winter structure, each garden 
              offers continuous interest and evolving character that deepens the connection between 
              residents and their surroundings.
            </p>
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
          <Image 
            src={lightbox.src} 
            alt="Enlarged view" 
            width={1200}
            height={800}
            style={{ objectFit: 'contain', maxWidth: '90%', maxHeight: '90%' }}
          />
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
        
        .landscape-philosophy {
          padding: 60px;
          margin-bottom: 60px;
          background: linear-gradient(to right, #f9f9f9, white);
          border-radius: 15px;
          text-align: center;
        }
        
        .landscape-philosophy h2 {
          color: var(--primary-color);
          font-size: 2.2rem;
          margin-bottom: 30px;
        }
        
        .philosophy-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .philosophy-content p {
          font-size: 1.1rem;
          line-height: 1.7;
        }
        
        .garden-features, .sustainable-practices {
          background-color: #f9f9f9;
          padding: 60px;
          border-radius: 15px;
          margin-bottom: 60px;
        }
        
        .garden-features h2, .sustainable-practices h2 {
          text-align: center;
          color: var(--primary-color);
          margin-bottom: 40px;
          font-size: 2.2rem;
        }
        
        .features-grid, .practices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .feature-item, .practice-item {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }
        
        .feature-item:hover, .practice-item:hover {
          transform: translateY(-5px);
        }
        
        .feature-item h3, .practice-item h3 {
          color: var(--accent-color);
          margin-bottom: 15px;
          font-size: 1.3rem;
        }
        
        .feature-item p, .practice-item p {
          font-size: 1rem;
          line-height: 1.5;
        }
        
        .seasonal-beauty {
          padding: 40px;
          margin-bottom: 60px;
          text-align: center;
          background-color: var(--light-color);
          border-radius: 15px;
        }
        
        .seasonal-beauty h2 {
          color: var(--primary-color);
          font-size: 2.2rem;
          margin-bottom: 20px;
        }
        
        .seasonal-beauty p {
          max-width: 800px;
          margin: 0 auto;
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
        
        @media (max-width: 768px) {
          .image-grid, .features-grid, .practices-grid {
            grid-template-columns: 1fr;
          }
          
          .navigation-links {
            flex-direction: column;
            align-items: center;
          }
          
          .garden-features, .sustainable-practices, .landscape-philosophy {
            padding: 30px;
          }
        }
      `}</style>
    </div>
  );
} 