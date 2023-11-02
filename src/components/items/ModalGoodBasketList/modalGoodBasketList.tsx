import React, {  } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'

import ModalGoodBasketItem from '../ModalGoodBasketItem/ModalGoodBasketItem';
import cl from './modalGoodBasketList.module.css'
const ModalGoodBasket = () => {
   const dispatch=useAppDispatch();
   const goodItem=useAppSelector(elem=>elem.singlePage.goodItem);

  
   
  return (
  
        <  >
           <div className={cl.modalGoodBasketList__content}>
              {goodItem.map((elem, index) => (
                 <ModalGoodBasketItem key={index} item={elem} />
              ))}

           </div>
           
        </>
   
     
    
  )
}

export default ModalGoodBasket