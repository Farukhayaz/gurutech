import React from 'react'
import Navbar from '../components/Navbar'
import { cards } from "../data"
import Slider from '../components/Slider'

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider/>

      <div className=' mt-8 '>
        {/* <h1 className='text-center text-[40px] font-bold '>
          Welcome to GURU TECH
        </h1> */}
        <div className='flex w-[95%] mx-auto  flex-wrap justify-around'>
          {cards.map((e, index) => (
            <div className='h-auto  mb-8 w-[300px] flex justify-around flex-col' key={index}>
              <img src={e.img} className='h-[180px] w-[90%] mx-auto' alt={`Card ${index}`}  />
              <h1 className=' mt-2 p-2 text-black font-bold text-[23px] ml-3'>{e.h1}</h1>
              <p className='ml-[8%] mt-3'>RS: {e.price}</p>
              <button className=' bg-[#fddc58] text-black  mt-3 mx-auto p-2 w-[40%] '>
              Shop Now
             </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
