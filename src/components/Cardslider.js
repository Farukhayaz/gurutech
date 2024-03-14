import React, { useState, useEffect } from 'react';
import './Cardslider.css'; // You can define your own CSS styles for the Cardslider
import { useLocation } from 'react-router-dom';

const Cardslider = () => {
  const location = useLocation();
  const [images, setImages] = useState([]);
  console.log(images,"images")
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardData = location?.state?.cardData;

  useEffect(() => {
    const cardData = location?.state?.cardData;
    if (cardData && cardData.img) {
      setImages(cardData.img);
    }
  }, [location]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
   <div className='w-[90%] flex flex-wrap pb-10 justify-around items-center mx-auto'>
    <div className='lg:w-[40%] md:w-[50%] w-[100%] mt-10'>
    <div className="slider-container">
      <div className="slider">
        <div className="slider-image  lg:h-[400px] md:h-[400px] h-[300px] ">
          <img className=' ' src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        </div>
        <div className="thumbnails">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => selectImage(index)}
            >
              <img className=''  src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="prev-btn" onClick={goToPrevious}>
        &lt;
      </button>
      <button className="next-btn" onClick={goToNext}>
        &gt;
      </button>
    </div>
    </div>
    <div className='lg:w-[55%] md:w-[50%] w-[90%] mt-10'
    >
    {cardData ? (
<div className=' '>
    <h3 className='lg:text-[30px] md:text-[30px] text-[23px] font-bold'>{cardData.h1}</h3>
    <p className='lg:text-[20px] md:text-[20px] text-[20px] font-bold'>Brand: {cardData.brand}</p>
    <p className='lg:text-[20px] md:text-[20px] text-[20px]'>Price: <span style={{fontWeight:"800"}}> {cardData.price} </span> </p>
    <p className='lg:text-[20px] md:text-[20px] text-[20px]'>Status: <span style={{fontWeight:"800"}}> {cardData.status} </span> </p>
    <p className='lg:text-[20px] md:text-[20px] text-[20px]'> <span className='font-bold'> Description : </span><br/>  {cardData.detail}  </p>


    {/* <p>Age: {cardData.age}</p> */}
    {/* <p>Condition: {cardData.condition}</p> */}
    {/* <p>Brand: {cardData.brand}</p> */}
    {/* Add more fields if needed */}
  </div>

) : (
  <p>No card data available.</p>
)}
</div> 
    </div>
  );
};

export default Cardslider;
