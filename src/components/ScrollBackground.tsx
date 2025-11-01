import { useEffect, useState } from 'react';

export default function ScrollBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftImageTransform = Math.min(scrollY * 0.3, 400);
  const rightImageTransform = Math.min(scrollY * 0.3, 400);
  const opacity = Math.min(scrollY * 0.001, 0.55);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] md:w-[1200px] md:h-[1200px] transition-all duration-300 ease-out"
        style={{
          transform: `translate(${-600 + leftImageTransform}px, ${-200 + scrollY * 0.15}px) scale(${1 + scrollY * 0.0002})`,
          opacity: opacity,
        }}
      >
        <div className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/files/c26c75c8-d633-49ad-80d3-7dac19e6092e.jpg"
            alt=""
            className="w-full h-full object-contain"
            style={{ filter: 'brightness(1.15) saturate(1.3)' }}
          />
          <div className="absolute inset-0 noise-overlay" />
        </div>
      </div>

      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] md:w-[1200px] md:h-[1200px] transition-all duration-300 ease-out"
        style={{
          transform: `translate(${600 - rightImageTransform}px, ${200 + scrollY * 0.15}px) scale(${1 + scrollY * 0.0002})`,
          opacity: opacity,
        }}
      >
        <div className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/files/a5e3c3ca-0bfd-43ad-9ee8-2c5d23325ead.jpg"
            alt=""
            className="w-full h-full object-contain"
            style={{ filter: 'brightness(1.15) saturate(1.3)' }}
          />
          <div className="absolute inset-0 noise-overlay" />
        </div>
      </div>
    </div>
  );
}