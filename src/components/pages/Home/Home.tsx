import {FC} from 'react';

import './Home.css';
import SwiperGoods from '../../Swiper/SwiperGoods';
 import img from  '../../../image/home__preview-background.jpg'
import  imgOffer from '../../../image/offers__card/support.png';
const Home: FC = () => {
   return (
      <>
         <div className='preview'>
            <div className="preview__image _ibg">
               <img src={img} alt='nike' />
            </div>
            <div className="preview__container _container">

               <div className="preview__body">
                  <div className="preview__body-title">Качество высокое- <br />цены низкие</div>
                  <div className="preview__body-subTitle">Компания Brand-Shop занимается поставками исключительно качественной продукции из-зарубежа.Лучшие цены на рынке и всегда отличный товар.
                  </div>
                  <button className="preview__button">Смотреть больше</button>
               </div>
            </div>
         </div>
         <div className="offers">
            <div className="offers__container _container">
               <div className="offers__title">
                  <h1>Что мы предлагаем</h1>
               </div>
               <div className="offers__card card">
                  <div className="card__body">
                     <div className="card__item">
                        <div className="card__icon">
                           <img src={imgOffer} alt='support'/>
                        </div>
                        <div className="card__icon-name">
                           Поддержка 24/7</div>            
                     </div>

                     <div className="card__item">
                        <div className="card__icon">
                           <img src={imgOffer} alt='support' />
                        </div>
                        <div className="card__icon-name">
                           Поддержка 24/7</div>
                     </div>

                     <div className="card__item">
                        <div className="card__icon">
                           <img src={imgOffer} alt='support' />
                        </div>
                        <div className="card__icon-name">
                           Поддержка 24/7</div>
                     </div>

                     <div className="card__item">
                        <div className="card__icon">
                           <img src={imgOffer} alt='support' />
                        </div>
                        <div className="card__icon-name">
                           Поддержка 24/7</div>
                     </div>
                     <div className="card__item">
                        <div className="card__icon">
                           <img src={imgOffer} alt='support' />
                        </div>
                        <div className="card__icon-name">
                           Поддержка 24/7</div>
                     </div>
                     <div className="card__item">
                        <div className="card__icon">
                           <img src={imgOffer} alt='support' />
                        </div>
                        <div className="card__icon-name">
                           Поддержка 24/7</div>
                     </div>
                     <div className="card__item">
                        <div className="card__icon">
                           <img src={imgOffer} alt='support' />
                        </div>
                        <div className="card__icon-name">
                           Поддержка 24/7</div>
                     </div>
                     <div className="card__item">
                        <div className="card__icon">
                           <img src={imgOffer} alt='support' />
                        </div>
                        <div className="card__icon-name">
                           Поддержка 24/7</div>
                     </div>

                     
                  </div>
               </div>
            </div>
         </div>
         <div className="swiper__goods">
            <div className="swiper__goods__container _container">
               <div className='swiper__goods__title'>Наш ассортимент кроссовок</div>
               <SwiperGoods/>
            </div>
         </div>
      </>
   )
}
export default Home;
