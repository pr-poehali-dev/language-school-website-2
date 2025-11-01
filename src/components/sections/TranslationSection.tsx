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
    <section id="translation" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">Переводы</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">Профессиональный перевод документов</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          <Card className="overflow-hidden hover:shadow-2xl transition-all border-2 flex flex-col">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 sm:p-5 md:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                <Icon name="FileText" className="text-white" size={20} />
              </div>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">Письменный перевод</CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg">Документы, контракты, сайты</CardDescription>
            </CardHeader>
            <CardContent className="mt-4 sm:mt-5 md:mt-6 flex-1 p-4 sm:p-5 md:p-6">
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg">С английского: от 800₽ за страницу</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg">С китайского: от 1000₽ за страницу</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg">Минимальный заказ: 3 страницы</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg">Сроки: от 1 рабочего дня</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-2xl transition-all border-2 flex flex-col">
            <CardHeader className="bg-gradient-to-br from-secondary/5 to-primary/5 p-4 sm:p-5 md:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                <Icon name="Mic" className="text-white" size={20} />
              </div>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">Устный перевод</CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg">Переговоры, встречи, мероприятия</CardDescription>
            </CardHeader>
            <CardContent className="mt-4 sm:mt-5 md:mt-6 flex-1 p-4 sm:p-5 md:p-6">
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg">Английский: 2200₽ в час</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg">Китайский: 3800₽ в час</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg">Минимальный заказ: 4 часа</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-0.5 sm:mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base md:text-lg">Выезд переводчика включён</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 max-w-3xl mx-auto border-2 shadow-lg">
          <CardHeader className="p-4 sm:p-5 md:p-6">
            <CardTitle className="text-xl sm:text-2xl md:text-3xl text-center">Калькулятор стоимости</CardTitle>
            <CardDescription className="text-center text-sm sm:text-base md:text-lg mt-1 sm:mt-2">Рассчитайте стоимость перевода</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-5 md:space-y-6 p-4 sm:p-5 md:p-6">
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-3">Тип перевода</label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <Button
                  onClick={() => setCalculatorData({ ...calculatorData, translationType: 'written' })}
                  variant={calculatorData.translationType === 'written' ? 'default' : 'outline'}
                  className="h-auto py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base lg:text-lg min-h-[44px]"
                >
                  <Icon name="FileText" className="mr-1 sm:mr-2" size={18} />
                  Письменный
                </Button>
                <Button
                  onClick={() => setCalculatorData({ ...calculatorData, translationType: 'oral' })}
                  variant={calculatorData.translationType === 'oral' ? 'default' : 'outline'}
                  className="h-auto py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base lg:text-lg min-h-[44px]"
                >
                  <Icon name="Mic" className="mr-1 sm:mr-2" size={18} />
                  Устный
                </Button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-3">Язык</label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <Button
                  onClick={() => setCalculatorData({ ...calculatorData, language: 'english' })}
                  variant={calculatorData.language === 'english' ? 'default' : 'outline'}
                  className="h-auto py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base lg:text-lg min-h-[44px]"
                >
                  🇬🇧 Английский
                </Button>
                <Button
                  onClick={() => setCalculatorData({ ...calculatorData, language: 'chinese' })}
                  variant={calculatorData.language === 'chinese' ? 'default' : 'outline'}
                  className="h-auto py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base lg:text-lg min-h-[44px]"
                >
                  🇨🇳 Китайский
                </Button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-3">
                {calculatorData.translationType === 'written' ? 'Количество страниц' : 'Количество часов'}
              </label>
              <input
                type="number"
                min={calculatorData.translationType === 'written' ? 3 : 4}
                value={calculatorData.volume}
                onChange={(e) => setCalculatorData({ ...calculatorData, volume: parseInt(e.target.value) || 0 })}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 rounded-lg text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
              />
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                Минимум: {calculatorData.translationType === 'written' ? '3 страницы' : '4 часа'}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 sm:p-5 md:p-6 text-center">
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-1 sm:mb-2">Стоимость перевода</p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {priceResult.min === priceResult.max 
                  ? `${priceResult.min.toLocaleString()}₽` 
                  : `${priceResult.min.toLocaleString()}₽ - ${priceResult.max.toLocaleString()}₽`
                }
              </p>
            </div>
            
            <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-gradient-to-r from-primary to-secondary text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6 btn-hover-effect min-h-[44px]">
              <Icon name="Send" className="mr-1 sm:mr-2" size={18} />
              Заказать перевод
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}