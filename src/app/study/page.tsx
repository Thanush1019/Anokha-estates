'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function StudyPage() {
  const [lightbox, setLightbox] = useState<{show: boolean, src: string}>({
    show: false,
    src: ''
  });

  const studyImages = [
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-14.jpg',
      alt: 'Home Office',
      description: 'Elegant home office with custom built-in shelving'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-15.jpg',
      alt: 'Study Room',
      description: 'Sophisticated study with panoramic views and premium furnishings'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-16.jpg',
      alt: 'Reading Nook',
      description: 'Cozy reading area with custom lighting and comfortable seating'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-17.jpg',
      alt: 'Executive Office',
      description: 'Professional executive office with state-of-the-art technology'
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
          <h1>Study & Office Spaces</h1>
          <p>Thoughtfully designed workspaces for productivity and inspiration</p>
        </div>
      </div>
      
      <section className="category-gallery">
        <div className="container">
          <div className="category-intro" data-aos="fade-up">
            <h2>Inspiring Workspaces</h2>
            <p>
              Our study and office spaces blend functionality with sophistication, creating environments 
              that inspire creativity and enhance productivity. Each space is thoughtfully designed 
              with premium materials, ergonomic considerations, and integrated technology to support 
              both focused work and collaborative sessions.
            </p>
          </div>
          
          <div className="image-grid">
            {studyImages.map((image, index) => (
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
          
          <div className="study-features" data-aos="fade-up">
            <h2>Study & Office Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Ergonomic Design</h3>
                <p>Carefully planned layouts with premium ergonomic furniture for comfort during extended work sessions</p>
              </div>
              <div className="feature-item">
                <h3>Smart Technology</h3>
                <p>Integrated technology solutions including advanced connectivity and automation features</p>
              </div>
              <div className="feature-item">
                <h3>Custom Storage</h3>
                <p>Bespoke cabinetry and shelving systems designed for optimal organization</p>
              </div>
              <div className="feature-item">
                <h3>Acoustic Comfort</h3>
                <p>Sound-dampening features for a quiet, distraction-free environment</p>
              </div>
            </div>
          </div>
          
          <div className="design-philosophy" data-aos="fade-up">
            <h2>Design Philosophy</h2>
            <p>
              Our study and office spaces are designed with a deep understanding of the balance between 
              functionality and aesthetics. We create environments that not only meet practical needs 
              but also inspire creativity and productivity through thoughtful design elements, natural light, 
              and connection to outdoor views. Each space is tailored to support different work styles 
              and activities, from focused individual work to collaborative sessions.
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
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 15px;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }
        
        .image-container:hover .image-caption {
          transform: translateY(0);
        }
        
        .image-caption h3 {
          margin: 0 0 5px;
          font-size: 1.2rem;
        }
        
        .image-caption p {
          margin: 0;
          font-size: 0.9rem;
        }
        
        .study-features, .design-philosophy {
          margin-bottom: 60px;
        }
        
        .study-features h2, .design-philosophy h2 {
          color: var(--primary-color);
          font-size: 2rem;
          margin-bottom: 30px;
          text-align: center;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .feature-item {
          background-color: var(--light-gray);
          padding: 25px;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }
        
        .feature-item:hover {
          transform: translateY(-5px);
        }
        
        .feature-item h3 {
          color: var(--primary-color);
          margin-bottom: 15px;
          font-size: 1.3rem;
        }
        
        .design-philosophy p {
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        
        .navigation-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 60px;
        }
        
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .close-lightbox {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .category-header {
            padding: 120px 0 50px;
          }
          
          .category-header h1 {
            font-size: 2.2rem;
          }
          
          .image-grid {
            grid-template-columns: 1fr;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
} 