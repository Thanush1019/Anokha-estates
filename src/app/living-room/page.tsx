'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LivingRoomPage() {
  const [lightbox, setLightbox] = useState<{show: boolean, src: string}>({
    show: false,
    src: ''
  });

  const images = [
    '/VILLA 4 FINAL OUTPUT/VILLA 4-12.jpg',
    '/VILLA 4 FINAL OUTPUT/VILLA 4-1.jpg',
    '/VILLA 4 FINAL OUTPUT/VILLA 4-13.jpg',
  ];

  const openLightbox = (src: string) => {
    setLightbox({
      show: true,
      src
    });
  };

  const closeLightbox = () => {
    setLightbox({
      show: false,
      src: ''
    });
  };

  return (
    <div className="room-page">
      <Navbar />
      
      <div className="room-header">
        <div className="container">
          <h1>Living Room</h1>
          <p>Elegant and spacious living area designed for comfort and style</p>
        </div>
      </div>
      
      <section className="room-content">
        <div className="container">
          <div className="room-grid">
            {images.map((image, index) => (
              <div key={index} className="room-image" data-aos="fade-up">
                <Image 
                  src={image} 
                  alt={`Living Room ${index + 1}`} 
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: '400px' }}
                  onClick={() => openLightbox(image)}
                />
              </div>
            ))}
          </div>
          
          <div className="room-description" data-aos="fade-up">
            <h2>Luxury Redefined</h2>
            <p>
              Our living room is the centerpiece of The Terraces villa, featuring 
              high ceilings and panoramic windows that invite natural light to flood 
              the space throughout the day. The contemporary design is complemented by 
              bespoke furniture pieces carefully selected for both comfort and aesthetic appeal.
            </p>
            <p>
              The space seamlessly connects to the dining area and outdoor terrace, 
              creating a perfect flow for both everyday living and entertaining guests. 
              Premium materials including hardwood flooring, natural stone accents, and 
              custom millwork elevate the space to a truly luxurious level.
            </p>
            
            <div className="room-features">
              <h3>Features</h3>
              <ul>
                <li>Expansive panoramic windows</li>
                <li>Custom-designed fireplace</li>
                <li>Premium hardwood flooring</li>
                <li>Smart home integration</li>
                <li>Seamless indoor-outdoor transition</li>
              </ul>
            </div>
          </div>
          
          <div className="navigation-links" data-aos="fade-up">
            <Link href="/gallery" className="cta-button">Back to Gallery</Link>
            <Link href="/" className="cta-button">Home</Link>
          </div>
        </div>
      </section>
      
      {lightbox.show && (
        <div className="lightbox" onClick={closeLightbox}>
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
        .room-header {
          padding: 150px 0 70px;
          background-color: var(--primary-color);
          color: var(--white);
          text-align: center;
        }
        
        .room-header h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        .room-header p {
          font-size: 1.2rem;
        }
        
        .room-content {
          padding: 80px 0;
        }
        
        .room-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 50px;
        }
        
        .room-description {
          margin-bottom: 50px;
        }
        
        .room-description h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: var(--primary-color);
        }
        
        .room-description p {
          margin-bottom: 20px;
          font-size: 1.1rem;
          line-height: 1.8;
        }
        
        .room-features {
          background-color: var(--light-gray);
          padding: 30px;
          border-radius: 10px;
          margin-top: 40px;
        }
        
        .room-features h3 {
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: var(--primary-color);
        }
        
        .room-features ul {
          list-style: none;
          padding: 0;
        }
        
        .room-features li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 15px;
          font-size: 1.1rem;
        }
        
        .room-features li:before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 12px;
          height: 12px;
          background-color: var(--accent-color);
          border-radius: 50%;
        }
        
        .navigation-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
} 