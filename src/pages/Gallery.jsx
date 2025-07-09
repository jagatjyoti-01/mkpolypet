import React, { useState } from 'react';
import bannerImg from '../assets/image/companeyGate.png';

//companey gallery component
import machine1 from '../assets/companey/machine1.jpg';
import machine2 from '../assets/companey/machine2.jpg';
import machine3 from '../assets/companey/machine3.jpg';
import machine4 from '../assets/companey/machine4.jpg';
import machine5 from '../assets/companey/machine5.jpg';
import machine6 from '../assets/companey/machine6.jpg';

//output gallery component
import output1 from '../assets/companey/output1.jpg';
import output2 from '../assets/companey/output2.jpg';
import output3 from '../assets/companey/output3.jpg';

//office gallery component
import office1 from '../assets/office/office1.jpg';
import office2 from '../assets/office/office2.jpg';
import office3 from '../assets/office/office3.jpg';

//office gate
import officeGate from '../assets/image/companeyGate.png';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: office1,
      alt: "Company office entrance and reception area",
      category: "office"
    },
    {
      id: 2,
      src: office2,
      alt: "Team working in the company office",
      category: "office"
    },
    {
      id: 3,
      src: office3,
      alt: "Meeting room at MK Polypet office",
      category: "office"
    },
    {
      id: 4,
      src: output1,
      alt: "Recycled PET flakes ready for processing",
      category: "products"
    },
    {
      id: 5,
      src: output2,
      alt: "Final output of processed plastic granules",
      category: "products"
    },
    {
      id: 6,
      src: output3,
      alt: "Baled plastic bottles ready for recycling",
      category: "products"
    },
    {
      id: 7,
      src: machine1,
      alt: "Industrial plastic shredding machine",
      category: "technology"
    },
    {
      id: 8,
      src: machine2,
      alt: "PET washing line machinery",
      category: "technology"
    },
    {
      id: 9,
      src: machine3,
      alt: "Plastic granule extrusion line",
      category: "technology"
    },
    {
      id: 10,
      src: machine4,
      alt: "Plastic flake drying system",
      category: "technology"
    },
    {
      id: 11,
      src: machine5,
      alt: "Automated conveyor system in factory",
      category: "technology"
    },
    {
      id: 12,
      src: machine6,
      alt: "Close-up of recycling machine control panel",
      category: "technology"
    },
    {
      id: 12,
      src:officeGate,
      alt: "Company entrance gate ",
      category: "companey"
    },
  ];

  const categories = ["all", ...new Set(images.map(img => img.category))];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div>
      <div
        className="relative h-[300px] md:h-[430px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-[#34B34C]/50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-sm md:text-lg max-w-xl mx-auto text-gray-300">
            See How We’re Making a Difference.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Plastic Recycling Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our recycling process, innovative technologies, and sustainable products made from recycled plastics.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full capitalize transition-all ${
                selectedCategory === category
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-md cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="mt-2 px-2">
                <h3 className="text-sm font-semibold capitalize text-gray-700">{image.category}</h3>
                <p className="text-xs text-gray-500 truncate">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10 hover:bg-black/75"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto object-contain rounded-lg"
              />
              <div className="bg-gray-900 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-bold capitalize">{selectedImage.category}</h3>
                <p className="text-gray-300">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
