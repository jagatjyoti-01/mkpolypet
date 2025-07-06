import React from "react";
import { motion } from "framer-motion";
// 1) Make sure to install react-icons: npm install react-icons
import serviceimage1 from "../assets/image/serviceimg1.webp";
import serviceimage2 from "../assets/image/serviceimag2.webp";
import {
  FaCertificate,
  FaRecycle,
  FaUsersCog,
  FaMapMarkedAlt,
  FaGlobeAsia,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { GiFactory, GiLeafSwirl } from "react-icons/gi";
import { BsShieldCheck } from "react-icons/bs";

import bgimg from "../assets/image/bg-hero-circuits.svg";

export default function Process() {
  // Original Services Data
  const services = [
    {
      title: "Plastic Waste Collection",
      description:
        "Efficient on-site pickup of plastic and solid waste from various sources including scrap dealers and industries.",
      image: serviceimage1,
      alt: "PPlastic Waste Collection img",
    },
    {
      title: " Segregation & Sorting",
      description:
        "Manual and automated separation of recyclable materials to ensure quality output and reduced contamination.",
      image: serviceimage2,
      alt: "Segregation & Sorting imag",
    },
    {
      title: "Processing & Recycling",
      description:
        "Advanced recycling of collected waste into usable raw materials like PET flakes and plastic granules.",
      image:serviceimage1 ,
      alt: "PProcessing & Recycling img",
    },
    {
      title: "Hazardous & E-Waste Handling",
      description:
        "Safe treatment and disposal of electronic, biomedical, and hazardous waste in compliance with environmental laws.",
      image: serviceimage2,
      alt: "Hazardous & E-Waste Handling img ",
    },
    {
      title: "Production of Recycled Products",
      description:
        "Manufacturing high-quality recycled plastic products ready for industrial reuse and export.",
      image: serviceimage1,
      alt: "Patient using digital physiotherapy platform",
    },
    {
      title: "Sales & Distribution",
      description:
        "Supply and export of recycled plastic granules and by-products across India and global markets.",
      image: serviceimage2,
      alt: "Patient using digital physiotherapy platform",
    },
    // {
    //   title: "Regular Therapy",
    //   description:
    //     "Digital Physio Assistant FIZO for personalized PT exercises at home. Enables affordable & long-term care Mgmt",
    //   image: "/assets/service-7.jpg",
    //   alt: "Patient using digital physiotherapy platform",
    // },
    // {
    // title: " Back Pain",
    //   description:
    //     "Digital Physio Assistant FIZO for personalized PT exercises at home. Enables affordable & long-term care Mgmt",
    //   image: "/assets/service-8.jpg",
    //   alt: "Patient using digital physiotherapy platform",
    // },
  ];

  // Additional Info Cards Data
  const infoCards = [
    {
      icon: <BsShieldCheck className="text-4xl text-[#34B34C]" />,
      title: "ISO 14001:2015 Certified",
      description:
        "Recognized for maintaining high environmental management standards.",
    },
    {
      icon: <MdVerified className="text-4xl text-[#34B34C]" />,
      title: "GRS Compliant Facility",
      description:
        "Certified under Global Recycle Standard (Version 4.0) for responsible recycling.",
    },
    {
      icon: <FaRecycle className="text-4xl text-[#34B34C]" />,
      title: "TEnd-to-End Waste Handling",
      description:
        "From collection to recycling, we manage the full waste life cycle.",
    },
    {
      icon: <GiFactory className="text-4xl text-[#34B34C]" />,
      title: "Modern Recycling Infrastructure",
      description:
        "State-of-the-art equipment for efficient and eco-friendly processing.",
    },
    {
      icon: <FaUsersCog className="text-4xl text-[#34B34C]" />,
      title: "Skilled Workforce",
      description:
        "A dedicated team trained in handling all types of waste safely.",
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-[#34B34C]" />,
      title: " Pan-India Operations",
      description:
        "Expanding reach across India through reliable logistics and partnerships.",
    },
    {
      icon: <GiLeafSwirl className="text-4xl text-[#34B34C]" />,
      title: "Eco-Conscious Approach",
      description:
        "Minimizing environmental impact through sustainable practices.",
    },
    {
      icon: <FaGlobeAsia className="text-4xl text-[#34B34C]" />,
      title: "Global Market Presence",
      description:
        "Exporting high-quality recycled materials across international markets.",
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-12 md:py-16"
      style={{
        backgroundImage: `url(${bgimg})`,

        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* SECTION HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive waste management services designed to
          transform plastic and other waste into valuable, eco-friendly
          resources.
        </p>
      </motion.div>

      {/* ORIGINAL 3 SERVICES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-500"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 flex flex-col">
              <div className="h-2/3 bg-[#34B34C] opacity-40 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="h-1/2 bg-teal-500 opacity-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>

            {/* Service Image */}
            <div className="aspect-video relative hover:scale-110 transition-transform duration-300">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.alt}
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>

            {/* Service Info */}
            <div className="p-6 text-center relative z-10">
              <h3 className="text-2xl font-semibold text-[#34B34C] mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* NEW INFO CARDS (8 CARDS) */}
      <div className="mt-16">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl font-bold text-gray-800 my-8  md:my-12"
        >
          Our Special Highlights
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }} // Added hover scale animation for "excellent" feel
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Bottom-left half circle */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#34B34C] to-[#1fa437] rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

              {/* Top-right half circle */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-sky-300 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>

              {/* Card content */}
              <div className="relative z-10 mb-4">{card.icon}</div>
              <h4 className="relative z-10 text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h4>
              <p className="relative z-10 text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* More Details Button */}
        <div className="text-center mt-8">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: infoCards.length * 0.1 }}
            className="px-6 py-2 bg-[#34B34C] text-white rounded-full hover:bg-teal-600 transition-colors duration-300 font-semibold"
          >
            More Details
          </motion.button>
        </div>
      </div>
    </section>
  );
}
