import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slider from './Slider';
const TrustedCompanies = () => {
  return (
    <section  id="TrustedCompanies" className="container TrustedCompaniessection text-center" >
         <div className="row d-flex align-items-center justify-content-center TrustedCompaniesrow">
         <h2 >
         Clients Trusted by Companies
           </h2>
        <Slider />

        </div>
    </section>
  )
}

export default TrustedCompanies
