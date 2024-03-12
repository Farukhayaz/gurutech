import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper lg:h-[520px] md:h-[520px] h-[200px]  mt-[2%]"
      >
                  <SwiperSlide style={{backgroundImage:"url(/image/laptop-5.jpg)" , backgroundSize:"100% 100%"}} >
         <div className='text-white h-[100%] flex flex-col justify-center w-[90%] mx-auto'>
             <h1 className='lg:text-[45px] font-bold md:text-[40px] text-[23px] text-[#fddc58]'>Laptop Accessories</h1>
             <ul className=' mt-3 lg:text-[20px] md:text[22px] text-[16px]'>
                 <li className=''>
                     Fast & Reliable
                 </li>
                 <li className='mt-2'>
                     High Quality Graphics
                 </li>
             </ul>
             <button className=' bg-[#fddc58] lg:text-[18px] md:text-[18px] text-[14px] text-black lg:mt-9 md:mt-6 mt-3 lg:p-2 md:p-2 p-1 lg:w-[15%] md:w-[30%] w-[30%] '>
              Shop Now
             </button>
         </div>
       </SwiperSlide>
       <SwiperSlide style={{backgroundImage:"url(/image/gaming-4.jpg)" , backgroundSize:"100% 100%"}} >
       <div className='text-white h-[100%] flex flex-col justify-center w-[90%] mx-auto'>
             <h1 className='lg:text-[45px] font-bold md:text-[40px] text-[23px] text-[#fddc58]'>Laptop Accessories</h1>
             <ul className=' mt-3 lg:text-[20px] md:text[22px] text-[16px]'>
                 <li className=''>
                     Fast & Reliable
                 </li>
                 <li className='mt-2'>
                     High Quality Graphics
                 </li>
             </ul>
             <button className=' bg-[#fddc58] lg:text-[18px] md:text-[18px] text-[14px] text-black lg:mt-9 md:mt-6 mt-3 lg:p-2 md:p-2 p-1 lg:w-[15%] md:w-[30%] w-[30%] '>
              Shop Now
             </button>
         </div>
       </SwiperSlide>
         <SwiperSlide style={{backgroundImage:"url(/image/Untitled-1.jpg)" , backgroundSize:"100% 100%"}} >
         <div className='text-white h-[100%] flex flex-col justify-center w-[90%] mx-auto'>
             <h1 className='lg:text-[45px] font-bold md:text-[40px] text-[23px] text-[#fddc58]'>Laptop Accessories</h1>
             <ul className=' mt-3 lg:text-[20px] md:text[22px] text-[16px]'>
                 <li className=''>
                     Fast & Reliable
                 </li>
                 <li className='mt-2'>
                     High Quality Graphics
                 </li>
             </ul>
             <button className=' bg-[#fddc58] lg:text-[18px] md:text-[18px] text-[14px] text-black lg:mt-9 md:mt-6 mt-3 lg:p-2 md:p-2 p-1 lg:w-[15%] md:w-[30%] w-[30%] '>
              Shop Now
             </button>
         </div>
</SwiperSlide>
        <div className="autoplay-progress lg:h-[60px] md:h-[60px] h-[40px] lg:w-[60px] md:w-[60px] w-[40px] lg:text-[25px] md:text-[25px] text-[20px] " slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
