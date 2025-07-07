import React, { useState, useEffect } from 'react';
// import image from '../image/testimonial-img.jpg';
import { FaStar } from 'react-icons/fa'; // For rating stars
import image from "../assets/image/recyclebottle.jpg"

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
  {
    name: "Anjali Sharma",
    location: "Bangalore, India",
    text: "MK Polypet's recycling process is truly impressive. Our company has partnered with them for over a year, and we've seen a significant reduction in our plastic waste footprint.",
    rating: 5,
    image: image,
  },
  {
    name: "biswa ranjan",
    location: "Singapore",
    text: "Their commitment to sustainability and quality is unmatched. The recycled materials we receive are always top-notch and help us meet our green goals.",
    rating: 5,
    image: image,
  },
  {
    name: "sanjay kumar",
    location: "Chennai, India",
    text: "MK Polypet India Pvt. Ltd. has made plastic recycling easy and efficient for our business. Their team is professional and always delivers on time.",
    rating: 4,
    image: image,
  },
  {
    name: "kumar prasant",
    location: "Patna, Bihar",
    text: "We appreciate MK Polypet's transparent process and their dedication to environmental responsibility. Highly recommended for anyone looking to recycle plastics.",
    rating: 5,
    image: image,
  },
  {
    name: "Rajesh sarma",
    location: "bbsr ,Odisha",
    text: "Thanks to MK Polypet, our company has achieved its sustainability targets. Their recycled plastic products are of excellent quality.",
    rating: 5,
    image: image,
  },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Changed from 5000 to 1000 (1 second)
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
      <div className="absolute inset-0 bg-green-900/60  bg-opacity-30"></div> 
      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="mb-6">
          <span className="text-white -800 text-lg md:text-3xl font-bold uppercase tracking-wider" style={{fontFamily:"roboto"}}>
           __ TESTIMONIAL __
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