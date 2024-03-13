import React from 'react';
import Navbar from '../components/Navbar';
// import { useLocation } from 'react-router-dom';
import Cardslider from '../components/Cardslider';

export default function About() {
  // const location = useLocation();
  // const cardData = location?.state?.cardData;

  return (
    <>
      <div>
      <Navbar />
    <Cardslider/> 
      </div>
    </>
  );
}


// {/* <div>
// {cardData ? (
// <div className='w-[90%] flex flex-wrap mx-auto'>
// <div className='lg:w-[50%] md:w-[50%] w-[80%]'>  <Cardslider/>  </div>
// <div className='lg:w-[50%] md:w-[50%] w-[80%]'>
// <div>
//     <h3>{cardData.h1}</h3>
//     <p>Age: {cardData.age}</p>
//     <p>Condition: {cardData.condition}</p>
//     <p>Brand: {cardData.brand}</p>
//     <p>Price: {cardData.price}</p>
//     {/* Add more fields if needed */}
//   </div>
// </div>
// </div>


// ) : (
//   <p>No card data available.</p>
// )}
// </div> */}