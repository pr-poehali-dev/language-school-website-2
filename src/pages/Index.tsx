import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            DIALECTA
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#courses" className="text-foreground hover:text-primary transition-colors font-medium">Курсы</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">Цены</a>
            <a href="#translation" className="text-foreground hover:text-primary transition-colors font-medium">Переводы</a>
            <a href="#masterclasses" className="text-foreground hover:text-primary transition-colors font-medium">Мастер-классы</a>
            <a href="#teachers" className="text-foreground hover:text-primary transition-colors font-medium">Преподаватели</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">Записаться</Button>
        </nav>
      </header>

      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto text-center max-w-5xl animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Изучайте языки <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              с удовольствием
            </span>
          </h1>
          <p className="text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            Онлайн школа иностранных языков DIALECTA — ваш путь к свободному владению китайским и английским языками
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-secondary">
              <Icon name="Sparkles" className="mr-2" size={22} />
              Первое занятие бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2">
              <Icon name="MessageCircle" className="mr-2" size={22} />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Опытные педагоги</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">Преподаватели с международными сертификатами и многолетним опытом</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Video" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Онлайн формат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">Занимайтесь где угодно в удобное для вас время</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Разговорный клуб</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">Бесплатный доступ при покупке абонемента</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="courses" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Наши курсы</h2>
            <p className="text-xl text-muted-foreground">Выберите направление для изучения</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2">
              <div className="h-56 bg-gradient-to-br from-blue-500 via-blue-600 to-red-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <span className="text-9xl relative z-10">🇬🇧</span>
              </div>
              <CardHeader>
                <CardTitle className="text-3xl">Английский язык</CardTitle>
                <CardDescription className="text-lg">Для работы, учёбы и путешествий</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg">Общий и бизнес-английский</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg">Подготовка к IELTS, TOEFL, Cambridge</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg">Разговорная практика с носителями</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg">Индивидуальная программа обучения</span>
                  </div>
                </div>
                <Button className="w-full text-lg py-6" size="lg">Записаться на пробный урок</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2">
              <div className="h-56 bg-gradient-to-br from-red-600 via-red-500 to-yellow-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <span className="text-9xl relative z-10">🇨🇳</span>
              </div>
              <CardHeader>
                <CardTitle className="text-3xl">Китайский язык</CardTitle>
                <CardDescription className="text-lg">От начального до продвинутого уровня</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg">Изучение иероглифов и пиньинь</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg">Подготовка к HSK всех уровней</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg">Деловой китайский для бизнеса</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg">Погружение в китайскую культуру</span>
                  </div>
                </div>
                <Button className="w-full text-lg py-6" size="lg">Записаться на пробный урок</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Тарифы на обучение</h2>
            <p className="text-xl text-muted-foreground">Прозрачные цены и выгодные абонементы</p>
          </div>
          
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-center">Английский язык</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all border-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
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
                  <Button variant="outline" className="w-full text-lg py-6">Записаться</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all border-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl">Разовое занятие</CardTitle>
                  <div className="mt-6">
                    <span className="text-5xl font-bold">2300₽</span>
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
                  <Button variant="outline" className="w-full text-lg py-6">Выбрать</Button>
                </CardContent>
              </Card>

              <Card className="border-primary border-4 hover:shadow-2xl transition-all relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-base font-bold shadow-lg">
                    Выгодно!
                  </Badge>
                </div>
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl">Абонемент</CardTitle>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-primary">16 000₽</span>
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
                      <span>Экономия 2400₽</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Star" className="text-secondary mt-1 fill-secondary" size={20} />
                      <span className="font-bold text-secondary">Разговорный клуб в подарок!</span>
                    </li>
                  </ul>
                  <Button className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary">Купить абонемент</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Китайский язык</h3>
            <div className="grid md:grid-cols-3 gap-8">
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
                  <Button variant="outline" className="w-full text-lg py-6">Записаться</Button>
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
                  <Button variant="outline" className="w-full text-lg py-6">Выбрать</Button>
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
                  <Button className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary">Купить абонемент</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="translation" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Услуги переводов</h2>
            <p className="text-xl text-muted-foreground">Профессиональные переводы от опытных специалистов</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
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

                <Button className="w-full text-lg py-6" size="lg">Заказать перевод</Button>
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

                <Button className="w-full text-lg py-6" size="lg">Заказать перевод</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="masterclasses" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Мастер-классы</h2>
            <p className="text-xl text-muted-foreground">Уникальные тематические занятия от наших преподавателей</p>
          </div>
          
          <Card className="border-2 hover:shadow-xl transition-all bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Lightbulb" className="text-white" size={48} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-3">Специальные программы</CardTitle>
                  <CardDescription className="text-lg">
                    Наши преподаватели регулярно проводят тематические мастер-классы по актуальным темам
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <Icon name="BookOpen" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Деловая коммуникация</h4>
                    <p className="text-muted-foreground text-sm">Презентации, переговоры, email-этикет</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <Icon name="Globe" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Культура и традиции</h4>
                    <p className="text-muted-foreground text-sm">Погружение в менталитет и обычаи</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <Icon name="Briefcase" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Бизнес-кейсы</h4>
                    <p className="text-muted-foreground text-sm">Разбор реальных ситуаций из практики</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <Icon name="MessageSquare" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Разговорные практикумы</h4>
                    <p className="text-muted-foreground text-sm">Интенсивная разговорная практика</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl text-center">
                <p className="text-lg mb-6">
                  Программы мастер-классов составляются индивидуально и отправляются по вашей заявке
                </p>
                <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-secondary">
                  <Icon name="Mail" className="mr-2" size={22} />
                  Запросить программу
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="teachers" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Наши преподаватели</h2>
            <p className="text-xl text-muted-foreground">Профессионалы с международным опытом</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all border-2">
              <CardHeader>
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img 
                    src="https://cdn.poehali.dev/projects/2c540b2e-1e79-4cae-9e17-13ff189e3191/files/94e4456e-44d0-4f97-833b-406fe618384b.jpg" 
                    alt="李明 (Li Ming)"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">李明 (Li Ming)</CardTitle>
                <CardDescription className="text-base">Преподаватель китайского языка</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Носитель языка, магистр филологии Пекинского университета. 8 лет опыта преподавания. Специализация: HSK, деловой китайский.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary">HSK 1-6</Badge>
                  <Badge className="bg-primary/10 text-primary">Деловой</Badge>
                  <Badge className="bg-primary/10 text-primary">Носитель</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2">
              <CardHeader>
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img 
                    src="https://cdn.poehali.dev/projects/2c540b2e-1e79-4cae-9e17-13ff189e3191/files/5f6dde91-8a38-4a95-94a6-bd8792ddc244.jpg" 
                    alt="Michael Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">Michael Johnson</CardTitle>
                <CardDescription className="text-base">Преподаватель английского языка</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Носитель языка из США. 12 лет опыта. Сертификаты CELTA, DELTA. Эксперт по подготовке к IELTS и TOEFL. Бизнес-английский.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary">IELTS</Badge>
                  <Badge className="bg-primary/10 text-primary">TOEFL</Badge>
                  <Badge className="bg-primary/10 text-primary">Business</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2">
              <CardHeader>
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img 
                    src="https://cdn.poehali.dev/projects/2c540b2e-1e79-4cae-9e17-13ff189e3191/files/12f6b567-c9e6-4cdf-aa0a-b3c7a7a21794.jpg" 
                    alt="Анна Смирнова"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">Анна Смирнова</CardTitle>
                <CardDescription className="text-base">Преподаватель английского языка</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Кандидат филологических наук. 10 лет опыта. Специализация: академический английский, подготовка к экзаменам, переводоведение.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary">Academic</Badge>
                  <Badge className="bg-primary/10 text-primary">Cambridge</Badge>
                  <Badge className="bg-primary/10 text-primary">Translation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Мы ответим на все ваши вопросы</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Телефон</div>
                    <div className="text-muted-foreground text-lg">+7 (999) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Email</div>
                    <div className="text-muted-foreground text-lg">info@dialecta.school</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Telegram</div>
                    <div className="text-muted-foreground text-lg">@dialecta_school</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Время работы</div>
                    <div className="text-muted-foreground text-lg">Пн-Вс: 09:00 - 21:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Отправить заявку</CardTitle>
                <CardDescription className="text-base">Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12 text-base"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12 text-base"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12 text-base"
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="text-base"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DIALECTA
              </div>
              <p className="text-background/70 text-lg">
                Онлайн школа иностранных языков и профессиональных переводов
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">Обучение</h3>
              <ul className="space-y-3 text-background/70">
                <li><a href="#courses" className="hover:text-background transition-colors">Английский язык</a></li>
                <li><a href="#courses" className="hover:text-background transition-colors">Китайский язык</a></li>
                <li><a href="#pricing" className="hover:text-background transition-colors">Тарифы</a></li>
                <li><a href="#masterclasses" className="hover:text-background transition-colors">Мастер-классы</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">Услуги</h3>
              <ul className="space-y-3 text-background/70">
                <li><a href="#translation" className="hover:text-background transition-colors">Письменный перевод</a></li>
                <li><a href="#translation" className="hover:text-background transition-colors">Устный перевод</a></li>
                <li><a href="#teachers" className="hover:text-background transition-colors">Преподаватели</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">Контакты</h3>
              <ul className="space-y-3 text-background/70">
                <li>+7 (999) 123-45-67</li>
                <li>info@dialecta.school</li>
                <li>@dialecta_school</li>
                <li>Пн-Вс: 09:00 - 21:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p className="text-lg">© 2024 DIALECTA. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
