import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerConfetti = () => {
    const colors = ['#8b5cf6', '#ec4899'];
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
      }, i * 30);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://functions.poehali.dev/a89d611a-3804-4d11-a137-5932439cbc3a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email
        })
      });
      
      if (response.ok) {
        if ('vibrate' in navigator) {
          navigator.vibrate(200);
        }
        triggerConfetti();
        toast({
          title: '✅ Заявка отправлена!',
          description: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
          variant: 'default'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast({
          title: '❌ Ошибка отправки',
          description: 'Произошла ошибка. Пожалуйста, попробуйте позже.',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: '❌ Ошибка отправки',
        description: 'Произошла ошибка. Пожалуйста, попробуйте позже.',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
          >
            DIALECTA
          </button>
          <div className="hidden lg:flex gap-6 xl:gap-8">
            <a href="#courses" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Курсы</a>
            <a href="#pricing" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Цены</a>
            <a href="#translation" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Переводы</a>
            <a href="#masterclasses" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Мастер-классы</a>
            <a href="#contact" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </div>
          <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r from-primary to-secondary text-sm sm:text-base px-4 sm:px-6 btn-hover-effect">Записаться</Button>
        </nav>
      </header>

      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto text-center max-w-5xl animate-fade-in">
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
                    <span className="text-base sm:text-lg">Разговорная практика с носителями</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-base sm:text-lg">Индивидуальная программа обучения</span>
                  </div>
                </div>
                <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full text-base sm:text-lg py-5 sm:py-6 btn-hover-effect" size="lg">Записаться на пробный урок</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2">
              <div className="h-40 sm:h-48 md:h-56 bg-gradient-to-br from-red-600 via-red-500 to-yellow-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <span className="text-6xl sm:text-7xl md:text-9xl relative z-10">🇨🇳</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl">Китайский язык</CardTitle>
                <CardDescription className="text-base sm:text-lg">От начального до продвинутого уровня</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4 mb-6">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-base sm:text-lg">Изучение иероглифов и пиньинь</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-base sm:text-lg">Подготовка к HSK всех уровней</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-base sm:text-lg">Деловой китайский для бизнеса</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-base sm:text-lg">Погружение в китайскую культуру</span>
                  </div>
                </div>
                <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full text-base sm:text-lg py-5 sm:py-6 btn-hover-effect" size="lg">Записаться на пробный урок</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Тарифы на обучение</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Прозрачные цены и выгодные абонементы</p>
          </div>
          
          <div className="mb-16 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Английский язык</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="hover:shadow-xl transition-all border-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardHeader className="pt-6 sm:pt-8">
                  <CardTitle className="text-xl sm:text-2xl">Пробное занятие</CardTitle>
                  <div className="mt-4 sm:mt-6">
                    <span className="text-4xl sm:text-5xl font-bold text-primary">Бесплатно</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm sm:text-base">45 минут занятия</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm sm:text-base">Определение уровня</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm sm:text-base">Индивидуальная программа</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm sm:text-base">Знакомство с преподавателем</span>
                    </li>
                  </ul>
                  <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="w-full text-base sm:text-lg py-5 sm:py-6 btn-hover-effect">Записаться</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all border-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardHeader className="pt-6 sm:pt-8">
                  <CardTitle className="text-xl sm:text-2xl">Разовое занятие</CardTitle>
                  <div className="mt-4 sm:mt-6">
                    <span className="text-4xl sm:text-5xl font-bold">2300₽</span>
                    <span className="text-muted-foreground text-base sm:text-lg">/урок</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>45 минут (академический час)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>Все учебные материалы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>Домашние задания</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>Гибкий график</span>
                    </li>
                  </ul>
                  <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="w-full text-lg py-6 btn-hover-effect">Выбрать</Button>
                </CardContent>
              </Card>

              <Card className="border-primary border-4 hover:shadow-2xl transition-all relative sm:col-span-2 lg:col-span-1">
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-bold shadow-lg">
                    Выгодно!
                  </Badge>
                </div>
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardHeader className="pt-6 sm:pt-8">
                  <CardTitle className="text-xl sm:text-2xl">Абонемент</CardTitle>
                  <div className="mt-4 sm:mt-6">
                    <span className="text-4xl sm:text-5xl font-bold text-primary">16 000₽</span>
                    <span className="text-muted-foreground text-base sm:text-lg">/месяц</span>
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-muted-foreground">8 занятий · 2 раза в неделю</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>8 занятий по 45 минут</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>Все учебные материалы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>Экономия 2400₽</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Star" className="text-secondary mt-1 fill-secondary" size={20} />
                      <span className="font-bold text-secondary">Разговорный клуб в подарок!</span>
                    </li>
                  </ul>
                  <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary btn-hover-effect">Купить абонемент</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Китайский язык</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="hover:shadow-xl transition-all border-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-yellow-500"></div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl">Пробное занятие</CardTitle>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-primary">Бесплатно</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>45 минут занятия</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>Определение уровня</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>Индивидуальная программа</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>Знакомство с преподавателем</span>
                    </li>
                  </ul>
                  <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="w-full text-lg py-6 btn-hover-effect">Записаться</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all border-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-yellow-500"></div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl">Разовое занятие</CardTitle>
                  <div className="mt-6">
                    <span className="text-5xl font-bold">2600₽</span>
                    <span className="text-muted-foreground text-lg">/урок</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>45 минут (академический час)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>Все учебные материалы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>Домашние задания</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>Гибкий график</span>
                    </li>
                  </ul>
                  <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="w-full text-lg py-6 btn-hover-effect">Выбрать</Button>
                </CardContent>
              </Card>

              <Card className="border-primary border-4 hover:shadow-2xl transition-all relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-base font-bold shadow-lg">
                    Выгодно!
                  </Badge>
                </div>
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-yellow-500"></div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl">Абонемент</CardTitle>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-primary">20 000₽</span>
                    <span className="text-muted-foreground text-lg">/месяц</span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">8 занятий · 2 раза в неделю</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>8 занятий по 45 минут</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>Все учебные материалы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <span>Экономия 800₽</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Star" className="text-secondary mt-1 fill-secondary" size={20} />
                      <span className="font-bold text-secondary">Разговорный клуб в подарок!</span>
                    </li>
                  </ul>
                  <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary btn-hover-effect">Купить абонемент</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="translation" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Услуги переводов</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Профессиональные переводы от опытных специалистов</p>
          </div>
          
          <div className="mb-12 sm:mb-16">
            <Card className="border-2 shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5 max-w-4xl mx-auto">
              <CardHeader>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Calculator" className="text-white" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl sm:text-2xl md:text-3xl">Калькулятор стоимости</CardTitle>
                    <CardDescription className="text-sm sm:text-base mt-1">Рассчитайте примерную стоимость перевода</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                  <div className="space-y-4 sm:space-y-5">
                    <div>
                      <label className="block text-sm font-semibold mb-3">Тип перевода</label>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          type="button"
                          variant={calculatorData.translationType === 'written' ? 'default' : 'outline'}
                          className={calculatorData.translationType === 'written' ? 'bg-gradient-to-r from-primary to-secondary btn-hover-effect' : 'btn-hover-effect'}
                          onClick={() => setCalculatorData({...calculatorData, translationType: 'written', volume: 3})}
                        >
                          <Icon name="FileText" className="mr-2" size={18} />
                          Письменный
                        </Button>
                        <Button
                          type="button"
                          variant={calculatorData.translationType === 'oral' ? 'default' : 'outline'}
                          className={calculatorData.translationType === 'oral' ? 'bg-gradient-to-r from-primary to-secondary btn-hover-effect' : 'btn-hover-effect'}
                          onClick={() => setCalculatorData({...calculatorData, translationType: 'oral', volume: 4})}
                        >
                          <Icon name="Mic" className="mr-2" size={18} />
                          Устный
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-3">Язык</label>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          type="button"
                          variant={calculatorData.language === 'english' ? 'default' : 'outline'}
                          className={calculatorData.language === 'english' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white btn-hover-effect' : 'btn-hover-effect'}
                          onClick={() => setCalculatorData({...calculatorData, language: 'english'})}
                        >
                          🇬🇧 Английский
                        </Button>
                        <Button
                          type="button"
                          variant={calculatorData.language === 'chinese' ? 'default' : 'outline'}
                          className={calculatorData.language === 'chinese' ? 'bg-gradient-to-r from-red-500 to-yellow-500 text-white btn-hover-effect' : 'btn-hover-effect'}
                          onClick={() => setCalculatorData({...calculatorData, language: 'chinese'})}
                        >
                          🇨🇳 Китайский
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-3">
                        {calculatorData.translationType === 'written' ? 'Количество страниц' : 'Количество часов'}
                      </label>
                      <Input
                        type="number"
                        min={calculatorData.translationType === 'written' ? 3 : 4}
                        value={calculatorData.volume}
                        onChange={(e) => setCalculatorData({...calculatorData, volume: parseInt(e.target.value) || (calculatorData.translationType === 'written' ? 3 : 4)})}
                        className="h-12 text-lg"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Минимальный заказ: {calculatorData.translationType === 'written' ? '3 страницы' : '4 часа'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-white to-primary/5 rounded-xl p-6 sm:p-8 md:p-10 flex flex-col justify-center border-2 border-primary/30 shadow-lg">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-3">Стоимость</div>
                      {priceResult.min === priceResult.max ? (
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                          {priceResult.min.toLocaleString('ru-RU')}₽
                        </div>
                      ) : (
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3 leading-tight">
                          {priceResult.min.toLocaleString('ru-RU')}₽ - {priceResult.max.toLocaleString('ru-RU')}₽
                        </div>
                      )}
                      <div className="text-sm text-muted-foreground mb-6">
                        за {calculatorData.volume} {calculatorData.translationType === 'written' ? (calculatorData.volume === 1 ? 'страницу' : calculatorData.volume < 5 ? 'страницы' : 'страниц') : (calculatorData.volume === 1 ? 'час' : calculatorData.volume < 5 ? 'часа' : 'часов')}
                      </div>
                      <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-gradient-to-r from-primary to-secondary text-base btn-hover-effect" size="lg">
                        <Icon name="Send" className="mr-2" size={18} />
                        Заказать перевод
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-12">
            <Card className="hover:shadow-xl transition-all border-2">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="FileText" className="text-white" size={40} />
                </div>
                <CardTitle className="text-3xl mb-4">Письменный перевод</CardTitle>
                <CardDescription className="text-base">Минимальный заказ от 3 страниц</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🇬🇧</span>
                    <h4 className="text-xl font-bold">Английский язык</h4>
                  </div>
                  <div className="text-3xl font-bold text-primary">800₽ - 1200₽</div>
                  <div className="text-muted-foreground mt-1">за страницу</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Документы и контракты</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Технические тексты</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Маркетинговые материалы</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-red-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🇨🇳</span>
                    <h4 className="text-xl font-bold">Китайский язык</h4>
                  </div>
                  <div className="text-3xl font-bold text-primary">1000₽ - 1500₽</div>
                  <div className="text-muted-foreground mt-1">за страницу</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Деловая документация</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Сертификаты и дипломы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Коммерческие предложения</span>
                    </li>
                  </ul>
                </div>

                <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full text-lg py-6 btn-hover-effect" size="lg">Заказать перевод</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Mic" className="text-white" size={40} />
                </div>
                <CardTitle className="text-3xl mb-4">Устный перевод</CardTitle>
                <CardDescription className="text-base">Минимальный заказ от 4 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🇬🇧</span>
                    <h4 className="text-xl font-bold">Английский язык</h4>
                  </div>
                  <div className="text-3xl font-bold text-primary">2200₽</div>
                  <div className="text-muted-foreground mt-1">час работы</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Деловые переговоры</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Конференции и семинары</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Сопровождение делегаций</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-red-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🇨🇳</span>
                    <h4 className="text-xl font-bold">Китайский язык</h4>
                  </div>
                  <div className="text-3xl font-bold text-primary">3800₽</div>
                  <div className="text-muted-foreground mt-1">час работы</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Бизнес-встречи</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Выставки и презентации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Переговоры с партнёрами</span>
                    </li>
                  </ul>
                </div>

                <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full text-lg py-6 btn-hover-effect" size="lg">Заказать перевод</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="masterclasses" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Мастер-классы</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Уникальные тематические занятия от наших преподавателей</p>
          </div>
          
          <Card className="border-2 hover:shadow-xl transition-all bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Lightbulb" className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3">Специальные программы</CardTitle>
                  <CardDescription className="text-base sm:text-lg">
                    Наши преподаватели регулярно проводят тематические мастер-классы по актуальным темам
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl h-full">
                  <Icon name="BookOpen" className="text-primary flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Деловая коммуникация</h4>
                    <p className="text-muted-foreground text-sm">Презентации, переговоры, email-этикет</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl h-full">
                  <Icon name="Globe" className="text-primary flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Культура и традиции</h4>
                    <p className="text-muted-foreground text-sm">Погружение в менталитет и обычаи</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl h-full">
                  <Icon name="Briefcase" className="text-primary flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Бизнес-кейсы</h4>
                    <p className="text-muted-foreground text-sm">Разбор реальных ситуаций из практики</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl h-full">
                  <Icon name="MessageSquare" className="text-primary flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Разговорные практикумы</h4>
                    <p className="text-muted-foreground text-sm">Интенсивная разговорная практика</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl text-center">
                <p className="text-base sm:text-lg mb-4 sm:mb-6">
                  Программы мастер-классов составляются индивидуально и отправляются по вашей заявке
                </p>
                <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 bg-gradient-to-r from-primary to-secondary btn-hover-effect">
                  <Icon name="Mail" className="mr-2" size={20} />
                  Запросить программу
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Свяжитесь с нами</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Мы ответим на все ваши вопросы</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-base sm:text-lg mb-1">Телефон</div>
                    <div className="text-muted-foreground text-sm sm:text-base md:text-lg">+7 (909) 903-03-19</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-base sm:text-lg mb-1">Email</div>
                    <div className="text-muted-foreground text-sm sm:text-base md:text-lg break-all">hellochina777@yandex.ru</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-base sm:text-lg mb-1">Время работы</div>
                    <div className="text-muted-foreground text-sm sm:text-base md:text-lg">Пн-Вс: 09:00 - 21:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="contact-form" className="border-2">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Отправить заявку</CardTitle>
                <CardDescription className="text-sm sm:text-base">Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-11 sm:h-12 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-11 sm:h-12 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-11 sm:h-12 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="text-sm sm:text-base"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full text-base sm:text-lg py-5 sm:py-6 bg-gradient-to-r from-primary to-secondary btn-hover-effect" size="lg">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-6 sm:py-8 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6">
            <div>
              <div className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DIALECTA
              </div>
              <p className="text-background/70 text-sm">
                Онлайн школа иностранных языков и профессиональных переводов
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-base mb-3">Обучение</h3>
              <ul className="space-y-2 text-background/70 text-sm">
                <li><a href="#courses" className="hover:text-background transition-colors">Английский язык</a></li>
                <li><a href="#courses" className="hover:text-background transition-colors">Китайский язык</a></li>
                <li><a href="#pricing" className="hover:text-background transition-colors">Тарифы</a></li>
                <li><a href="#masterclasses" className="hover:text-background transition-colors">Мастер-классы</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-base mb-3">Услуги</h3>
              <ul className="space-y-2 text-background/70 text-sm">
                <li><a href="#translation" className="hover:text-background transition-colors">Письменный перевод</a></li>
                <li><a href="#translation" className="hover:text-background transition-colors">Устный перевод</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-base mb-3">Контакты</h3>
              <ul className="space-y-2 text-background/70 text-sm">
                <li>+7 (909) 903-03-19</li>
                <li>hellochina777@yandex.ru</li>
                <li>@HelloDialecta</li>
                <li>Пн-Вс: 09:00 - 21:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-4 text-center text-background/70">
            <p className="text-sm">© 2024 DIALECTA. Все права защищены.</p>
          </div>
        </div>
      </footer>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Прокрутить наверх"
        >
          <Icon name="ArrowUp" size={20} />
        </button>
      )}
    </div>
  );
}