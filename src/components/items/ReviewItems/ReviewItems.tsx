import {FC,useEffect,useState} from 'react'
import { IReviewsTodo } from '../../../type/review';
import cl from './ReviewItems.module.css';
interface IReviewsItemsProps{
   reviews:IReviewsTodo;
   brand:string;
   
   
}
const ReviewItems:FC<IReviewsItemsProps> = ({reviews,brand}) => {
  
   
   const [highlightedStars, setHighlightedStars] = useState(0);

   useEffect(() => {
      setHighlightedStars(reviews.rating);
   }, [reviews.rating]);

   const renderRatingStars = () => {
      const stars = [];
      for (let i = 0; i <= 4; i++) {
         const starClassName = i <= highlightedStars ? `${cl.reviews__userInfo__rating__star} ${cl.light}` : cl.reviews__userInfo__rating__star;
         stars.push(<div key={i} className={starClassName}></div>);
      }
      return stars;
   };
  
  return (
    <div className={cl.reviews}>
      <div className={cl.reviews__userInfo}>
         <div className={cl.reviews__userInfo__name}>{reviews.name}</div>
         <div className={cl.reviews__userInfo__rating}>
              {renderRatingStars()}
              
         </div>
         <div className={cl.reviews__userInfo__date}>{reviews.city}</div>
         <div className={cl.reviews__userInfo__city}>{reviews.date}</div>
      </div>
      <div className={cl.reviews__userMessage}>
         <div className={cl.reviews__userMessage__brandName}>{brand}</div>
         <div className={cl.reviews__userMessage__message}>{reviews.message}</div>
      </div>
    </div>
  )
}

export default ReviewItems;