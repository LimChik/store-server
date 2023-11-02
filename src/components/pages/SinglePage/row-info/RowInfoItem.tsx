import React,{FC} from 'react'

import cl from './RowInfoItem.module.css';
interface IRowInfoItemProps{
  name:string
}
const RowInfoItem:FC<IRowInfoItemProps> = ({name}) => {

   const currentTab=(e:React.MouseEvent)=>{
      const target=e.target as HTMLElement;
     
      const arrTabContent = document.querySelectorAll(`.${cl.row__info__tablist__content__tab}`);
      
      const tabId = arrTabContent[Number(target.getAttribute('data-tab'))] as HTMLElement;
  
    

     
     if(target.classList.contains(cl.row__info__tablist__tab)){
      const arrTabElem=document.querySelectorAll(`.${cl.row__info__tablist__tab}`)
        arrTabElem.forEach((elem)  => {
         elem.classList.remove(cl.current);
         
           
        })
        arrTabContent.forEach((elem)=>{
         elem.classList.remove(cl.isActive)
        })
     }
      if (!target.classList.contains(cl.row__info__tablist__tab)){
         return null;
      }
     
      
   
      
      tabId.classList.add(cl.isActive)
      target.classList.add(cl.current)
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
   }
  return (
    <div onClick={currentTab} className={cl.row__info}>
      <div className={`${cl.row__info__details}`+ ` details`}>
         <div className={cl.details__title} >Детали</div>
         <div className={cl.details__text}>
            <p>-Износостойкая подметка</p>
            <p>-Классическая шнуровка</p>
            <p>-Полоски Three Stripes</p>
            <p>-Петля на пятке</p>
         </div>
      </div>
      <div className={cl.row__info__tablist}>
           <ul className={cl.row__info__tablist__menu}>
              <li className={`${cl.row__info__tablist__tab}`+ ` ${cl.current}`} data-tab='0'>Описание</li>
              <li className={cl.row__info__tablist__tab} data-tab='1'>Оплата и доставка</li>
              <li className={cl.row__info__tablist__tab} data-tab='2'>Обмен и возврат</li>
              <li className={cl.row__info__tablist__tab} data-tab='3'>Гарантии</li>
              <li className={cl.row__info__tablist__tab} data-tab='4'>О товаре</li>
           </ul>
           <div className={cl.row__info__tablist__content}>
              <div className={`${cl.row__info__tablist__content__tab}` + ` ${cl.isActive}`} data-id='0'>
                 Кроссовки <strong>{name}</strong>  -лучший выбор для активного образа жизни. Для поддержки
                 стопы используется вставка ТN (Tuned Air), расположенная на внутренней части подошвы.
                 Верх материала сделан из сетчатого текстиля для воздухопроницаемости. Вставки Air-Sole
                 в области пятки и передней части стопы для легкости и амортизации. В этих кроссовках
                 присутствует необычная шнуровка и глянцевый носок
                  <p></p>
                 Кроссовки Nike Air Max Plus выпущены в 1998 году. Показателем успеха Nike Air Max Plus
                 стал их неофициальный ребрендинг – в некоторых местах кроссовки больше известны
                 под двумя буквами «Tn» в честь модели Tuned Air, с которой началась эта
                 линейка – и теперь они стали привычными кроссовками улиц.
              </div>
              <div className={cl.row__info__tablist__content__tab} data-id='1'>
                 <p>Способы оплаты:</p> 
                 -При получениив пункт выдачи  <br />
                 -На сайте банковской карты Visa/MasterCard/МИР <br />
                 -Через систему быстрых платежей(через QR-код) <br />
                 <p></p>
                 <p> Способы доставки</p>
                 -СДЭК <br />
                 Средние сроки доставки 3-7 дней.* <br />
                 При получении есть осмотр и примерка товара <br />
                 <p></p>
                 <p>-Почта России</p>
                 Средние сроки доставки 6-12 дней.* <br />
                 При получении есть осмотр товара(без примерки) <br />
                 <p></p>
                 Бесплатная доставка на заказ от 7 000 руб. при 100% предоплате.* <br />
                 <p></p>
                 <small>* В отдельных регионах доставка платная,сроки дотсавки могут быть увеличены</small>
              </div>
              <div className={cl.row__info__tablist__content__tab} data-id='2'>
                 <p>Вы можете обменять или вернуть товар в течение 14 дней с момента покупки</p>
                 <p></p>
                 Потребитель вправе обменять непродовольственный товар надлежащего качества на аналогичный товар у продавца, у которого этот товар был приобретен, если указанный товар не подошел по форме, габаритам, фасону, расцветке, размеру или комплектации
               </div>
              <div className={cl.row__info__tablist__content__tab} data-id='3'>
                 <p>Срок действия гарантии 30 дней с момента получения заказа</p>
                 <p></p>
                 Гарантийные условия соответствуют закону РФ «О защите прав потребителей»
              </div>
              <div className={cl.row__info__tablist__content__tab} data-id='4'>
                 <p>Товары представленные на сайте являются качественной репликой (категория ААА+)</p>
                 Реплика категорий ААА+ это высокое качество, и долгий срок службы
                 <p></p>
                 <p>Фотографии товара представленные на сайте outmaxshop.com являются подлинными</p>
                 При съемке товара использована профессиональная техника и освещение. Полное или частичное копирование материалов запрещено
              </div>
           </div>
      </div>
      
    </div>
  )
}

export default RowInfoItem