import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">
          <div>
            <h3 className="font-bold text-xl sm:text-2xl mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">DIALECTA</h3>
            <p className="text-background/90 text-sm sm:text-base leading-relaxed">
              Онлайн школа иностранных языков для тех, кто стремится к совершенству
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-base mb-3">Навигация</h3>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#courses" className="hover:text-background transition-colors">Курсы</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors">Цены</a></li>
              <li><a href="#masterclasses" className="hover:text-background transition-colors">Мастер-классы</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Контакты</a></li>
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
              <li>@HelloDialecta</li>
              <li>Пн-Вс: 09:00 - 21:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-6 text-center">
          <a 
            href="https://t.me/+ivviZnqIlXs1Mzky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 mb-6 btn-hover-effect text-base font-semibold"
          >
            <Icon name="Send" size={22} />
            Наш Telegram-канал
          </a>
          <p className="text-background/70 text-sm">© 2024 DIALECTA. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
