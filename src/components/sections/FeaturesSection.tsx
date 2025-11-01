import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
            <CardHeader>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <Icon name="GraduationCap" className="text-white" size={28} />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Опытные педагоги</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-base sm:text-lg">Преподаватели с международными сертификатами и многолетним опытом</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
            <CardHeader>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <Icon name="Video" className="text-white" size={28} />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Онлайн формат</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-base sm:text-lg">Занимайтесь где угодно в удобное для вас время</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 sm:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <Icon name="Users" className="text-white" size={28} />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Разговорный клуб</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-base sm:text-lg">Бесплатный доступ при покупке абонемента</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
