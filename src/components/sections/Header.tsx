import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between max-w-7xl">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity z-50"
          >
            DIALECTA
          </button>
          
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#courses" onClick={(e) => { e.preventDefault(); handleNavClick('#courses'); }} className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Курсы</a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); handleNavClick('#pricing'); }} className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Цены</a>
            <a href="#translation" onClick={(e) => { e.preventDefault(); handleNavClick('#translation'); }} className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Переводы</a>
            <a href="#masterclasses" onClick={(e) => { e.preventDefault(); handleNavClick('#masterclasses'); }} className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Мастер-классы</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <Button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hidden sm:flex bg-gradient-to-r from-primary to-secondary text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-2.5 btn-hover-effect"
            >
              Записаться
            </Button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors z-50"
              aria-label="Меню"
            >
              {isMenuOpen ? (
                <Icon name="X" size={24} className="text-foreground" />
              ) : (
                <Icon name="Menu" size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsMenuOpen(false)} />
      
      <div className={`fixed top-[65px] right-0 bottom-0 w-full sm:w-80 bg-white z-40 lg:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="flex flex-col p-6 gap-2 h-full overflow-y-auto">
          <a 
            href="#courses" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#courses'); }}
            className="text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all px-4 py-3 rounded-lg flex items-center gap-3"
          >
            <Icon name="BookOpen" size={20} className="text-primary" />
            Курсы
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#pricing'); }}
            className="text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all px-4 py-3 rounded-lg flex items-center gap-3"
          >
            <Icon name="DollarSign" size={20} className="text-primary" />
            Цены
          </a>
          <a 
            href="#translation" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#translation'); }}
            className="text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all px-4 py-3 rounded-lg flex items-center gap-3"
          >
            <Icon name="Languages" size={20} className="text-primary" />
            Переводы
          </a>
          <a 
            href="#masterclasses" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#masterclasses'); }}
            className="text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all px-4 py-3 rounded-lg flex items-center gap-3"
          >
            <Icon name="Users" size={20} className="text-primary" />
            Мастер-классы
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all px-4 py-3 rounded-lg flex items-center gap-3"
          >
            <Icon name="Phone" size={20} className="text-primary" />
            Контакты
          </a>
          
          <div className="mt-6 pt-6 border-t">
            <Button 
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="w-full bg-gradient-to-r from-primary to-secondary text-base py-6 btn-hover-effect"
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              Записаться на курс
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}