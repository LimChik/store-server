
import CheckoutList from '../../items/CheckoutList/CheckoutList'
import cl from './BasketCheckout.module.css'
const BasketCheckout = () => {
  
   
 
  
  
  return (
    <div className={cl.basketCheckout__container}>
        <div className={cl.basketCheckout__addressDelivery}>Адрес доставки</div>
      <div className={cl.basketCheckout__body}>
         
           <div className={`${cl.basketCheckout__body__placing} ${cl.placing}`}>
            <h2 className={cl.placing__title}>Оформление заказа</h2>
            <div className={cl.placing__email}>
               <span className={cl.placing__email__text}>Email*</span>
               <input type="text" className={cl.placing__email__input} />
            </div>
            <div className={cl.placing__name}>
               <span className={cl.placing__name__text}>Фио</span>
               <input type="text" className={cl.placing__name__input} />
            </div>
            <div className={cl.placing__birthday}>
               <span className={cl.placing__birthday__text}>День рождения</span>
               <input type="text" className={cl.placing__birthday__input} />
            </div>
            <div className={cl.placing__number}>
               <span className={cl.placing__number__text}>Номер телефона</span>
               <input type="text" className={cl.placing__number__input} />
            </div>
              <div className={cl.placing__location}>
                 <div className={cl.placing__location__country}>
                    <span className={cl.placing__location__country__text}>Страна</span>
                    <input type="text" className={cl.placing__location__country__input} />
                 </div>
                 <div className={cl.placing__location__city}>
                    <span className={cl.placing__location__city__text}>Город</span>
                    <input type="text" className={cl.placing__location__city__input} />
                 </div>
              </div>
              <div className={cl.placing__street}>
                 <span className={cl.placing__street__text}>Улица</span>
                 <input type="text" className={cl.placing__street__input} />
              </div>
              <div className={cl.placing__building}>
                 <div className={cl.placing__building__home}>
                    <span className={cl.placing__building__home__text}>Дом</span>
                    <input type="text" className={cl.placing__building__home__input} />
                 </div>
                 <div className={cl.placing__building__apartment}>
                    <span className={cl.placing__building__apartment__text}>Квартира</span>
                    <input type="text" className={cl.placing__building__apartment__input} />
                 </div>
                 <div className={cl.placing__building__index}>
                    <span className={cl.placing__building__index__text}>Индекс</span>
                    <input type="text" className={cl.placing__building__index__input} />
                 </div>

              </div>
              <div className={cl.placing__maps}></div>
              <div className={cl.placing__comment}>
                 <textarea className={cl.placing__comment__text} name="" id="" cols={30} rows={10}></textarea>
              </div>
              <button className={cl.button}>Выбрать способ доставки</button>
           </div>
           <div className={`${cl.basketCheckout__body__cards} ${cl.cards}`}>
            <CheckoutList/>
            <div className={cl.cards__paymentSum}>
               Итого к оплате:
            </div>
           </div>
           
      </div>
    </div>
  )
}

export default BasketCheckout