import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary/40 via-primary/30 to-secondary/40 text-foreground py-6 sm:py-8 md:py-10 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">DIALECTA</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Онлайн школа иностранных языков для тех, кто стремится к совершенству
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-2">Навигация</h3>
            <ul className="space-y-1 sm:space-y-1.5 text-muted-foreground text-xs sm:text-sm">
              <li><a href="#courses" className="hover:text-foreground transition-colors inline-block py-1 min-h-[32px] flex items-center">Курсы</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors inline-block py-1 min-h-[32px] flex items-center">Цены</a></li>
              <li><a href="#masterclasses" className="hover:text-foreground transition-colors inline-block py-1 min-h-[32px] flex items-center">Мастер-классы</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors inline-block py-1 min-h-[32px] flex items-center">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-2">Услуги</h3>
            <ul className="space-y-1 sm:space-y-1.5 text-muted-foreground text-xs sm:text-sm">
              <li><a href="#translation" className="hover:text-foreground transition-colors inline-block py-1 min-h-[32px] flex items-center">Письменный перевод</a></li>
              <li><a href="#translation" className="hover:text-foreground transition-colors inline-block py-1 min-h-[32px] flex items-center">Устный перевод</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-2">Контакты</h3>
            <ul className="space-y-1 sm:space-y-1.5 text-muted-foreground text-xs sm:text-sm">
              <li className="py-1">+7 (909) 903-03-19</li>
              <li className="py-1">@HelloDialecta</li>
              <li className="py-1">Пн-Вс: 09:00 - 21:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-3 sm:pt-4 text-center">
          <a 
            href="https://t.me/+ivviZnqIlXs1Mzky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 mb-3 sm:mb-4 btn-hover-effect text-xs sm:text-sm font-semibold min-h-[44px]"
          >
            <Icon name="Send" size={16} />
            Наш Telegram-канал
          </a>
          <p className="text-muted-foreground text-xs">© 2024 DIALECTA. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}