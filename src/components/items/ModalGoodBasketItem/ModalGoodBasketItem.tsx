import React from 'react';
import { IItem } from '../../../type/Item';
import cl from './ModalGoodBasketItem.module.css'
interface ModalGoodBasketItemProps{
   item:IItem
}
const ModalGoodBasketItem: React.FC<ModalGoodBasketItemProps> = ({ item }) => {
   
  

   return (
      <>
         
            <div className={cl.modalGoodBasket__body} >

               <div className={cl.modalGoodBasket__body__image}>
                  <img src={item.imageArrPreview[0]} alt={item.name} />
               </div>
               <div className={cl.modalGoodBasket__body__info}>
                  <div className={cl.modalGoodBasket__body__name}>{item.name}</div>
                  <div className={cl.modalGoodBasket__body__brand}>{item.brand}</div>
                  <div className={cl.modalGoodBasket__body__size}>Размер: {item.size}</div>
                  <div className={cl.modalGoodBasket__body__count}>Количество: {item.count}</div>
                  <div className={cl.modalGoodBasket__body__price}>{item.price}</div>
               </div>

            </div>
         
         
      </>
     
   );
};

export default ModalGoodBasketItem;