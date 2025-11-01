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
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-2xl bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-all btn-hover-effect"
      aria-label="Scroll to top"
    >
      <Icon name="ArrowUp" size={24} />
    </Button>
  );
}
