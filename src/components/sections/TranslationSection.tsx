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
    <section id="translation" className="py-16 sm:py-20 md:py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Переводы</h2>
          <p className="text-lg md:text-xl text-muted-foreground">Профессиональный перевод документов</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="overflow-hidden hover:shadow-2xl transition-all border-2 flex flex-col">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-3">
                <Icon name="FileText" className="text-white" size={24} />
              </div>
              <CardTitle className="text-3xl">Письменный перевод</CardTitle>
              <CardDescription className="text-lg">Документы, контракты, сайты</CardDescription>
            </CardHeader>
            <CardContent className="mt-6 flex-1">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">С английского: от 800₽ за страницу</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">С китайского: от 1000₽ за страницу</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">Минимальный заказ: 3 страницы</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">Сроки: от 1 рабочего дня</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-2xl transition-all border-2 flex flex-col">
            <CardHeader className="bg-gradient-to-br from-secondary/5 to-primary/5">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-3">
                <Icon name="Mic" className="text-white" size={24} />
              </div>
              <CardTitle className="text-3xl">Устный перевод</CardTitle>
              <CardDescription className="text-lg">Переговоры, встречи, мероприятия</CardDescription>
            </CardHeader>
            <CardContent className="mt-6 flex-1">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">Английский: 2200₽ в час</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">Китайский: 3800₽ в час</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">Минимальный заказ: 4 часа</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">Выезд переводчика включён</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mt-12 max-w-3xl mx-auto border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Калькулятор стоимости</CardTitle>
            <CardDescription className="text-center text-lg mt-2">Рассчитайте стоимость перевода</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-3">Тип перевода</label>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => setCalculatorData({ ...calculatorData, translationType: 'written' })}
                  variant={calculatorData.translationType === 'written' ? 'default' : 'outline'}
                  className="h-auto py-4 text-lg"
                >
                  <Icon name="FileText" className="mr-2" size={20} />
                  Письменный
                </Button>
                <Button
                  onClick={() => setCalculatorData({ ...calculatorData, translationType: 'oral' })}
                  variant={calculatorData.translationType === 'oral' ? 'default' : 'outline'}
                  className="h-auto py-4 text-lg"
                >
                  <Icon name="Mic" className="mr-2" size={20} />
                  Устный
                </Button>
              </div>
            </div>
            
            <div>
              <label className="block text-lg font-medium mb-3">Язык</label>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => setCalculatorData({ ...calculatorData, language: 'english' })}
                  variant={calculatorData.language === 'english' ? 'default' : 'outline'}
                  className="h-auto py-4 text-lg"
                >
                  🇬🇧 Английский
                </Button>
                <Button
                  onClick={() => setCalculatorData({ ...calculatorData, language: 'chinese' })}
                  variant={calculatorData.language === 'chinese' ? 'default' : 'outline'}
                  className="h-auto py-4 text-lg"
                >
                  🇨🇳 Китайский
                </Button>
              </div>
            </div>
            
            <div>
              <label className="block text-lg font-medium mb-3">
                {calculatorData.translationType === 'written' ? 'Количество страниц' : 'Количество часов'}
              </label>
              <input
                type="range"
                min={calculatorData.translationType === 'written' ? 3 : 4}
                max={calculatorData.translationType === 'written' ? 50 : 20}
                value={calculatorData.volume}
                onChange={(e) => setCalculatorData({ ...calculatorData, volume: parseInt(e.target.value) })}
                className="w-full h-3 bg-gradient-to-r from-primary to-secondary rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`
                }}
              />
              <div className="text-center mt-3">
                <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {calculatorData.volume}
                </span>
                <span className="text-xl text-muted-foreground ml-2">
                  {calculatorData.translationType === 'written' ? 'стр.' : 'ч.'}
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
              <div className="text-muted-foreground mb-2 text-lg">Стоимость</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {priceResult.min === priceResult.max 
                  ? `${priceResult.min.toLocaleString()}₽`
                  : `${priceResult.min.toLocaleString()} - ${priceResult.max.toLocaleString()}₽`
                }
              </div>
            </div>
            
            <Button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} 
              className="w-full bg-gradient-to-r from-primary to-secondary text-lg py-6 btn-hover-effect"
            >
              Заказать перевод
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
