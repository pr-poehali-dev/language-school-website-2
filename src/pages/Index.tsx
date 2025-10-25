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
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">LinguaSpace</div>
          <div className="hidden md:flex gap-8">
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">Курсы</a>
            <a href="#translation" className="text-foreground hover:text-primary transition-colors">Переводы</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#teachers" className="text-foreground hover:text-primary transition-colors">Преподаватели</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Записаться</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Откройте мир <span className="text-primary">языков</span> вместе с нами
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Профессиональное обучение китайскому и английскому языкам. Качественные письменные и устные переводы.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle>500+ студентов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Доверили нам своё обучение и достигли целей</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-secondary" size={24} />
                </div>
                <CardTitle>10+ лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Преподавания и профессиональных переводов</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Globe" className="text-primary" size={24} />
                </div>
                <CardTitle>Онлайн формат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Учитесь из любой точки мира в удобное время</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши курсы</h2>
            <p className="text-xl text-muted-foreground">Выберите язык для изучения</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center">
                <span className="text-8xl">🇨🇳</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Китайский язык</CardTitle>
                <CardDescription>От начального до продвинутого уровня</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Изучение иероглифов и пиньинь</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Разговорная практика с носителями</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Подготовка к HSK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Китайская культура и традиции</span>
                  </li>
                </ul>
                <Button className="w-full">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center">
                <span className="text-8xl">🇬🇧</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Английский язык</CardTitle>
                <CardDescription>Для работы, учёбы и путешествий</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Общий и бизнес английский</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Подготовка к IELTS, TOEFL</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Разговорные клубы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Индивидуальные программы</span>
                  </li>
                </ul>
                <Button className="w-full">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="translation" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Услуги переводов</h2>
            <p className="text-xl text-muted-foreground">Профессиональные переводы любой сложности</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="FileText" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Письменный перевод</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Документы, контракты, технические тексты, маркетинговые материалы
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Сертифицированный</Badge>
                  <Badge variant="secondary">Нотариальный</Badge>
                  <Badge variant="secondary">Технический</Badge>
                </div>
                <Button variant="outline" className="w-full">Заказать</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Mic" className="text-secondary" size={28} />
                </div>
                <CardTitle className="text-2xl">Устный перевод</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Переговоры, конференции, деловые встречи, сопровождение
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Последовательный</Badge>
                  <Badge variant="secondary">Синхронный</Badge>
                  <Badge variant="secondary">Онлайн</Badge>
                </div>
                <Button variant="outline" className="w-full">Заказать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Прозрачные цены без скрытых платежей</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Пробный урок</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">500₽</span>
                  <span className="text-muted-foreground">/занятие</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>45 минут</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Оценка уровня</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Индивидуальный план</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="border-primary border-2 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-secondary">Популярный</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">1200₽</span>
                  <span className="text-muted-foreground">/занятие</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>60 минут</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Все материалы включены</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Домашние задания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Поддержка 24/7</span>
                  </li>
                </ul>
                <Button className="w-full">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Интенсив</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">9600₽</span>
                  <span className="text-muted-foreground">/10 занятий</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>60 минут × 10</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Скидка 20%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Личный куратор</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Сертификат</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши преподаватели</h2>
            <p className="text-xl text-muted-foreground">Опытные профессионалы с международными сертификатами</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/2c540b2e-1e79-4cae-9e17-13ff189e3191/files/94e4456e-44d0-4f97-833b-406fe618384b.jpg" 
                    alt="李明 (Li Ming)"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>李明 (Li Ming)</CardTitle>
                <CardDescription>Преподаватель китайского языка</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  8 лет опыта, носитель языка. Магистр филологии Пекинского университета. Специализация: HSK, деловой китайский.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>HSK 1-6</Badge>
                  <Badge>Деловой</Badge>
                  <Badge>Разговорный</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/2c540b2e-1e79-4cae-9e17-13ff189e3191/files/5f6dde91-8a38-4a95-94a6-bd8792ddc244.jpg" 
                    alt="Michael Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Michael Johnson</CardTitle>
                <CardDescription>Преподаватель английского языка</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  12 лет опыта, носитель языка из США. CELTA, DELTA. Подготовка к IELTS, TOEFL. Бизнес-английский.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>IELTS</Badge>
                  <Badge>TOEFL</Badge>
                  <Badge>Business</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/2c540b2e-1e79-4cae-9e17-13ff189e3191/files/12f6b567-c9e6-4cdf-aa0a-b3c7a7a21794.jpg" 
                    alt="Анна Смирнова"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Анна Смирнова</CardTitle>
                <CardDescription>Преподаватель английского языка</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  10 лет опыта, кандидат филологических наук. Специализация: академический английский, переводоведение.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Academic</Badge>
                  <Badge>Translation</Badge>
                  <Badge>Writing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы студентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят наши ученики</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl">👨‍💼</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий К.</CardTitle>
                    <CardDescription>Бизнесмен</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Изучал китайский для работы с партнёрами. За 6 месяцев с нуля дошёл до уверенного общения на деловые темы. Преподаватель Li Ming — профессионал высочайшего уровня!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl">👩‍🎓</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена М.</CardTitle>
                    <CardDescription>Студентка</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Готовилась к IELTS с Michael. Сдала на 7.5! Занятия были интересными, много практики. Все материалы предоставляются. Очень довольна результатом."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl">👨‍💻</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Алексей В.</CardTitle>
                    <CardDescription>IT-специалист</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Нужен был технический перевод документации. Выполнили быстро и качественно. Переводчики отлично разбираются в IT-терминологии. Рекомендую!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Ответим на все ваши вопросы</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">info@linguaspace.ru</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Офис</div>
                    <div className="text-muted-foreground">Москва, ул. Тверская, 10</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Время работы</div>
                    <div className="text-muted-foreground">Пн-Вс: 09:00 - 21:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">LinguaSpace</div>
              <p className="text-background/70">Онлайн школа иностранных языков и переводов</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Обучение</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#courses" className="hover:text-background transition-colors">Китайский язык</a></li>
                <li><a href="#courses" className="hover:text-background transition-colors">Английский язык</a></li>
                <li><a href="#pricing" className="hover:text-background transition-colors">Цены</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#translation" className="hover:text-background transition-colors">Письменный перевод</a></li>
                <li><a href="#translation" className="hover:text-background transition-colors">Устный перевод</a></li>
                <li><a href="#teachers" className="hover:text-background transition-colors">Преподаватели</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-background/70">
                <li>+7 (999) 123-45-67</li>
                <li>info@linguaspace.ru</li>
                <li>Москва, ул. Тверская, 10</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>© 2024 LinguaSpace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
