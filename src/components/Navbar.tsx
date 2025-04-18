'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeMenu();
    
    if (window.location.pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="logo" onClick={closeMenu}>The Terraces</Link>
      <div 
        className="hamburger" 
        onClick={toggleMenu}
      >
        <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
        <span style={{ opacity: isMenuOpen ? '0' : '1' }}></span>
        <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }}></span>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#overview" onClick={(e) => handleSectionClick(e, 'overview')}>Overview</a>
        <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
        <a href="#blueprint" onClick={(e) => handleSectionClick(e, 'blueprint')}>Blueprint</a>
        <a href="#location" onClick={(e) => handleSectionClick(e, 'location')}>Location</a>
        <a href="#contact" className="cta-button" onClick={(e) => handleSectionClick(e, 'contact')}>Inquire Now</a>
      </div>
    </nav>
  );
};

export default Navbar; 