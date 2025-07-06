import React, { useState, useEffect } from 'react';
// import image from '../image/testimonial-img.jpg';
import { FaStar } from 'react-icons/fa'; // For rating stars

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Emily Carter",
      location: "Los Angeles, USA",
      text: "Absolutely amazing service! jj food was fresh, and delivery was on time. Highly recommend!",
      rating: 5,
      //image: image,
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai, India",
      text: "Great experience! The variety of options available made ordering so easy. Would use it again.",
      rating: 4,
      //image: image,
    },
    {
      name: "Sophia Martinez",
      location: "London, UK",
      text: "Loved the seamless ordering process. The food was still hot when it arrived. Impressed!",
      rating: 5,
     // image: image,
    },
    {
      name: "Liam O'Connor",
      location: "Dublin, Ireland",
      text: "Affordable pricing and quick delivery. The UI of the app is very user-friendly.",
      rating: 4,
      //image: image,
    },
    {
      name: "Aisha Hassan",
      location: "Dubai, UAE",
      text: "Exceptional service! I appreciate how easy it was to order, and the food quality was top-notch.",
      rating: 5,
     // image: image,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 1000); // Changed from 5000 to 1000 (1 second)
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="py-12 px-4 flex justify-center items-center min-h-[300px] relative bg-cover bg-center" style={{ backgroundImage: `url(${testimonials[currentIndex].image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Optional overlay for better text visibility */}
      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="mb-6">
          <span className="text-blue-800 text-lg md:text-xl font-semibold uppercase tracking-wider">
            TESTIMONIAL
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">
            What Clients Are Saying
          </h2>
        </div>

        <div className="relative">
          <div className="relative z-10 p-4 md:p-6 bg-white rounded-lg shadow-lg transition-all duration-500 ease-in-out flex flex-col md:flex-row items-center">
            <img
              src={testimonials[currentIndex].image}
              alt={`${testimonials[currentIndex].name}'s profile`}
              className="w-16 h-16 md:w-20 md:h-24 rounded-full border-4 border-blue-300 mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm md:text-lg italic mb-4">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="font-semibold text-blue-800 text-lg md:text-xl">
                {testimonials[currentIndex].name}
              </p>
              <div className="flex flex-col space-y-1 mt-2 text-gray-600">
                <div className="flex items-center justify-center md:justify-start">
                  <span>{testimonials[currentIndex].location}</span>
                </div>
                <div className="flex justify-center md:justify-start text-yellow-500 mt-2">
                  {Array.from({ length: testimonials[currentIndex].rating }, (_, i) => (
                    <FaStar key={i} className="text-xl md:text-2xl" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.slice(0, 5).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                  currentIndex === index ? 'bg-blue-800' : 'bg-gray-300'
                } transition-colors duration-300`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] md:left-[-40px] top-1/2 transform -translate-y-1/2 bg-blue-300 rounded-full p-1 md:p-2 shadow-md hover:bg-blue-400 hover:scale-110 transition-all duration-300"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-20px] md:right-[-40px] top-1/2 transform -translate-y-1/2 bg-blue-300 rounded-full p-1 md:p-2 shadow-md hover:bg-blue-400 hover:scale-110 transition-all duration-300"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;