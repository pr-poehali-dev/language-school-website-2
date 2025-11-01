import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Абонементы</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Выгодные пакеты занятий</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          <Card className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2 relative">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl mb-2">4 занятия</CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-primary">5 600₽</span>
                <span className="text-base sm:text-lg text-muted-foreground">/мес</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">1 400₽ за занятие</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 sm:space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base">4 занятия по 60 минут</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base">Индивидуальная программа</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base">Гибкий график</span>
                </div>
              </div>
              <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="w-full text-base sm:text-lg py-5 sm:py-6 btn-hover-effect">Выбрать</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-primary relative">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 sm:px-4 py-1 text-xs sm:text-sm">Популярный</Badge>
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl mb-2">8 занятий</CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-primary">10 400₽</span>
                <span className="text-base sm:text-lg text-muted-foreground">/мес</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">1 300₽ за занятие</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 sm:space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base">8 занятий по 60 минут</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base">Все материалы включены</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base">Доступ к разговорному клубу</span>
                </div>
              </div>
              <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-gradient-to-r from-primary to-secondary text-base sm:text-lg py-5 sm:py-6 btn-hover-effect">Выбрать</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2 relative">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl mb-2">12 занятий</CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-primary">14 400₽</span>
                <span className="text-base sm:text-lg text-muted-foreground">/мес</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">1 200₽ за занятие</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 sm:space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base">12 занятий по 60 минут</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base">Максимальная экономия</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base">Приоритетная поддержка</span>
                </div>
              </div>
              <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="w-full text-base sm:text-lg py-5 sm:py-6 btn-hover-effect">Выбрать</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-secondary relative">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white px-3 sm:px-4 py-1 text-xs sm:text-sm">Выгодно</Badge>
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl mb-2">16 занятий</CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-secondary">17 600₽</span>
                <span className="text-base sm:text-lg text-muted-foreground">/мес</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">1 100₽ за занятие</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 sm:space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-secondary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base">16 занятий по 60 минут</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-secondary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base">Лучшая цена за занятие</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-secondary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base">VIP поддержка 24/7</span>
                </div>
              </div>
              <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-gradient-to-r from-secondary to-primary text-base sm:text-lg py-5 sm:py-6 btn-hover-effect">Выбрать</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
