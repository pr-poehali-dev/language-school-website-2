import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="pt-20 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/3105bd0c-5438-47ce-93b4-1e17c561014a.jpg)',
          animation: 'fadeInSlow 2s ease-out forwards'
        }}
      />
      <div className="absolute inset-0 bg-white/75 z-[1]" />
      <div className="container mx-auto text-center max-w-6xl animate-fade-in relative z-10 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight px-2">
          Изучайте языки <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            с удовольствием
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-2 sm:px-4">
          Онлайн школа иностранных языков DIALECTA — ваш путь к свободному владению китайским и английским языками
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-4">
          <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-5 md:py-6 bg-gradient-to-r from-primary to-secondary btn-hover-effect">
            <Icon name="Sparkles" className="mr-2" size={20} />
            <span className="hidden sm:inline">Первое занятие бесплатно</span>
            <span className="sm:hidden">Первое занятие бесплатно</span>
          </Button>
          <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="outline" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-5 md:py-6 border-2 btn-hover-effect">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
}