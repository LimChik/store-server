import { useForm,SubmitHandler } from 'react-hook-form';
import { useState } from 'react'
import CheckoutList from '../../items/CheckoutList/CheckoutList'
import cl from './BasketCheckout.module.css';
import { IMessageForEmail } from '../../../type/messageEmail';
import { IItem } from '../../../type/Item';
import { useAppSelector } from '../../../hooks';
interface IPostEmailMessage extends IMessageForEmail{
   basketGood:IItem[];

}
interface FormValues extends IMessageForEmail{
   
}
const BasketCheckout = () => {


   const [postEmailMessage, setPostEmailMessage] = useState<IPostEmailMessage[]>([])
   const basketGood = useAppSelector(state => state.singlePage.goodItem)
  const {
   register,
   
   handleSubmit,
   reset,
  
  }=useForm<FormValues>({
   mode:'onBlur'
  })
   const onSubmit:SubmitHandler<FormValues>=(data)=>{
      setPostEmailMessage([...postEmailMessage, {

         name: data.name.toString(),
         email: data.email.toString(),
         birthday: data.birthday.toString(),
         phoneNumber: data.phoneNumber.toString(),
         country: data.country.toString(),
         city: data.city.toString(),
         street: data.street.toString(),
         home: data.home.toString(),
         appartament: data.appartament.toString(),
         index: data.index.toString(),
         comment: data.comment.toString(),
         basketGood: basketGood

      }])

     
      reset()
   }

  return (
    <div className={cl.basketCheckout__container}>
        <div className={cl.basketCheckout__addressDelivery}>Адрес доставки</div>
      <div className={cl.basketCheckout__body}>
         
           <form onSubmit={handleSubmit(onSubmit)} className={`${cl.basketCheckout__body__placing} ${cl.placing}`}>
            <h2 className={cl.placing__title}>Оформление заказа</h2>
            <div className={cl.placing__email}>
               <span className={cl.placing__email__text}>Email*</span>
               <input {...register('email',{required:true})}   className={cl.placing__email__input} />
            </div>
            <div className={cl.placing__name}>
               <span className={cl.placing__name__text}>Фио</span>
                 <input {...register('name', { required: true })} className={cl.placing__name__input} />
            </div>
            <div className={cl.placing__birthday}>
               <span className={cl.placing__birthday__text}>День рождения</span>
                 <input {...register('birthday', { required: true })}  placeholder='дд.мм.гггг' type="date" className={cl.placing__birthday__input} />
            </div>
            <div className={cl.placing__number}>
               <span className={cl.placing__number__text}>Номер телефона</span>
                 <input {...register('phoneNumber', { required: true })}    className={cl.placing__number__input} />
            </div>
              <div className={cl.placing__location}>
                 <div className={cl.placing__location__country}>
                    <span className={cl.placing__location__country__text}>Страна</span>
                    <input {...register('country', { required: true })}  className={cl.placing__location__country__input} />
                 </div>
                 <div className={cl.placing__location__city}>
                    <span className={cl.placing__location__city__text}>Город</span>
                    <input {...register('city', { required: true })}  className={cl.placing__location__city__input} />
                 </div>
              </div>
              <div className={cl.placing__street}>
                 <span className={cl.placing__street__text}>Улица</span>
                 <input {...register('street', { required: true })}  className={cl.placing__street__input} />
              </div>
              <div className={cl.placing__building}>
                 <div className={cl.placing__building__home}>
                    <span className={cl.placing__building__home__text}>Дом</span>
                    <input {...register('home', { required: true })}  className={cl.placing__building__home__input} />
                 </div>
                 <div className={cl.placing__building__apartment}>
                    <span className={cl.placing__building__apartment__text}>Квартира</span>
                    <input {...register('appartament', { required: true })}  className={cl.placing__building__apartment__input} />
                 </div>
                 <div className={cl.placing__building__index}>
                    <span className={cl.placing__building__index__text}>Индекс</span>
                    <input  {...register('index', { required: true })} className={cl.placing__building__index__input} />
                 </div>

              </div>
              <div className={cl.placing__maps}></div>
              <div className={cl.placing__comment}>
                 <textarea {...register('comment', { required: true })} className={cl.placing__comment__text}  cols={30} rows={10}></textarea>
              </div>

              


              <input type='submit' className={cl.button}/>
         </form>
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