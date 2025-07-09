import React from "react";
import { motion } from "framer-motion";
//import { Target, Crosshair } from "lucide-react";
import image from "../assets/image/WasteManagement9.jpg"; // Update with your local image path
import { FaArrowRight } from "react-icons/fa6";
import { div } from "framer-motion/client";
import { TbTargetArrow } from "react-icons/tb";
import { BsCrosshair2 } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-6 md:py-12 max-w-7xl">
      <motion.h1
        className="text-center text-3xl md:text-5xl font-bold mb-4 md:mb-16 font-custom "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Image with experience badge */}
        <motion.div
          className="relative"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={image}
            alt="Physiotherapist helping patient with exercise"
            className="rounded-lg w-full"
          />
          <motion.div
            className="absolute bottom-0 left-0 md:bottom-4 md:left-4 bg-[#34B34c] text-white p-2 md:p-4 rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="text-xl md:text-3xl font-bold">03+</div>
            <div className="text-xs md:text-sm">Years of Experience</div>
          </motion.div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-4  md:space-y-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold leading-tight font-custom md:text-left text-center text-[#34B34c]">
            Leading Plastic Recycling With Purpose and Innovation
          </h2>

          <p
            className="text-gray-600 leading-relaxed font-custom1 md:text-left text-center line-clamp-4 sm:line-clamp-none"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            MK Polypet India Pvt. Ltd. is a certified recycling company based in
            Karnataka, India. We specialize in the collection, processing, and
            recycling of plastic and other waste materials. With ISO 14001:2015
            and GRS certifications, we turn waste into valuable raw materials.
            Our goal is to promote a cleaner, sustainable future through
            responsible waste management.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <motion.div
              className="space-y-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-[#34B34c] w-12 h-12 rounded-full flex items-center justify-center text-white">
                {/* <Crosshair size={24} /> */}
                <BsCrosshair2 size={24} />
              </div>
              <h3 className="text-xl font-semibold font-custom text-[#34B34c]">
                Our Vision
              </h3>
              <p className="text-gray-600 font-custom1">
                To create a cleaner and more sustainable world by
                revolutionizing how plastic and waste are managed.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-[#34B34c] w-12 h-12 rounded-full flex items-center justify-center text-white">
                {/* <Target size={24} /> */}
                <TbTargetArrow size={24} />
              </div>
              <h3 className="text-xl font-semibold font-custom text-[#34B34c]">
                Our Mission
              </h3>
              <p className="text-gray-600 font-custom1 ">
                To responsibly collect, recycle, and transform waste into
                valuable raw materials for use across industries.
              </p>
            </motion.div>
          </div>
 <Link to="/about-us">
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#34B34c] text-white text-sm sm:text-base font-medium hover:bg-teal-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-200"
          >
            Learn More AboutUs <FaArrowCircleRight className="w-5 h-5" />
          </motion.button>
          </Link>

           <Link to="/contact-us">
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center  gap-2 justify-center px-7 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#34B34c] text-white text-sm sm:text-base font-medium hover:bg-teal-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-200 md:ms-4"
          >
            Contact Our Team <FaArrowCircleRight className="w-5 h-5" />
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
