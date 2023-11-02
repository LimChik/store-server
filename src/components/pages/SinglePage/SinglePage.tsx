import React,{FC, useState,useEffect} from 'react';
import cl from './SinglePage.module.css'
import { useParams } from 'react-router-dom';
import { IItem } from '../../../type/Item';

import ButtonSize from '../../../UI/ButtonSIze/ButtonSize';
import SwiperSinglePage from '../../Swiper/SwiperSinglePage/SwiperSinglePage';

import RowInfoItem from './row-info/RowInfoItem';
import Reviews from './reviews/Reviews';
import { useAppDispatch} from '../../../hooks';
import { addBusket,  addPriceBasket,  selectModalActive,stateButtonActive } from '../../../store/singlePageSlice';



interface ISinglePageProps{
   item:IItem[]
}
interface Package{
   email:string;
   size:string;
}
const SinglePage:FC<ISinglePageProps> = ({item}) => {

   const{id} =useParams();
   const [product,setProduct]=useState<IItem[]>([]);
   const arrSize: number[] = [39, 43, 44, 45, 46]//Размеры обуви;
   const [size,setSize]=useState<number[]>([]);
   const [sizeForm,setSizeForm]=useState(false);
   const [sizeFormAction,setSizeFormAction]=useState<Package[]>([]);
   const [valueFormSize,setValueFormSize]=useState('');
   const [valueFormEmail,setValueFormEmail]=useState('');
   const [disableButton,setDisableButton]=useState(false)
   const dispatch=useAppDispatch();

   
   
   useEffect(()=>{
      setProduct(item.filter((index) => String(index.id) == id));
      dispatch(selectModalActive(false));
      dispatch(stateButtonActive(false))
      console.log('jopa')
     
   },[id])
   
   const imageArrPreview=[
     'https://outmaxshop.ru/components/com_jshopping/files/img_products/30329/nike-air-max-plus-tn-30329-1.jpg',
     'https://outmaxshop.ru/components/com_jshopping/files/img_products/30329/nike-air-max-plus-tn-30329-2.jpg',
     'https://outmaxshop.ru/components/com_jshopping/files/img_products/30329/nike-air-max-plus-tn-30329-3.jpg'
   ]

   //const imageLoopMouseOver = (e: React.MouseEvent<HTMLImageElement, MouseEvent> )=>{
   //   const target=e.target as HTMLImageElement;
   //   const loopImage = document.querySelector(['.', cl.singlePage__body__loop__image].join('')) as  HTMLElement;
   //   const loop = document.querySelector(['.', cl.singlePage__body__loop].join('')) as HTMLElement;
   //   
   //   const x = e.pageX - target.offsetLeft;
   //   const y = e.pageY - target.offsetTop;
   //   loop.style.cssText=`
   //   display:block;
   //   
   //   `
   //   loopImage.style.cssText=`
   //      
   //      height:100%;
   //      width:100%;
   //      background-image:url(${target.src});
   //      position:absolute;
   //      transform-origin:${x}px ${y}px;
   //      scale:1.6;
   //   `
   //   
   //}
 
   
  //const imageColorClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>)=>{
  //   const target=e.target as HTMLImageElement;
  //   let newtarget=target.parentNode as HTMLElement;
  //   const previewImage=document.querySelector(`.${cl.singlepage__body__image}`)?.firstChild as HTMLImageElement
  //   
  //   if(target.tagName=='IMG'){
  //      const arr=document.querySelectorAll(`.${cl.singlePage__body__choiceColor__image}`);
  //      arr.forEach(item=>{
  //         item.classList.remove(cl.isImageColorClick)
  //      })
  //      previewImage.src=target.src;
  //      
  //   }
  //   if(target.tagName!='IMG'){
  //      return null
  //   }
  //   
  //   newtarget.classList.add(cl.isImageColorClick)
  //}
  

   const handleButtonClick = (value: number, target: HTMLElement) => {


      target.classList.toggle(cl.isActive);
      setSize(prevState => [...prevState, value]);

   };
   const handleFormSizeEmail = (singlePageBody:HTMLElement) => {

      
      singlePageBody.classList.add(`${cl.isVisible}`);
      setSizeForm(true)

      

   }
   const handleContainerClick = (event: React.MouseEvent) => {
      const singlePageBody = document.querySelector(`.${cl.singlePage__body__container}`) as HTMLElement;
      const target = event.target as HTMLElement;
      
     
     
      if (target.classList.contains(cl.singlePage__body__size__button)) {

         const value = target.getAttribute('value');
         if (value) {
            handleButtonClick(Number(value), target);
            if (!target.classList.contains(cl.isActive)) {
               setSize(size.filter((values) => values != Number(value)))

            }


         }

      };
      if(target.parentElement?.classList[0]==`${cl.singlePage__body__feedback__noSize}`){
         handleFormSizeEmail(singlePageBody)
      }
      
     
      
      
      
      
   }
   const formSizeActive=(e:React.MouseEvent)=>{
      const target=e.target as HTMLElement;
      if(!target.closest(`.${cl.singlePage__modalSizeForm}`)){
         setSizeForm(false);
         
            const singlePageBody = document.querySelector(`.${cl.singlePage__body__container}`) as HTMLElement;
            singlePageBody.classList.remove(`${cl.isVisible}`)
         
         

      
   }
   
}
   const formSizeButtonClose = () => {
      setSizeForm(false)
      const singlePageBody = document.querySelector(`.${cl.singlePage__body__container}`) as HTMLElement;
      singlePageBody.classList.remove(`${cl.isVisible}`)

   }
   const handleFormInputEmail = (e: React.ChangeEvent)=>{
     const target=e.target as HTMLInputElement
      setValueFormEmail(target.value)
   }
   const handleFormInputSize=(e:React.ChangeEvent)=>{
      const target=e.target as HTMLInputElement;
      setValueFormSize(target.value)
   }
   const handleFormButtonAction=()=>{
      setSizeFormAction( [...sizeFormAction,{
         email:valueFormEmail,
         size:valueFormSize
      }])
      
   }

   const addGoodToBusket=(e:React.MouseEvent)=>{
   
       dispatch(addBusket(product[0]));
       dispatch(addPriceBasket(product[0]))
      dispatch(selectModalActive(true))
      dispatch(stateButtonActive(true))
       const target=e.target as HTMLElement;
      target.innerHTML = `Перейти в &nbsp` +`<a href='/basket'>корзину</a>`
         
      target.classList.add(cl.buttonDisable) 
      setDisableButton(true)

   }
   
  
  return (
  <>
      {product?.map((elem)=>(
         <div key={elem.id} className={cl.singlePage__body}  onClick={handleContainerClick}> 
            {sizeForm && 
               <div onClick={formSizeActive} className={cl.modalSize__wrapper}>
                  <div  className={cl.singlePage__modalSizeForm}>
                     <button className={cl.singlePage__modalSizeForm__closeButton} onClick={formSizeButtonClose}>Закрыть</button>
                     <div className={cl.singlePage__modalSizeForm__text}>Сдесь вы сможете написать свой рамзмер,который не нашли на сайте для данных кросовок.Укажите ваш e-mail и мы уведомим Вас,что нужные Вам размер появился на сайте </div>
                     <input type="text" onChange={handleFormInputEmail} placeholder='Напишите свой размер' className={cl.singlePage__modalSizeForm__sizeInput} />
                     <input type="text" onChange={handleFormInputSize} placeholder='Введите свой e-mail' className={cl.singlePage__modalSizeForm__emailInput} />
                     <button onClick={handleFormButtonAction} className={cl.singlePage__modalSizeForm__button}>Отправить данные</button>
                  </div>
            </div>
            }
               
               <div className={cl.singlePage__body__container}>
                  <div  className={cl.singlepage__body__image}>
                     <SwiperSinglePage item={imageArrPreview}/>
                     
                 
                  </div>
                  
                  <div className={[cl.singlepage__body__info, ' info'].join(' ')}>
                     
                  <div className={cl.singlePage__body__loop}  >
                     <div className={cl.singlePage__body__loop__image}></div>
                     </div>
                        
                     <div className={cl.info__name}>{elem.name}</div>
                     <div className={cl.info__price}>{[elem.price, 'руб.'].join(' ')}</div>
                     <div className={[cl.singlepage__body__info__description, ' description'].join(' ')}>
                        <div className={cl.description__material}><span>Состав</span><div>Хлопок с синтетикой</div></div>
                        <div className={cl.description__model}><span>Модель</span> <div>Air Max</div></div>
                        <div className={cl.description__category}><span>Категория</span><div>Бег/ходьба</div></div>
                        <div className={cl.description__season}><span>Сезон</span><div>Лето</div></div>
                        <div className={cl.description__color}><span>Цвет</span><div>Красный</div></div>

                     </div>
                     <div className={cl.singlePage__body__choiceColor}>
                        <div className={cl.singlePage__body__choiceColor__title}>Доступные цвета</div>
                        <div onClick={e=>e}  className={cl.singlePage__body__choiceColor__images}>
                           <div className={cl.singlePage__body__choiceColor__image}>
                              <img src='https://icdn.lenta.ru/images/2021/04/09/01/20210409010615804/wide_16_9_d8f66c8c863d57701df71cbe642b5e59.jpg' alt="1" />
                           </div>
                           <div className={cl.singlePage__body__choiceColor__image}>
                              <img src=' https://www.pravilamag.ru/upload/img_cache/55b/55b1e82f3e6cd1b6ea8f0867f9da5088_ce_960x599x0x0_cropped_666x444.jpg' alt="" />
                           </div>
                           <div className={cl.singlePage__body__choiceColor__image}>
                              <img src={elem.image} alt="2" />
                           </div>
                           <div className={cl.singlePage__body__choiceColor__image}>
                              <img src={elem.image} alt="3" />
                           </div>
                           <div className={cl.singlePage__body__choiceColor__image}>
                              <img src={elem.image} alt="4" />
                           </div>
                           <div className={cl.singlePage__body__choiceColor__image}>
                              <img src={elem.image} alt="5" />
                           </div>
                        </div>

                     </div>
                     <div className={cl.singlepage__body__size}>
                        <div className={cl.singlepage__body__size__container} >
                        {arrSize.map((item, index) => (
                           <ButtonSize value={item} key={index} text={item} className={cl.singlePage__body__size__button} />
                        ))}
                        </div>
                        
                     </div>
                     <div className={cl.singlePage__body__feedback}>
                        <div className={cl.singlePage__body__feedback__noSize} >
                        <img src={'https://cdn.icon-icons.com/icons2/858/PNG/512/letter_icon-icons.com_67753.png'} alt="" /><span >Не нашли свой размер?</span>
                        </div>
                     <div className={cl.singlePage__body__feedback__sizeFromTable}>
                        <img src={'https://cdn.icon-icons.com/icons2/2025/PNG/512/design_draw_pen_pencil_ruler_shape_write_icon_123894.png'} alt="" /><span>Подобрать размер по таблице</span>
                     </div>
                     </div>
                     <div className={cl.singlePage__body__payments}>
                        <button disabled={disableButton} onClick={addGoodToBusket} className={cl.singlePage__body__payments__basket}>Добавить в корзину</button>
                        <button  className={cl.singlePage__body__payments__buy}>Купить в 1 клик</button>

                     </div>
                        
                    

                  </div>
                  
               </div>
            <RowInfoItem  name={elem.name}/>
            <Reviews brand={elem.name}/>
            
           
         </div>
         
      ))}
        
  </>
   
    
  )
}

export default SinglePage