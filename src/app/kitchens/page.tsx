'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function KitchensPage() {
  const [lightbox, setLightbox] = useState<{show: boolean, src: string}>({
    show: false,
    src: ''
  });

  const kitchenImages = [
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-9.jpg',
      alt: 'Gourmet Kitchen',
      description: 'Gourmet kitchen with premium appliances and island seating'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-10.jpg',
      alt: 'Modern Kitchen Design',
      description: 'Contemporary kitchen with sleek cabinetry and marble countertops'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-42.jpg',
      alt: 'Luxury Kitchen Space',
      description: 'Luxury kitchen with custom storage solutions and dining area'
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
          <h1>Kitchens</h1>
          <p>Explore our premium kitchen designs for the modern home</p>
        </div>
      </div>
      
      <section className="category-gallery">
        <div className="container">
          <div className="category-intro" data-aos="fade-up">
            <h2>Culinary Excellence</h2>
            <p>
              Our kitchen designs blend functionality and aesthetics to create the perfect 
              culinary environment. Each kitchen is meticulously crafted with high-quality 
              materials, innovative storage solutions, and state-of-the-art appliances to 
              enhance both the cooking experience and daily living.
            </p>
          </div>
          
          <div className="image-grid">
            {kitchenImages.map((image, index) => (
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
          
          <div className="kitchen-features" data-aos="fade-up">
            <h2>Kitchen Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Premium Appliances</h3>
                <p>High-end integrated appliances from leading brands</p>
              </div>
              <div className="feature-item">
                <h3>Custom Cabinetry</h3>
                <p>Handcrafted cabinetry with smart storage solutions</p>
              </div>
              <div className="feature-item">
                <h3>Designer Countertops</h3>
                <p>Luxury stone and composite surfaces built to last</p>
              </div>
              <div className="feature-item">
                <h3>Thoughtful Layouts</h3>
                <p>Ergonomic designs that optimize workflow and accessibility</p>
              </div>
            </div>
          </div>
          
          <div className="design-approach" data-aos="fade-up">
            <div className="approach-content">
              <h2>Our Design Approach</h2>
              <p>
                We understand that the kitchen is the heart of the home. Our designs prioritize 
                both functionality and aesthetic appeal, creating spaces that inspire creativity 
                and gathering. From the initial layout planning to the final material selections, 
                every detail is carefully considered to reflect the homeowner's lifestyle and needs.
              </p>
            </div>
          </div>
          
          <div className="material-highlight" data-aos="fade-up">
            <h2>Premium Materials</h2>
            <div className="materials-grid">
              <div className="material-item">
                <h3>Natural Stone</h3>
                <p>Marble, granite, and quartzite countertops</p>
              </div>
              <div className="material-item">
                <h3>Hardwood</h3>
                <p>Sustainably sourced hardwood cabinetry</p>
              </div>
              <div className="material-item">
                <h3>Metallic Accents</h3>
                <p>Brushed brass, copper, and stainless steel fixtures</p>
              </div>
              <div className="material-item">
                <h3>Glass Elements</h3>
                <p>Tempered glass, backlit panels, and decorative elements</p>
              </div>
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
        
        .kitchen-features, .material-highlight {
          background-color: #f9f9f9;
          padding: 60px;
          border-radius: 15px;
          margin-bottom: 60px;
        }
        
        .kitchen-features h2, .material-highlight h2 {
          text-align: center;
          color: var(--primary-color);
          margin-bottom: 40px;
          font-size: 2.2rem;
        }
        
        .features-grid, .materials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .feature-item, .material-item {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }
        
        .feature-item:hover, .material-item:hover {
          transform: translateY(-5px);
        }
        
        .feature-item h3, .material-item h3 {
          color: var(--accent-color);
          margin-bottom: 15px;
          font-size: 1.3rem;
        }
        
        .feature-item p, .material-item p {
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
          .image-grid, .features-grid, .materials-grid {
            grid-template-columns: 1fr;
          }
          
          .navigation-links {
            flex-direction: column;
            align-items: center;
          }
          
          .kitchen-features, .material-highlight {
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