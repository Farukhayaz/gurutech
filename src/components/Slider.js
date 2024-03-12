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
             <h1 className='text-[40px] mb-5 text-[#fddc58]'>Laptop Accessories</h1>
             <ul className=''>
                 <li className=''>
                     Fast & Reliable
                 </li>
                 <li className='mt-3'>
                     High Quality Graphics
                 </li>
             </ul>
             <button className=' bg-[#fddc58] text-black mt-9 p-2 w-[15%] '>
              Shop Now
             </button>
         </div>
       </SwiperSlide>
       <SwiperSlide style={{backgroundImage:"url(/image/gaming-4.jpg)" , backgroundSize:"100% 100%"}} >
       <div className='text-white h-[100%] flex flex-col justify-center w-[90%] mx-auto'>
             <h1 className='text-[40px] mb-5 text-[#fddc58]'>Laptop Accessories</h1>
             <ul className=''>
                 <li className=''>
                     Fast & Reliable
                 </li>
                 <li className='mt-3'>
                     High Quality Graphics
                 </li>
             </ul>
             <button className=' bg-[#fddc58] text-black mt-9 p-2 w-[15%] '>
              Shop Now
             </button>
         </div>
       </SwiperSlide>
         <SwiperSlide style={{backgroundImage:"url(/image/Untitled-1.jpg)" , backgroundSize:"100% 100%"}} >
         <div className='text-white h-[100%] flex flex-col justify-center w-[90%] mx-auto'>
             <h1 className='text-[40px] mb-5 text-[#fddc58]'>Laptop Accessories</h1>
             <ul className=''>
                 <li className=''>
                     Fast & Reliable
                 </li>
                 <li className='mt-3'>
                     High Quality Graphics
                 </li>
             </ul>
             <button className=' bg-[#fddc58] text-black mt-9 p-2 w-[15%] '>
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
