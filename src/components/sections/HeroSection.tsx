import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/3105bd0c-5438-47ce-93b4-1e17c561014a.jpg)',
          animation: 'fadeInSlow 2s ease-out forwards'
        }}
      />
      <div className="absolute inset-0 bg-white/75 z-[1]" />
      <div className="container mx-auto text-center max-w-5xl animate-fade-in relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Изучайте языки <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            с удовольствием
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-4">
          Онлайн школа иностранных языков DIALECTA — ваш путь к свободному владению китайским и английским языками
        </p>
        <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
          <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 bg-gradient-to-r from-primary to-secondary btn-hover-effect">
            <Icon name="Sparkles" className="mr-2" size={20} />
            <span className="hidden sm:inline">Первое занятие бесплатно</span>
            <span className="sm:hidden">Бесплатно</span>
          </Button>
          <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 border-2 btn-hover-effect">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
}
