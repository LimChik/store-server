
import { Swiper, SwiperSlide }  from 'swiper/react';
import './SwiperGoods.css'
import '../../../node_modules/swiper/swiper.min.css'
const SwiperGoods = () => {
 return (
  
    <Swiper
     spaceBetween={20}
      slidesPerView={1}
       
    >
     <SwiperSlide>
      <div className="swiper__image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTGV-n3JVKX6a9SzL0Wtsk_PxgyCUVNdH18MlKoL1&s" alt="" />
      </div>
      </SwiperSlide>
     <SwiperSlide>
      <div className="swiper__image">
         <img src="https://media.istockphoto.com/id/1062947134/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%BE%D1%80-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F-%D0%B1%D0%BB%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5-%D0%BB%D1%83%D1%87%D0%B8-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=rSRPoCl78qvsYxaRhOa0xS_z10jDDnJvhteWLM5w8yo=" alt="" />
      </div>
      
      </SwiperSlide>
     <SwiperSlide><div className="swiper__image">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTGV-n3JVKX6a9SzL0Wtsk_PxgyCUVNdH18MlKoL1&s" alt="" />
     </div></SwiperSlide>
     <SwiperSlide><div className="swiper__image">
       <img src="https://media.istockphoto.com/id/1062947134/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%BE%D1%80-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F-%D0%B1%D0%BB%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5-%D0%BB%D1%83%D1%87%D0%B8-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=rSRPoCl78qvsYxaRhOa0xS_z10jDDnJvhteWLM5w8yo=" alt="" />
     </div></SwiperSlide>
       
    </Swiper>
  
 )
}

export default SwiperGoods