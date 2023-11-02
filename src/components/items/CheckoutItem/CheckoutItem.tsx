import {FC } from 'react'

import { useAppDispatch } from '../../../hooks';
import { addPriceBasket,reducePriceBasket ,deleteGoodBasket, addCountBasketItem, reduceCountBasketItem} from '../../../store/singlePageSlice';


import { IItem } from '../../../type/Item';
import cl from './CheckoutItem.module.css'
interface CheckoutItemProps{
  chooseItem:IItem;
  
 
}
const CheckoutItem:FC<CheckoutItemProps> = ({chooseItem}) => {
  

  const dispatch=useAppDispatch()


  
 const reduceCount=()=>{
  if(chooseItem.count>0){
    dispatch(reducePriceBasket(chooseItem))
    dispatch(reduceCountBasketItem(chooseItem))
  }
 }
   
  
  const addCount=()=>{
    dispatch(addPriceBasket(chooseItem))
    dispatch(addCountBasketItem(chooseItem))
    
    
    
  }
  const deleteGood=()=>{
   dispatch(deleteGoodBasket(chooseItem))
   
  }
 

  return (
    <div className={cl.checkout__body} >
      <div className={cl.checkout__body__deleteGood} onClick={deleteGood}></div>
      <div className={cl.checkout__body__image}>
        <img src={chooseItem.image} alt="fafs" />
      </div>
      <div className={cl.checkout__description}>
        <div className={cl.checkout__description__name}>{chooseItem.name}</div>
        <div className={cl.checkout__description__article}>Артикул: 303654</div>
        <div className={cl.checkout__description__price}>{chooseItem.price}</div>
        <div className={`${cl.checkout__description__setting} ${cl.setting}`}>
            <div className={cl.setting__size}>
              <span>Размер</span>
              <select name="" id="1">
                <option value="42">42</option>
              </select>
            </div>
            <div className={cl.setting__count}>
              <span>Количество</span>
              <div className={cl.count__counter}>
                <span className={cl.reduce} onClick={reduceCount}>-</span>
                <div>{chooseItem.count}</div>
                <span className={cl.add} onClick={addCount}>+</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem