'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BalconyPage() {
  const [lightbox, setLightbox] = useState<{show: boolean, src: string}>({
    show: false,
    src: ''
  });

  const balconyImages = [
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-11.jpg',
      alt: 'Balcony View 1',
      description: 'Spacious balcony with panoramic views and comfortable seating'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-12.jpg',
      alt: 'Balcony View 2',
      description: 'Elegant balcony space with landscaping and lounging area'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-14.jpg',
      alt: 'Balcony View 3',
      description: 'Contemporary balcony design with glass railings and scenic views'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-39.jpg',
      alt: 'Luxury Terrace',
      description: 'Luxury outdoor terrace with premium furniture and landscaping'
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
          <h1>Balconies & Terraces</h1>
          <p>Discover our outdoor living spaces with stunning views</p>
        </div>
      </div>
      
      <section className="category-gallery">
        <div className="container">
          <div className="category-intro" data-aos="fade-up">
            <h2>Elevated Outdoor Living</h2>
            <p>
              Our balconies and terraces extend living spaces to the outdoors, creating 
              perfect settings for relaxation, entertainment, and connection with nature. 
              Each space is thoughtfully designed with premium materials and furnishings 
              to provide comfortable outdoor living throughout the year.
            </p>
          </div>
          
          <div className="image-grid">
            {balconyImages.map((image, index) => (
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
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="balcony-features" data-aos="fade-up">
            <h2>Outdoor Space Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Premium Furniture</h3>
                <p>Weather-resistant seating and dining options for comfort and durability</p>
              </div>
              <div className="feature-item">
                <h3>Ambient Lighting</h3>
                <p>Thoughtful lighting design for evening enjoyment and ambiance</p>
              </div>
              <div className="feature-item">
                <h3>Container Gardens</h3>
                <p>Curated plantings that provide privacy, color, and natural beauty</p>
              </div>
              <div className="feature-item">
                <h3>Outdoor Kitchens</h3>
                <p>Select terraces feature cooking and entertaining amenities</p>
              </div>
            </div>
          </div>
          
          <div className="design-approach" data-aos="fade-up">
            <div className="approach-content">
              <h2>Our Design Philosophy</h2>
              <p>
                We believe outdoor spaces should be as thoughtfully designed as interiors, 
                providing seamless transitions and expanding the usable living area. Our balconies 
                and terraces are created to enhance views while providing privacy and protection 
                from the elements, resulting in spaces that can be enjoyed year-round.
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
        
        .balcony-features {
          background-color: #f9f9f9;
          padding: 60px;
          border-radius: 15px;
          margin-bottom: 60px;
        }
        
        .balcony-features h2 {
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
          .image-grid, .features-grid {
            grid-template-columns: 1fr;
          }
          
          .navigation-links {
            flex-direction: column;
            align-items: center;
          }
          
          .balcony-features {
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