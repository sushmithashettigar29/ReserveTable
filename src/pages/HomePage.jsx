import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import GallerySection from '../components/GallerySection';
import ReservationHero from '../components/ReservationHero';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <GallerySection />
      <ReservationHero />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      {/* Other sections later */}
    </div>
  );
}

export default HomePage;
