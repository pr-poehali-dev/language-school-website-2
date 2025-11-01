import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Контакты</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary" size={28} />
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Icon name="Phone" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-medium text-base sm:text-lg mb-1">Телефон</div>
                    <a href="tel:+79099030319" className="text-lg sm:text-xl text-primary hover:underline">+7 (909) 903-03-19</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <Icon name="Clock" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-medium text-base sm:text-lg mb-1">Время работы</div>
                    <div className="text-base sm:text-lg text-muted-foreground">Пн-Вс: 09:00 - 21:00</div>
                  </div>
                </div>
                
                <div className="pt-4 sm:pt-6 border-t">
                  <div className="font-medium text-base sm:text-lg mb-4">Мы в социальных сетях</div>
                  <a 
                    href="https://t.me/+ivviZnqIlXs1Mzky" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 text-base sm:text-lg font-semibold"
                  >
                    <Icon name="Send" size={20} />
                    Наш Telegram-канал
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Почему выбирают нас?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Первое занятие бесплатно</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Индивидуальный подход</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Гибкое расписание</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-base sm:text-lg">Современные методики</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-2 shadow-lg" id="contact-form">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl">Оставьте заявку</CardTitle>
              <p className="text-base sm:text-lg text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2">Ваше имя</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="text-base sm:text-lg py-5 sm:py-6"
                  />
                </div>
                
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2">Телефон</label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    className="text-base sm:text-lg py-5 sm:py-6"
                  />
                </div>
                
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2">Email (необязательно)</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@email.com"
                    className="text-base sm:text-lg py-5 sm:py-6"
                  />
                </div>
                
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2">Сообщение (необязательно)</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите, что вас интересует..."
                    rows={4}
                    className="text-base sm:text-lg resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-base sm:text-lg py-5 sm:py-6 btn-hover-effect">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
