import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import GallerySection from '@/components/GallerySection';
import Blueprint from '@/components/Blueprint';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Overview />
      <GallerySection />
      <Blueprint />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
} 