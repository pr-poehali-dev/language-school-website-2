import { Button } from '@/components/ui/button';

export default function Header() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
        >
          DIALECTA
        </button>
        
        <div className="flex items-center gap-8">
          <a href="#courses" onClick={(e) => { e.preventDefault(); handleNavClick('#courses'); }} className="text-foreground hover:text-primary transition-colors font-medium">Курсы</a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); handleNavClick('#pricing'); }} className="text-foreground hover:text-primary transition-colors font-medium">Цены</a>
          <a href="#translation" onClick={(e) => { e.preventDefault(); handleNavClick('#translation'); }} className="text-foreground hover:text-primary transition-colors font-medium">Переводы</a>
          <a href="#masterclasses" onClick={(e) => { e.preventDefault(); handleNavClick('#masterclasses'); }} className="text-foreground hover:text-primary transition-colors font-medium">Мастер-классы</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
        </div>
        
        <Button 
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} 
          className="bg-gradient-to-r from-primary to-secondary btn-hover-effect"
        >
          Записаться
        </Button>
      </nav>
    </header>
  );
}
