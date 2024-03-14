import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import './slid.css';
import { EffectCreative, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { cards } from "../data";

export default function Home() {
  const navigate = useNavigate();
  
  const handleCardClick = (cardData) => {
    navigate(`/about`, { state: { cardData } });
    console.log(cardData, "cardData");
  };

  return (
    <>
      <Navbar />
      <Slider />
      <div className='mt-8'>
        <div className='flex lg:w-[95%] md:w-[95%] w-[90%] mx-auto flex-wrap justify-around'>
          {cards.map((card, index) => (
            <div
              className='card h-auto mb-8 lg:w-[285px] md:w-[300px] w-[340px] flex justify-around flex-col bg-white'
              key={index}
              style={{ border: "2px solid silver" }}
              onClick={() => handleCardClick(card)}
            >
              <Swiper
                grabCursor={true}
                effect={'creative'}
                pagination={{ clickable: true }}
                creativeEffect={{
                  prev: { shadow: true, translate: [0, 0, -400] },
                  next: { translate: ['100%', 0, 0] },
                }}
                modules={[EffectCreative, Pagination]}
                className="swip mySwiper"
              >
                {card.img.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={image}
                      className='lg:h-[240px] md:h-[240px] h-[250px] w-[100%] mx-auto'
                      alt={`Card ${index}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className='w-[100%] mx-auto'>
                <h1 className='mt-2 p-2 text-black text-center font-bold text-[23px] '>{card.h1}</h1>
                <div className='flex justify-around flex-wrap '>
                  <div className='text-[13px] rounded-2xl text-left text-black mt-1 p-2 w-[40%] '>
                    AGE:<br />
                    <span className='text-[16px] font-bold'>{card.age}</span>
                  </div>
                  <div className='text-[13px] rounded-2xl text-left text-black mt-1 p-2 w-[40%] '>
                    CONDITION:<br />
                    <span className='text-[16px] font-bold'>{card.condition}</span>
                  </div>
                </div>
                <div className='flex justify-around flex-wrap '>
                  <div className='text-[13px] rounded-2xl text-left text-black mt-1 p-2 w-[40%] '>
                    BRAND:<br />
                    <span className='text-[16px] font-bold'>{card.brand}</span>
                  </div>
                  <div className='text-[13px] rounded-2xl text-left text-black mt-1 p-2 w-[40%] '>
                    CONDITION:<br />
                    <span className='text-[16px] font-bold'>{card.condition}</span>
                  </div>
                </div>
                <p className='price mt-6 p-3 text-[20px] text-center' style={{ borderTop: "1px solid gray" }}>
                  <span>Price: </span>RS: <span className='font-bold text-[25px]'>{card.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
