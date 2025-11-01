import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function TranslationSection() {
  const [calculatorData, setCalculatorData] = useState({
    translationType: 'written',
    language: 'english',
    volume: 3
  });

  const calculatePrice = () => {
    if (calculatorData.translationType === 'written') {
      const volume = Math.max(3, calculatorData.volume);
      if (calculatorData.language === 'english') {
        const minPrice = volume * 800;
        const maxPrice = volume * 1200;
        return { min: minPrice, max: maxPrice };
      } else {
        const minPrice = volume * 1000;
        const maxPrice = volume * 1500;
        return { min: minPrice, max: maxPrice };
      }
    } else {
      const volume = Math.max(4, calculatorData.volume);
      if (calculatorData.language === 'english') {
        const price = volume * 2200;
        return { min: price, max: price };
      } else {
        const price = volume * 3800;
        return { min: price, max: price };
      }
    }
  };

  const priceResult = calculatePrice();

  return (
    <section id="translation" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Переводы</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Профессиональный перевод документов</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          <Card className="overflow-hidden hover:shadow-2xl transition-all border-2">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-3">
                <Icon name="FileText" className="text-white" size={24} />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">Письменный перевод</CardTitle>
              <CardDescription className="text-base sm:text-lg">Документы, контракты, сайты</CardDescription>
            </CardHeader>
            <CardContent className="mt-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">С английского: от 800₽ за страницу</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">С китайского: от 1000₽ за страницу</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Минимальный заказ: 3 страницы</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Сроки: от 1 рабочего дня</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-2xl transition-all border-2">
            <CardHeader className="bg-gradient-to-br from-secondary/5 to-primary/5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-3">
                <Icon name="Mic" className="text-white" size={24} />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">Устный перевод</CardTitle>
              <CardDescription className="text-base sm:text-lg">Переговоры, встречи, мероприятия</CardDescription>
            </CardHeader>
            <CardContent className="mt-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Английский: 2200₽ в час</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Китайский: 3800₽ в час</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Минимальный заказ: 4 часа</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Выезд переводчика включён</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mt-8 sm:mt-10 md:mt-12 max-w-3xl mx-auto border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl text-center">Калькулятор стоимости</CardTitle>
            <CardDescription className="text-center text-base sm:text-lg">Рассчитайте стоимость перевода</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-base sm:text-lg font-medium mb-3">Тип перевода</label>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Button
                  onClick={() => setCalculatorData({ ...calculatorData, translationType: 'written' })}
                  variant={calculatorData.translationType === 'written' ? 'default' : 'outline'}
                  className="h-auto py-4 text-base sm:text-lg"
                >
                  <Icon name="FileText" className="mr-2" size={20} />
                  Письменный
                </Button>
                <Button
                  onClick={() => setCalculatorData({ ...calculatorData, translationType: 'oral' })}
                  variant={calculatorData.translationType === 'oral' ? 'default' : 'outline'}
                  className="h-auto py-4 text-base sm:text-lg"
                >
                  <Icon name="Mic" className="mr-2" size={20} />
                  Устный
                </Button>
              </div>
            </div>
            
            <div>
              <label className="block text-base sm:text-lg font-medium mb-3">Язык</label>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Button
                  onClick={() => setCalculatorData({ ...calculatorData, language: 'english' })}
                  variant={calculatorData.language === 'english' ? 'default' : 'outline'}
                  className="h-auto py-4 text-base sm:text-lg"
                >
                  🇬🇧 Английский
                </Button>
                <Button
                  onClick={() => setCalculatorData({ ...calculatorData, language: 'chinese' })}
                  variant={calculatorData.language === 'chinese' ? 'default' : 'outline'}
                  className="h-auto py-4 text-base sm:text-lg"
                >
                  🇨🇳 Китайский
                </Button>
              </div>
            </div>
            
            <div>
              <label className="block text-base sm:text-lg font-medium mb-3">
                {calculatorData.translationType === 'written' ? 'Количество страниц' : 'Количество часов'}
              </label>
              <input
                type="number"
                min={calculatorData.translationType === 'written' ? 3 : 4}
                value={calculatorData.volume}
                onChange={(e) => setCalculatorData({ ...calculatorData, volume: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-3 border-2 rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Минимум: {calculatorData.translationType === 'written' ? '3 страницы' : '4 часа'}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 text-center">
              <p className="text-base sm:text-lg text-muted-foreground mb-2">Стоимость перевода</p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {priceResult.min === priceResult.max 
                  ? `${priceResult.min.toLocaleString()}₽` 
                  : `${priceResult.min.toLocaleString()}₽ - ${priceResult.max.toLocaleString()}₽`
                }
              </p>
            </div>
            
            <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-gradient-to-r from-primary to-secondary text-base sm:text-lg py-5 sm:py-6 btn-hover-effect">
              <Icon name="Send" className="mr-2" size={20} />
              Заказать перевод
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
