// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { IoIosSearch } from "react-icons/io";
const Navbar = () => {

  const navigate = useNavigate()

  const click=()=>{
    navigate('/')
  }
  return (
    <nav className="bg-black">
      <div className="container mx-auto flex  items-center">
        {/* Logo */}
        <div className="text-white font-bold lg:mx-left md:mx-left mx-auto text-lg">
            <img src='/image/lo.png' className='lg:h-[100px] md:h-[100px]  h-[65px]' onClick={click} alt='Logo' />
        </div>
        {/* Search input */}
       
      </div>
    </nav>
  );
};

export default Navbar;

// {/* <div className="relative ml-[30%]">
// <input
//   type="text"
//   placeholder="Search"
//   className="bg-[#2184DE] text-white rounded-full py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
// />
// <button className="absolute text-white  right-4 top-2">
//   {/* Add your search icon here */}
//   <IoIosSearch className='text-[25px] font-bold'/>
// </button>
// </div> */}