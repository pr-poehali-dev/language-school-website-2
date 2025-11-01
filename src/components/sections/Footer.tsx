import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10">
          <div>
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">DIALECTA</h3>
            <p className="text-background/90 text-xs sm:text-sm md:text-base leading-relaxed">
              Онлайн школа иностранных языков для тех, кто стремится к совершенству
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-3">Навигация</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-background/70 text-xs sm:text-sm">
              <li><a href="#courses" className="hover:text-background transition-colors inline-block py-1 min-h-[32px] flex items-center">Курсы</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors inline-block py-1 min-h-[32px] flex items-center">Цены</a></li>
              <li><a href="#masterclasses" className="hover:text-background transition-colors inline-block py-1 min-h-[32px] flex items-center">Мастер-классы</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors inline-block py-1 min-h-[32px] flex items-center">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-3">Услуги</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-background/70 text-xs sm:text-sm">
              <li><a href="#translation" className="hover:text-background transition-colors inline-block py-1 min-h-[32px] flex items-center">Письменный перевод</a></li>
              <li><a href="#translation" className="hover:text-background transition-colors inline-block py-1 min-h-[32px] flex items-center">Устный перевод</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-3">Контакты</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-background/70 text-xs sm:text-sm">
              <li className="py-1">+7 (909) 903-03-19</li>
              <li className="py-1">@HelloDialecta</li>
              <li className="py-1">Пн-Вс: 09:00 - 21:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-4 sm:pt-6 text-center">
          <a 
            href="https://t.me/+ivviZnqIlXs1Mzky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 mb-4 sm:mb-6 btn-hover-effect text-sm sm:text-base font-semibold min-h-[44px]"
          >
            <Icon name="Send" size={18} />
            Наш Telegram-канал
          </a>
          <p className="text-background/70 text-xs sm:text-sm">© 2024 DIALECTA. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}