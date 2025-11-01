import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Наши курсы</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Выберите направление для изучения</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2">
            <div className="h-40 sm:h-48 md:h-56 bg-gradient-to-br from-blue-500 via-blue-600 to-red-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <span className="text-6xl sm:text-7xl md:text-9xl relative z-10">🇬🇧</span>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl">Английский язык</CardTitle>
              <CardDescription className="text-base sm:text-lg">Для работы, учёбы и путешествий</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4 mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Общий и бизнес-английский</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Подготовка к IELTS, TOEFL, Cambridge</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Английский для детей и подростков</span>
                </div>
              </div>
              <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-base sm:text-lg py-5 sm:py-6 btn-hover-effect">
                Записаться на английский
              </Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2">
            <div className="h-40 sm:h-48 md:h-56 bg-gradient-to-br from-red-600 via-yellow-500 to-red-700 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <span className="text-6xl sm:text-7xl md:text-9xl relative z-10">🇨🇳</span>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl">Китайский язык</CardTitle>
              <CardDescription className="text-base sm:text-lg">От основ до делового китайского</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4 mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Китайский с нуля до свободного владения</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Подготовка к HSK всех уровней</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Китайский для бизнеса и путешествий</span>
                </div>
              </div>
              <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-gradient-to-r from-red-600 to-yellow-600 text-base sm:text-lg py-5 sm:py-6 btn-hover-effect">
                Записаться на китайский
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
