import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 h-full">
            <CardHeader>
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <Icon name="GraduationCap" className="text-white" size={28} />
              </div>
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Опытные педагоги</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">Преподаватели с международными сертификатами и многолетним опытом</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 h-full">
            <CardHeader>
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <Icon name="Video" className="text-white" size={28} />
              </div>
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Онлайн формат</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">Занимайтесь где угодно в удобное для вас время</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 sm:col-span-2 lg:col-span-1 h-full">
            <CardHeader>
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <Icon name="Users" className="text-white" size={28} />
              </div>
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Разговорный клуб</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">Бесплатный доступ при покупке абонемента</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}