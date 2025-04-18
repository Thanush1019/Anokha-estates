'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import AOS from 'aos';

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<{show: boolean, src: string}>({
    show: false,
    src: ''
  });

  useEffect(() => {
    AOS.refresh();
  }, []);

  const galleryItems = [
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-25.jpg',
      alt: 'Villa Exterior',
      link: '/exteriors',
      category: 'exterior'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-3.jpg',
      alt: 'Living Room',
      link: '/living-rooms',
      category: 'living'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-10.jpg',
      alt: 'Kitchen',
      link: '/kitchens',
      category: 'kitchen'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-24.jpg',
      alt: 'Master Bedroom',
      link: '/bedrooms',
      category: 'bedroom'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-4.jpg',
      alt: 'Dining Area',
      link: '/dining',
      category: 'dining'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-12.jpg',
      alt: 'Balcony',
      link: '/balcony',
      category: 'balcony'
    }
  ];

  const openLightbox = (src: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up" data-aos-duration="1200">Exquisite Spaces</h2>
        <div className="divider" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800"></div>
        <p className="section-description" data-aos="fade-up" data-aos-delay="200">
          Explore our curated collection of stunning interior and exterior spaces designed with luxury and comfort in mind.
        </p>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <Link href={item.link}>
                <div className="gallery-image-container">
                  <Image 
                    src={item.src} 
                    alt={item.alt} 
                    width={600}
                    height={300}
                    style={{ objectFit: 'cover', width: '100%', height: '300px', borderRadius: '10px' }}
                    onClick={(e) => openLightbox(item.src, e)}
                  />
                  <div className="image-overlay">
                    <span className="category-label">{item.category}</span>
                    <h3 className="item-title">{item.alt}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="view-more-container" data-aos="fade-up" data-aos-delay="300">
          <Link href="/gallery" className="cta-button">View Full Gallery</Link>
        </div>
      </div>

      {lightbox.show && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="close-lightbox">&times;</button>
          <Image 
            src={lightbox.src} 
            alt="Enlarged view" 
            width={1200}
            height={800}
            style={{ objectFit: 'contain', maxWidth: '90%', maxHeight: '90%' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      <style jsx>{`
        .gallery {
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
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }
        
        .gallery-image-container {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          height: 300px;
        }
        
        .gallery-image-container:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        
        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          padding: 20px;
          color: white;
          transition: all 0.3s ease;
          transform: translateY(0);
        }
        
        .category-label {
          display: inline-block;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          background-color: var(--accent-color);
          padding: 4px 10px;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        
        .item-title {
          font-size: 1.3rem;
          margin: 0;
          padding: 0;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }
        
        .view-more-container {
          text-align: center;
          margin-top: 50px;
        }
        
        .cta-button {
          display: inline-block;
          padding: 12px 30px;
          background-color: var(--accent-color);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid var(--accent-color);
        }
        
        .cta-button:hover {
          background-color: transparent;
          color: var(--accent-color);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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
          .gallery {
            padding: 80px 0;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }
          
          .section-description {
            font-size: 1rem;
          }
          
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default GallerySection;