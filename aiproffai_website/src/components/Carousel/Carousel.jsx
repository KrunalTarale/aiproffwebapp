import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import image1 from '../assets/Applied AI.png';
import image2 from '../assets/NLP.png';
import image3 from '../assets/Computer Vision.png';
import image4 from '../assets/Forecasting using AI.png';
import image5 from '../assets/Reliable and Robust AI.png';

const Carousel = () => {
  const images = [image1, image2, image3, image4, image5];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sliderStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  const autoAdvance = () => {
    nextSlide();
  };

  useEffect(() => {
    const intervalId = setInterval(autoAdvance, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel-wrapper relative text-2xl">
      <div className="carousel-slider" style={sliderStyle}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide ">
            <img src={image} alt="Carousel slide" className="carousel-image " />
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 ">
        <button
          onClick={prevSlide}
          className="p-4 text-black bg-white rounded-full border-2 border-blue-600 hover:text-white hover:bg-blue-600"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2
        <button"
      >
        <button
          onClick={nextSlide}
          className="p-4 text-black bg-white rounded-full border-2 border-blue-600 hover:text-white hover:bg-blue-600"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
