import{FC} from 'react';
import ReviewItems from '../ReviewItems/ReviewItems';
import { IReviewsTodo } from '../../../type/review';
import cl from './ReviewList.module.css'
interface IReviewListProps {
   reviews:IReviewsTodo[];
   brand:string;
   
}

const ReiviewList:FC<IReviewListProps> = ({reviews,brand}) => {
  

  return (
    <div className={cl.reviews__list}>
      {reviews.map((elem)=>(
         <ReviewItems brand={brand} key={elem.id} reviews={elem}/>
      ))}
    </div>
  )
}

export default ReiviewList