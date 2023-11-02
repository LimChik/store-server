import {  FC, RefAttributes} from "react";

import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from 'swiper/react';

import '../../../../node_modules/swiper/swiper.min.css';
import '../../../../node_modules/swiper/'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


import { FreeMode, Navigation , Thumbs} from 'swiper/modules';
import './SwiperSinglePage.css'
interface ISwiperSinglePageProps{
   item:string[]
}

const SwiperSinglePage: FC<ISwiperSinglePageProps & RefAttributes<SwiperRef> & SwiperProps> = ({item}) => {
    const thumbsSwiper=null
   
         return (
            

        
            <>

            
               <Swiper
                  
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}


                  className="mySwiper2">


                  {
                     item.map((elem, id) => (
                        <SwiperSlide
                           key={id}>
                           <img src={elem} alt="" />
                        </SwiperSlide>
                     ))
                  }
               </Swiper>
               <Swiper 
             
                  //onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
               
               >
                  {
                     item.map((elem, id) => (
                        <SwiperSlide
                           key={id}>
                           <img src={elem} alt="" />
                        </SwiperSlide>
                     ))
                  }
               </Swiper>
            </>
            
            
         )  
           
     
}

export default SwiperSinglePage