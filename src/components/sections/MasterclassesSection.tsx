import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function MasterclassesSection() {
  return (
    <section id="masterclasses" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Мастер-классы</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Групповые занятия для практики языка</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-primary/50">
            <CardHeader>
              <Badge className="w-fit mb-2 bg-gradient-to-r from-primary to-secondary">Популярно</Badge>
              <CardTitle className="text-2xl sm:text-3xl flex items-center gap-2">
                <span>Разговорный клуб</span>
                <span className="text-3xl sm:text-4xl">💬</span>
              </CardTitle>
              <CardDescription className="text-base sm:text-lg">Практика разговорной речи в группе</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4 mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="Users" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Группы до 8 человек</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="Clock" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">2 часа живого общения</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="Calendar" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Каждую неделю</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="Gift" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Бесплатно при покупке абонемента</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Бесплатно
                </div>
                <div className="text-sm text-center text-muted-foreground">при покупке любого абонемента</div>
              </div>
              <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-gradient-to-r from-primary to-secondary text-base sm:text-lg py-5 sm:py-6 btn-hover-effect">
                Присоединиться
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl flex items-center gap-2">
                <span>Тематические вебинары</span>
                <span className="text-3xl sm:text-4xl">🎓</span>
              </CardTitle>
              <CardDescription className="text-base sm:text-lg">Специальные темы и навыки</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4 mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="BookOpen" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Бизнес-английский</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="BookOpen" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Китайская культура</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="BookOpen" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Подготовка к экзаменам</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="BookOpen" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Разговорные клише</span>
                </div>
              </div>
              <div className="bg-muted rounded-xl p-6 mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-center mb-2">500₽</div>
                <div className="text-sm text-center text-muted-foreground">за вебинар</div>
              </div>
              <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="w-full text-base sm:text-lg py-5 sm:py-6 btn-hover-effect">
                Узнать расписание
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
