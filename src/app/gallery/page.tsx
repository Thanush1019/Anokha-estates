'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{show: boolean, src: string, index: number, category: string}>({
    show: false,
    src: '',
    index: 0,
    category: ''
  });
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [animated, setAnimated] = useState(false);

  // Initialize AOS when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.refresh();
    }
    setTimeout(() => {
      setAnimated(true);
    }, 100);
  }, []);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'living', name: 'Living Spaces' },
    { id: 'bedroom', name: 'Bedrooms' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'dining', name: 'Dining Area' },
    { id: 'balcony', name: 'Balcony' },
    { id: 'bathroom', name: 'Bathroom' }
  ];

  const galleryItems = [
    // Exterior
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-25.jpg',
      alt: 'Villa Exterior View',
      category: 'exterior',
      link: '/exteriors'
    },
    
    // Living Room
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-1.jpg',
      alt: 'Main Living Area',
      category: 'living',
      link: '/living-rooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-2.jpg',
      alt: 'Living Space View',
      category: 'living',
      link: '/living-rooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-3.jpg',
      alt: 'Living Room Perspective',
      category: 'living',
      link: '/living-rooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-5.jpg',
      alt: 'Formal Living Room',
      category: 'living',
      link: '/living-rooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-6.jpg',
      alt: 'Transitional Space',
      category: 'living',
      link: '/living-rooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-33.jpg',
      alt: 'Contemporary Seating',
      category: 'living',
      link: '/living-rooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-34.jpg',
      alt: 'Living Room Details',
      category: 'living',
      link: '/living-rooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-36.jpg',
      alt: 'Relaxation Space',
      category: 'living',
      link: '/living-rooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-37.jpg',
      alt: 'Living Room View',
      category: 'living',
      link: '/living-rooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-38.jpg',
      alt: 'Lounge Area',
      category: 'living',
      link: '/living-rooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-47.jpg',
      alt: 'Entertainment Space',
      category: 'living',
      link: '/living-rooms'
    },
    
    // Kitchen
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-7.jpg',
      alt: 'Kitchen View 1',
      category: 'kitchen',
      link: '/kitchens'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-8.jpg',
      alt: 'Kitchen View 2',
      category: 'kitchen',
      link: '/kitchens'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-9.jpg',
      alt: 'Kitchen View 3',
      category: 'kitchen',
      link: '/kitchens'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-10.jpg',
      alt: 'Kitchen View 4',
      category: 'kitchen',
      link: '/kitchens'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-42.jpg',
      alt: 'Kitchen View 5',
      category: 'kitchen',
      link: '/kitchens'
    },
    
    // Bedroom
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-17.jpg',
      alt: 'Bedroom View 1',
      category: 'bedroom',
      link: '/bedrooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-15.jpg',
      alt: 'Bedroom View 2',
      category: 'bedroom',
      link: '/bedrooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-16.jpg',
      alt: 'Bedroom View 3',
      category: 'bedroom',
      link: '/bedrooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-18.jpg',
      alt: 'Bedroom View 4',
      category: 'bedroom',
      link: '/bedrooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-19.jpg',
      alt: 'Bedroom View 5',
      category: 'bedroom',
      link: '/bedrooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-20.jpg',
      alt: 'Bedroom View 6',
      category: 'bedroom',
      link: '/bedrooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-22.jpg',
      alt: 'Bedroom View 7',
      category: 'bedroom',
      link: '/bedrooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-23.jpg',
      alt: 'Bedroom View 8',
      category: 'bedroom',
      link: '/bedrooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-24.jpg',
      alt: 'Master Bedroom',
      category: 'bedroom',
      link: '/bedrooms'
    },
    
    // Balcony
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-11.jpg',
      alt: 'Balcony View 1',
      category: 'balcony',
      link: '/balcony'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-12.jpg',
      alt: 'Balcony View 2',
      category: 'balcony',
      link: '/balcony'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-21.jpg',
      alt: 'Balcony View 3',
      category: 'balcony',
      link: '/balcony'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-35.jpg',
      alt: 'Balcony View 4',
      category: 'balcony',
      link: '/balcony'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-39.jpg',
      alt: 'Balcony View 5',
      category: 'balcony',
      link: '/balcony'
    },
    
    // Dining
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-31.jpg',
      alt: 'Dining Area View 1',
      category: 'dining',
      link: '/dining'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-4.jpg',
      alt: 'Dining Area View 2',
      category: 'dining',
      link: '/dining'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-45.jpg',
      alt: 'Dining Area View 3',
      category: 'dining',
      link: '/dining'
    },
    
    // Bathroom
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 4-26.jpg',
      alt: '',
      category: 'bathroom',
      link: '/bathrooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 1-27.jpg',
      alt: '',
      category: 'bathroom',
      link: '/bathrooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 1-28.jpg',
      alt: '',
      category: 'bathroom',
      link: '/bathrooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 1-29.jpg',
      alt: '',
      category: 'bathroom',
      link: '/bathrooms'
    },
    {
      src: '/VILLA 4 FINAL OUTPUT/VILLA 1-30.jpg',
      alt: '',
      category: 'bathroom',
      link: '/bathrooms'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (src: string, index: number, category: string, e: React.MouseEvent) => {
    e.preventDefault();
    setLightbox({
      show: true,
      src,
      index,
      category
    });
    // Lock scroll
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({
      show: false,
      src: '',
      index: 0,
      category: ''
    });
    // Restore scroll
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const categoryImages = galleryItems.filter(item => 
      activeCategory === 'all' ? true : item.category === activeCategory
    );
    
    let newIndex = lightbox.index;
    if (direction === 'prev') {
      if (newIndex > 0) {
        newIndex = newIndex - 1;
      } else {
        return;
      }
    } else {
      if (newIndex < categoryImages.length - 1) {
        newIndex = newIndex + 1;
      } else {
        return;
      }
    }
    
    setLightbox({
      ...lightbox,
      src: categoryImages[newIndex].src,
      index: newIndex
    });
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setAnimated(false);
    setTimeout(() => {
      setAnimated(true);
    }, 100);
  };

  return (
    <div className="gallery-page">
      <Navbar />
      
      <div className="gallery-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Explore the beauty of The Terraces</p>
        </div>
      </div>
      
      <section className="gallery">
        <div className="container">
          <div className="gallery-categories">
            {categories.map((category) => (
              <button 
                key={category.id} 
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={index} 
                className={`gallery-item ${animated ? 'animated' : ''}`} 
                data-aos="fade-up" 
                data-aos-delay={`${index % 4 * 100}`}
              >
                <Link href={item.link}>
                  <div className="gallery-image-container">
                    <Image 
                      src={item.src} 
                      alt={item.alt} 
                      width={600}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '400px' }}
                      onClick={(e) => openLightbox(item.src, index, item.category, e)}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="back-link" data-aos="fade-up">
            <Link href="/" className="cta-button">Back to Home</Link>
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
            className={`nav-button next-button ${lightbox.index === (activeCategory === 'all' ? galleryItems.length - 1 : galleryItems.filter(item => item.category === activeCategory).length - 1) ? 'disabled' : ''}`} 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            disabled={lightbox.index === (activeCategory === 'all' ? galleryItems.length - 1 : galleryItems.filter(item => item.category === activeCategory).length - 1)}
          >
            &rsaquo;
          </button>
        </div>
      )}
      
      <Footer />
      
      <style jsx>{`
        .gallery-header {
          padding: 150px 0 70px;
          background-color: var(--primary-color);
          color: var(--white);
          text-align: center;
        }
        
        .gallery-header h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        .gallery-header p {
          font-size: 1.2rem;
        }
        
        .gallery-categories {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 40px;
        }
        
        .category-btn {
          padding: 8px 20px;
          background: var(--light-gray);
          border: none;
          border-radius: 30px;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .category-btn.active {
          background: var(--accent-color);
          color: white;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }
        
        .gallery-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .gallery-item.animated {
          opacity: 1;
          transform: translateY(0);
        }
        
        .gallery-image-container {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .gallery-image-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
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
        
        .back-link {
          margin-top: 60px;
          text-align: center;
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
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
          
          .gallery-categories {
            gap: 10px;
          }
          
          .category-btn {
            padding: 6px 15px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
} 