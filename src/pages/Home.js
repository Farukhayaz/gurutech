import React from 'react';

import Navbar from '../components/Navbar'
import { cards } from "../data"
import Slider from '../components/Slider'
import Footer from '../components/Footer';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import './slid.css';

// import required modules
import {  EffectCreative, Pagination } from 'swiper/modules';
export default function Home() {
  return (
    <>
      <Navbar />
      <Slider/>

      <div className=' mt-8 '>
        {/* <h1 className='text-center text-[40px] font-bold '>
          Welcome to GURU TECH
        </h1> */}
        <div className='flex lg:w-[95%] md:w-[95%] w-[90%] mx-auto flex-wrap justify-around'>
          {cards.map((e, index) => (
            <div className='h-auto mb-8 lg:w-[380px] md:w-[380px] w-[350px] pt-2 flex justify-around flex-col' key={index} style={{
              backgroundColor: "rgba(0,0,0,.5)"
            }}>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        pagination={{
          clickable: true,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative , Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>              <img src={e.img} className='h-[240px] w-[100%] mx-auto' alt={`Card ${index}`}  />
</SwiperSlide>
<SwiperSlide>              <img src={e.img1} className='h-[240px] w-[100%] mx-auto' alt={`Card ${index}`}  />
</SwiperSlide>
<SwiperSlide>              <img src={e.img2} className='h-[240px] w-[100%] mx-auto' alt={`Card ${index}`}  />
</SwiperSlide>
      </Swiper>
              {/* <img src={e.img} className='h-[240px] w-[100%] mx-auto' alt={`Card ${index}`}  /> */}
             <div className=' w-[90%] mx-auto'>
             <h1 className=' mt-2 p-2 text-[#fddc58] text-center  font-bold text-[23px] '>{e.h1}</h1>
             <div className=' flex justify-around '>
             <div className='bg-[#f7f7f8] text-[13px]  rounded-2xl text-left text-black  mt-3 p-2 w-[40%] '>
              AGE:
              <br/>
              <span className='text-[16px] font-bold'>{e.age}</span>
             </div>
             <div className='bg-[#f7f7f8] text-[13px] rounded-2xl text-left text-black  mt-3 p-2 w-[40%] '>
              CONDITION:
              <br/>
              <span className='text-[16px] font-bold'>{e.condition}</span>
             </div>
             </div>
             <div className=' flex justify-around '>
             <div className='bg-[#f7f7f8] text-[13px]  rounded-2xl text-left text-black  mt-3 p-2 w-[40%] '>
              BRAND:
              <br/>
              <span className='text-[16px] font-bold'>{e.brand}</span>
             </div>
             <div className='bg-[#f7f7f8] text-[13px]  rounded-2xl text-left text-black  mt-3 p-2 w-[40%] '>
              CONDITION:
              <br/>
              <span className='text-[16px] font-bold'>{e.condition}</span>
             </div>
             </div>
              <p className=' mt-6 text-white  text-[20px] pb-8 text-center'><span>Price:  </span>RS: <span className='font-bold text-[25px]'>{e.price}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}
