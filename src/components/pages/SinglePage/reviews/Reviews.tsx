import {FC, useState} from 'react'
import { IReviewsTodo } from '../../../../type/review';
import ReiviewList from '../../../items/ReviewList/ReiviewList';
import NewReviewForm from './reviews-form/NewReviewForm'
import cl from './Reviews.module.css';

interface IReviewsProps{
   brand:string;
}

const Reviews:FC<IReviewsProps> = ({brand}) => {
   const [reviews,setReviews]=useState<IReviewsTodo[]>([]);
   const [formReviewsActive,setFormReviewsActive]=useState(false)
   

   const formActive=()=>{
      if(formReviewsActive){
         setFormReviewsActive(false)
      }else{
         setFormReviewsActive(true)
      }
   }
  return (
    <div className={cl.review}>
      <div className={cl.review__name}>Отзывы о товаре <hr /></div>
      <div className={cl.review__banner}>
           <div className={cl.review__banner__text1}>Оставляйте отзывы и получайте 25% скидку к следующему заказу</div>
         <div className={cl.review__banner__text2}>
            Оцени уровень сервиса <br />и качества продукции
         </div>
         <div className={cl.review__banner__button}>
            <button onClick={formActive} className={cl.button}>Написать отзыв</button>
         </div>
         <div className={cl.review__banner__text3}>
              *Предложение не суммируется с другими акциями и скидками, срок действия <br /> не ограничен
         </div>
      </div>
      
        {formReviewsActive ? <NewReviewForm brand={brand} reviews={reviews} setReviews={setReviews} /> : ''}
         <ReiviewList brand={brand}  reviews={reviews}/>
    </div>
  )
}

export default Reviews