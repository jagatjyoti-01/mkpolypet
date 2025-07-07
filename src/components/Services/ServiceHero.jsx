import React from 'react'
import bannerImg from '../../assets/image/aboutHeroimag.jpg'; // Update path as needed

function ServiceHero() {
  return (
    <div
         className="relative h-[300px] md:h-[430px] flex items-center justify-center bg-cover bg-center"
         style={{ backgroundImage: `url(${bannerImg})` }}
       >
         <div className="absolute inset-0 bg-[#34B34C]/50 backdrop-blur-sm"></div>
         <div className="relative z-10 text-center text-white px-4">
           <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
           <p className="text-sm md:text-lg max-w-xl mx-auto text-gray-300">
             Learn more about our mission, vision, and commitment to sustainable plastic recycling.
           </p>
         </div>
       </div>
  )
}

export default ServiceHero