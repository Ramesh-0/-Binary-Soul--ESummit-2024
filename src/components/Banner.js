//src\components\Banner.js
import React, { useState } from 'react';
import Slider from 'react-slick';

// Import your images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

function Banner() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleToggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`relative min-h-screen bg-soft-red py-16 px-4 transition-all duration-700 ${isExpanded ? 'pt-24' : 'pt-16'}`}>
      <div className={`text-center max-w-full mx-auto transition-all duration-700 ${isExpanded ? 'mb-24' : 'mb-8'}`}>
        <div className="slider-wrapper relative">
          <Slider {...settings}>
            <div className="relative">
              <img src={image1} alt="Slide 1" className="slider-image" />
            </div>
            <div className="relative">
              <img src={image2} alt="Slide 2" className="slider-image" />
            </div>
            <div className="relative">
              <img src={image3} alt="Slide 3" className="slider-image" />
            </div>
          </Slider>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-red-900 mt-6">Constitution Made Easy</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">India’s Legal Legacy</h2>
        <p className="text-lg text-gray-700 mt-4">
          The Indian Constitution is the supreme law of India, adopted on January 26, 1950. It establishes the framework for the government, defining its structure, powers, and functions...
        </p>
        {/* Conditionally rendered additional content */}
        <div className={`transition-all duration-700 ease-in-out ${isExpanded ? 'opacity-100 max-h-screen py-6 px-4' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <div className={`mt-8 transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-4">Additional Information</h3>
            <p className="text-lg text-gray-700">
              Here you can include additional information about the Indian Constitution. This section can be expanded or collapsed by clicking the "Show More" button.
            </p>
          </div>
        </div>
        <button 
          className={`btn mt-6 transition-transform duration-700 ${isExpanded ? 'translate-y-12' : 'translate-y-0'} ${isExpanded ? 'mt-6' : 'mt-0'}`}
          onClick={handleToggleClick}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
}

export default Banner;
