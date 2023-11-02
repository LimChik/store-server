
import React,{FC,useState} from 'react'
import { IReviewsTodo } from '../../../../../type/review';

import cl from './NewReviewForm.module.css';
interface INewReviewFormProps{
   reviews: IReviewsTodo[];
   setReviews: React.Dispatch<React.SetStateAction<IReviewsTodo[]>>;
   brand:string;
}
const NewReviewForm:FC<INewReviewFormProps> = ({reviews,setReviews,brand}) => {
   const [name,setName]=useState('');
   const [vkId,setVkId]=useState('');
   const [email,setEmail]=useState('');
   const [city,setCity]=useState('');
   const[message,setMessage]=useState('');
   const [ratingStar,setRatingStar]=useState(0)
   

   
   const handleNameInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setName(e.target.value)
   }
   const handleVkIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setVkId(e.target.value)
   }
   const handleEmailInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setEmail(e.target.value)
   }
   const handleCityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value)
   }
   const handleMessageInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value)
   }
   const addReviews=(e:React.MouseEvent)=>{
      
         setReviews([...reviews,{
            id:Date.now(),
            name:name,
            vkId:vkId,
            email:email,
            city:city,
            message:message,
            date:'12.10.2022',
            brand:brand,
            rating:ratingStar
         }])
         setName('');
         setVkId('');
         setMessage('');
         setCity('');
         setEmail('');
        setRatingStar(0);
      const arrStar = document.querySelectorAll(`.${cl.rating__star}`);
      arrStar.forEach((elem) => {
         elem.classList.remove(cl.light)
      })
      
         e.preventDefault()
      
   }
   function handleStarRating(e:React.MouseEvent){
      const target=e.target as HTMLElement;
      const getTargetValue = Number(target.getAttribute('data-value'))
      
      const arrStar=document.querySelectorAll(`.${cl.rating__star}`) ;
      if(target.classList.contains(cl.rating__star)){
         arrStar.forEach((elem)=>{
            elem.classList.remove(cl.light)
         })
         setRatingStar(getTargetValue)
      }
      for (let i = 0; i <= getTargetValue;i++ ){
         arrStar[i].classList.add(cl.light)
      }

   }
  
  return (
     <form className={`${cl.reviews__form}` + ` form`} >
        <div className={cl.form__text}>Написать отзыв</div>
      <div className={cl.form__body}>
         <div className={`${cl.form__body__personInfo}`+ ` personInfo`}>
              
            <div className={cl.personInfo__name}>
               <span>Имя*</span>
               <input onChange={handleNameInput} value={name} type="text" className={cl.personInfo__name__input} />
            </div>
              <div className={cl.personInfo__profileVK}>
                 <span>Ссылка на ваш профиль Вконтакте(необязательно)</span>
                 <input onChange={handleVkIdInput} value={vkId} type="text" className={cl.personInfo__profileVK__input} />
              </div>
              <div  className={cl.personInfo__email}>
                 <span>Email(на который совершался заказ)*</span>
                 <input onChange={handleEmailInput} value={email} type="text" className={cl.personInfo__email__input} />
              </div>
              <div className={cl.personInfo__city}>
                 <span>Город*</span>
                 <input onChange={handleCityInput} value={city} type="text" className={cl.personInfo__city__input} />
              </div>
         </div>
         <div className={`${cl.form__body__rating}`+ ` rating`}>
            <div className={cl.rating__name}>Рейтинг</div>
            <div className={cl.rating__stars}>
               <span>Плохо</span> 
               
                    
                 <div className={cl.rating__stars__container} onClick={handleStarRating}>
                    <div className={cl.rating__star} data-value={0}></div>
                    <div className={cl.rating__star} data-value={1}> </div>
                    <div className={cl.rating__star} data-value={2}></div>
                    <div className={cl.rating__star} data-value={3}></div>
                    <div className={cl.rating__star} data-value={4}></div>
               </div>
                 
               <span>Отличнно</span>
            </div>
            <div className={cl.rating__brand}>
               <span>Название товара*</span>
               <input type="text" className={cl.rating__brand__input} value={brand.toUpperCase()} readOnly={true} />
            </div>
              <div className={cl.rating__message}>
                 <span>Ваше сообщение*</span>
                 <textarea value={message} onChange={handleMessageInput}  cols={30} rows={9} className={cl.rating__message__input}></textarea>
              </div>

              <button onClick={addReviews}>Добавить отзыв</button>
         </div>
      </div>
    </form>
  )
}

export default NewReviewForm