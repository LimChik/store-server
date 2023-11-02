
import './FooterItem.css'
const FooterItem = () => {
  return (
     <div className='footer'>
        <div className='footer__container'>
           <div className="footer__body">
              <div className="foooter__logo"><img src='https://outmaxshop.ru/images/logo_dark.png' /></div>
              <div className="footer__product product">
                 <div className="product__rules">
                    <div className='product__rules__delivery'>Доставка</div>
                    <div className="product__rules__guarantees">Гарантии</div>
                    <div className="product__rules__contacts">Контакты</div>
                    <div className="product__rules__agreements">Соглашения</div>
                 </div>
                 <div className="product__rules__dropBuy">
                    <button>Отповые закупки</button>
                    <button>Дропшиппинг</button>
                 </div>
              </div>
              <div className="footer__payments payments">
                 <div className="payments__delivery">Расчет стоимости доставки</div>
                 <div className="payments__reviews">Отзывы покупателей</div>
                 <div className="payments__exchangeReturn">Обмен и возврат</div>
                 <div className="payments__payment">Оплата</div>
                 <div className="payments__news">Новости</div>
                 <div className="payments__faq">Часто задаваемые <br /> вопросы(FAQ)</div>
              </div>

              <div className="footer__subscribe subscribe">
                 <div className="subscribe__text">Рассылка</div>
                 <div className="subscribe__button-input">
                    <input type="text" className="subscribe__email" placeholder='Введите ваш email' />
                    <button className="subscribe__button">Подписаться</button>
                 </div>

                 <span>Политика конфиненциальности </span>
              </div>
           </div>
        </div>
     </div>
  )
}

export default FooterItem