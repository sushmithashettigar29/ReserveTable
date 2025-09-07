import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import GallerySection from "../components/GallerySection";
import ReservationSection from "../components/ReservationSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
     <div className="p-6">
      <HeroSection />
      <StatsSection />
      <GallerySection />
      <ReservationSection/>
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      {/* Other sections later */}
    </div>
  )
}

export default HomePage
