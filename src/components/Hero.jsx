"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation"; // 👈 Added
import HeroImage from "../assets/image/Heroimag.jpg";
import herosubimg1 from "../assets/image/herosubimg.webp";
import herosubimage2 from "../assets/image/i (2).webp";
import herosubimage3 from "../assets/image/i (3).webp";
import herosubimage4 from "../assets/image/i.webp";
import herosubimage5 from "../assets/image/shutterstock_1492626947.jpg";
import herosubimage6 from "../assets/image/WasteManagement9.jpg";
import herosubimage7 from "../assets/image/XXL_height.webp";
import herosubimage8 from "../assets/image/Screenshot 2025-07-06 025312.png";
import herosubimage9 from "../assets/image/Screenshot 2025-07-06 023421.png";
import { FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
  const images = [
    herosubimg1,
    herosubimage2,
    herosubimage3,
    herosubimage4,
    herosubimage5,
    herosubimage9,
    herosubimage6,
    herosubimage7,
    herosubimage8,
  ];

  return (
    <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] mt-[56px] sm:mt-[72px] overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 ease-out">
        <img
          src={HeroImage}
          alt="Plastic recycling plant"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#34B34C] via-green-100 to-transparent sm:from-green-200 sm:via-green-300 sm:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-5xl space-y-4 sm:space-y-6 py-12 sm:py-16 lg:py-20">
          {/* Eyebrow text */}
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-teal-50 border">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <motion.span
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="text-xs sm:text-sm font-medium text-primary"
            >
              India’s Green Partner
            </motion.span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-custom text-center">
            <motion.span
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.3 }}
              className="block text-gray-900 leading-tight"
            >
              Turning Waste into Worth
            </motion.span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-custom text-center">
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Recycling for a Greener{" "}
              </span>
              <span className="inline-block min-w-[120px] text-transparent bg-gradient-to-r from-green-800 to-green-600 bg-clip-text">
                <TypeAnimation
                  sequence={[
                    "Future",
                    2000,
                    "Planet",
                    2000,
                    "World",
                    2000,
                    "Tomorrow",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                />
              </span>
            </h1>
          </h1>

          {/* Description */}
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="text-sm sm:text-lg text-secondary2 leading-relaxed mx-auto md:pt-4 font-custom1 text-center max-w-4xl text-gray-900 font-normal"
            style={{
              fontFamily: "Roboto, sans-serif",
            }}
          >
            We are a team of dedicated professionals focused on sustainable
            plastic recycling. Our mission is to reduce pollution and create raw
            materials through responsible waste management.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 pt-2 sm:pt-4 md:items-center md:justify-center md:pb-14 mx-auto text-center">
            <a
              href="/book-appointment"
              className="inline-flex gap-2 items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-teal-600 text-white text-sm sm:text-base font-medium hover:bg-teal-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-200"
            >
              Request a Pickup
              <FaArrowCircleRight className="w-5 h-5" />
            </a>
            <a
              href="/services"
              className="inline-flex gap-2 items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-teal-600 text-sm sm:text-base font-medium border-2 border-teal-100 hover:border-teal-200 hover:bg-teal-50 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Join Our Team<FaArrowCircleRight className="w-5 h-5" />
            </a>
          </div>

          {/* Image Carousel */}
          <div className="relative w-screen sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1500px] overflow-hidden mt-8 sm:mt-12 -ml-4 sm:ml-0">
            <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex gap-3 sm:gap-4 animate-scroll">
              {[...images, ...images].map((image, index) => (
                <div
                  key={index}
                  className="flex-none w-32 sm:w-40 md:w-48 h-24 sm:h-28 md:h-32 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Recycling ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradients */}
      <div className="hidden sm:block absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-teal-100/30 to-transparent rounded-tl-full" />
      <div className="hidden sm:block absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-bl-full" />
    </div>
  );
};

// Add scrolling animation
const style = document.createElement("style");
style.textContent = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-scroll {
    display: flex;
    animation: scroll 20s linear infinite;
    will-change: transform;
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-scroll {
      animation: none;
    }
  }
`;
document.head.appendChild(style);

export default Hero;
