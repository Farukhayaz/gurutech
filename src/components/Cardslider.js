import React, { useState } from 'react';
import './Cardslider.css'; // You can define your own CSS styles for the Cardslider

// Sample image data
const images = [
  '/image/laptop/lap.webp',
  '/image/laptop/13.jpeg',
  '/image/laptop/6.jpeg',
  '/image/laptop/10.jpeg'
];

const Cardslider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div className="slider-container">
      <div className="slider">
        <div className="slider-image">
          <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        </div>
        <div className="thumbnails">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => selectImage(index)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
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
  );
};

export default Cardslider;
