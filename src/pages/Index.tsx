import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CoursesSection from '@/components/sections/CoursesSection';
import PricingSection from '@/components/sections/PricingSection';
import TranslationSection from '@/components/sections/TranslationSection';
import MasterclassesSection from '@/components/sections/MasterclassesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollBackground from '@/components/ScrollBackground';

export default function Index() {
  return (
    <div className="min-h-screen relative">
      <ScrollBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
        <PricingSection />
        <TranslationSection />
        <MasterclassesSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}