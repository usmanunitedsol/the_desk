import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import treva1 from "../../Assets/images/treva1.png"
import circle1 from "../../Assets/images/circle1.png"
import hexa1 from "../../Assets/images/hexa1.png"
import ideaa1 from "../../Assets/images/ideaa1.png"

import aven1 from "../../Assets/images/aven1.png"
const Slider = () => {
  return (
    <div>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
     
      pagination={{ clickable: true }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       
      <SwiperSlide><img src={treva1} alt='company'/></SwiperSlide>
      <SwiperSlide><img src={circle1} alt='company'/></SwiperSlide>
      <SwiperSlide><img src={hexa1} alt='company'/></SwiperSlide>

      <SwiperSlide><img src={ideaa1} alt='company'/></SwiperSlide>
      <SwiperSlide><img src={treva1} alt='company'/></SwiperSlide>
      <SwiperSlide><img src={aven1} alt='company'/></SwiperSlide>

      <SwiperSlide><img src={treva1} alt='company'/></SwiperSlide>
      <SwiperSlide><img src={circle1} alt='company'/></SwiperSlide>
      <SwiperSlide><img src={hexa1} alt='company'/></SwiperSlide>

      <SwiperSlide><img src={ideaa1} alt='company'/></SwiperSlide>
      <SwiperSlide><img src={hexa1} alt='company'/></SwiperSlide>
      <SwiperSlide><img src={aven1} alt='company'/></SwiperSlide>

 
      </Swiper>
    </div>
  )
}

export default Slider
