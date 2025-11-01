import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
        >
          DIALECTA
        </button>
        <div className="hidden lg:flex gap-6 xl:gap-8">
          <a href="#courses" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Курсы</a>
          <a href="#pricing" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Цены</a>
          <a href="#translation" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Переводы</a>
          <a href="#masterclasses" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Мастер-классы</a>
          <a href="#contact" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
        </div>
        <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r from-primary to-secondary text-sm sm:text-base px-4 sm:px-6 btn-hover-effect">Записаться</Button>
      </nav>
    </header>
  );
}
