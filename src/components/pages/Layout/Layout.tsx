import React, { FC } from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom';
import {  useAppDispatch, useAppSelector } from '../../../hooks';
import { selectModalActive } from '../../../store/singlePageSlice';
import FooterItem from '../../items/FooterItem/FooterItem';
import ModalGoodBasket from '../../items/ModalGoodBasketList/modalGoodBasketList';
import cl from '../../items/ModalGoodBasketList/modalGoodBasketList.module.css'
import './Layout.css';
import img from '../../../image/header__logo.jpg'

const  Layout :FC = () => {

  const basketProduct = useAppSelector(state => state.singlePage.countGood);
  const dispatch=useAppDispatch()
  const  isModalBasketActive=useAppSelector(state=>state.singlePage.modalBasketActive);
  const buttonAddForBasket=useAppSelector(elem=>elem.singlePage.buttonActive);
  const navigate = useNavigate()
  const pathToBasketPage=()=>{
    
    navigate('/checkout');
    
  }
  const showModalBasket=(e:React.MouseEvent)=>{
    const target=e.target as HTMLElement;
    if (target.closest(`.${cl.modalGoodBasketList__container}`) && buttonAddForBasket){
      dispatch(selectModalActive(true))
      
    } if (!target.closest(`.${cl.modalGoodBasketList__container}`) && buttonAddForBasket ){
      
      dispatch(selectModalActive(false))
    }
    if (target.closest(`.header__basket-product`) || (!buttonAddForBasket && target.closest(`.header__basket-product`) ) ){
      dispatch(selectModalActive(true))
    }
    if (isModalBasketActive && (!buttonAddForBasket) && (!target.closest(`.header__basket-product`))){
      dispatch(selectModalActive(false))
    }
   if((target.closest(`.${cl.modalGoodBasketList__button}`))){
    dispatch(selectModalActive(false))
   }
  }
  return (
    <div onClick={showModalBasket} >
      <header className={'header'}>
         <div className="header__logo">
              <img src={img} alt="" />
         </div>
           <Link to='about'> О нас</Link>
           <Link to=''> На главную</Link>
           <Link to='product'> Наши товары</Link>
           <Link to='contacts'> Контакты</Link>
           <div className='header__basket-product'>
          <div className="header__basket-product__number">{basketProduct==0? '':basketProduct}</div>

          {isModalBasketActive && <div className={cl.modalGoodBasketList__container}>
            <ModalGoodBasket/>
            <hr style={{ margin: '0 5px 10px' }} />
            <button onClick={pathToBasketPage} className={cl.modalGoodBasketList__button}>Оформить заказ</button>
          </div>}

           </div>
        </header>
        
        
           <Outlet />
        
     <FooterItem/>
      
    </div>
    
    
  )
}

export default  Layout