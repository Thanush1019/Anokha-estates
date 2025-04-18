'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LivingRoomsPage() {
  const [lightbox, setLightbox] = useState<{show: boolean, src: string}>({
    show: false,
    src: ''
  });

  const livingRoomImages = [
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-33.jpg',
      alt: 'Contemporary Seating',
      description: 'Elegant seating area with natural light and minimalist design'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-34.jpg',
      alt: 'Living Room Details',
      description: 'Carefully curated details that enhance the living experience'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-36.jpg',
      alt: 'Relaxation Space',
      description: 'Comfortable living area designed for relaxation and conversation'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-37.jpg',
      alt: 'Living Room View',
      description: 'Stunning living room with scenic views and modern furnishings'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-38.jpg',
      alt: 'Lounge Area',
      description: 'Sophisticated lounge space with ambient lighting and comfortable seating'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-47.jpg',
      alt: 'Entertainment Space',
      description: 'Multi-functional entertainment area with premium finishes'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-1.jpg',
      alt: 'Main Living Area',
      description: 'Expansive main living area with open concept design and natural materials'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-2.jpg',
      alt: 'Family Living Space',
      description: 'Comfortable family living space with warm tones and cozy furnishings'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-3.jpg',
      alt: 'Living Room Perspective',
      description: 'Unique perspective of the living area highlighting architectural features'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-5.jpg',
      alt: 'Formal Living Room',
      description: 'Formal living room designed for elegant entertaining and gatherings'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-6.jpg',
      alt: 'Transitional Space',
      description: 'Transitional living space connecting indoor and outdoor environments'
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
          <h1>Living Rooms</h1>
          <p>Discover our elegant and functional living space designs</p>
        </div>
      </div>
      
      <section className="category-gallery">
        <div className="container">
          <div className="category-intro" data-aos="fade-up">
            <h2>Where Luxury Meets Comfort</h2>
            <p>
              Our living rooms are the heart of each home, designed to bring people together 
              in spaces that balance aesthetics with functionality. Each living space features 
              premium materials, thoughtful layouts, and stunning architectural elements that 
              create the perfect environment for both entertaining and relaxation.
            </p>
          </div>
          
          <div className="image-grid">
            {livingRoomImages.map((image, index) => (
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
                </div>
              </div>
            ))}
          </div>
          
          <div className="living-room-features" data-aos="fade-up">
            <h2>Living Space Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Natural Light</h3>
                <p>Strategically placed windows maximize natural light throughout the day</p>
              </div>
              <div className="feature-item">
                <h3>Entertainment Systems</h3>
                <p>State-of-the-art audio and visual systems integrated seamlessly</p>
              </div>
              <div className="feature-item">
                <h3>Flexible Layouts</h3>
                <p>Versatile spaces that can adapt to different entertaining needs</p>
              </div>
              <div className="feature-item">
                <h3>Bespoke Furniture</h3>
                <p>Custom-designed furniture pieces that complement the architecture</p>
              </div>
            </div>
          </div>
          
          <div className="design-philosophy" data-aos="fade-up">
            <div className="philosophy-content">
              <h2>Our Design Philosophy</h2>
              <p>
                We believe living rooms should be both beautiful and functional, creating a seamless 
                flow throughout the home while offering distinct zones for various activities. Our 
                designers focus on creating spaces that reflect the personality and lifestyle of 
                the homeowners while ensuring timeless elegance.
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
        
        .living-room-features {
          background-color: #f9f9f9;
          padding: 60px;
          border-radius: 15px;
          margin-bottom: 60px;
        }
        
        .living-room-features h2 {
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
        
        .design-philosophy {
          padding: 40px 0;
          margin-bottom: 60px;
          background: linear-gradient(to right, #f9f9f9, white);
          border-radius: 15px;
        }
        
        .philosophy-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
        }
        
        .philosophy-content h2 {
          color: var(--primary-color);
          font-size: 2.2rem;
          margin-bottom: 20px;
        }
        
        .philosophy-content p {
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
          
          .living-room-features {
            padding: 30px;
          }
          
          .design-philosophy {
            padding: 30px 0;
          }
        }
      `}</style>
    </div>
  );
} 