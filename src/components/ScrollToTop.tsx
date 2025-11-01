import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollTop) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="lg"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shadow-2xl bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-all btn-hover-effect"
      aria-label="Scroll to top"
    >
      <Icon name="ArrowUp" size={20} className="sm:w-6 sm:h-6" />
    </Button>
  );
}