import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function CoursesSection() {
  return (
    <section id="courses" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">Наши курсы</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">Выберите направление для изучения</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 flex flex-col h-full">
            <div className="h-36 sm:h-44 md:h-52 lg:h-56 bg-gradient-to-br from-blue-500 via-blue-600 to-red-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl relative z-10">🇬🇧</span>
            </div>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">Английский язык</CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg">Для работы, учёбы и путешествий</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 mb-5 sm:mb-6 flex-1">
                <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg leading-snug">Общий и бизнес-английский</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg leading-snug">Подготовка к IELTS, TOEFL, Cambridge</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg leading-snug">Английский для детей и подростков</span>
                </div>
              </div>
              <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6 btn-hover-effect">
                Записаться на английский
              </Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 flex flex-col h-full">
            <div className="h-36 sm:h-44 md:h-52 lg:h-56 bg-gradient-to-br from-red-600 via-yellow-500 to-red-700 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl relative z-10">🇨🇳</span>
            </div>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">Китайский язык</CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg">От основ до делового китайского</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 mb-5 sm:mb-6 flex-1">
                <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg leading-snug">Китайский с нуля до свободного владения</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg leading-snug">Подготовка к HSK всех уровней</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg leading-snug">Китайский для бизнеса и путешествий</span>
                </div>
              </div>
              <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-gradient-to-r from-red-600 to-yellow-600 text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6 btn-hover-effect">
                Записаться на китайский
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}