import React from "react";
import { motion } from "framer-motion";
import image from "../assets/image/WasteManagement9.jpg";
import { TbTargetArrow } from "react-icons/tb";
import { BsCrosshair2 } from "react-icons/bs";

const AboutDetails = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl" >
      {/* Title */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-[#34B34c] mb-10 font-custom text-center "
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About MK Polypet India Pvt. Ltd.
      </motion.h1>

      {/* About Section */}
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
        {/* Image */}
        <motion.div
          className="w-full"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={image}
            alt="About"
            className="rounded-xl w-full object-cover "
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#34B34c] mb-4 font-custom">
            Driving Sustainability Through Innovation
          </h2>
          <p className="text-gray-700 text-base md:text-md font-custom1 leading-relaxed">
            MK Polypet India Pvt. Ltd., based in Karnataka, is a pioneer in the recycling and waste management industry. With over 3 years of certified operational excellence, our ISO 14001:2015 and GRS certifications validate our commitment to global standards.
            <br /><br />
            We specialize in recycling PET and other plastic materials by converting waste into reusable, high-quality raw materials. Our state-of-the-art facilities, expert workforce, and eco-conscious mission enable us to tackle plastic pollution at its root. We collaborate with industries, municipalities, and environmental organizations to create a cleaner, more responsible supply chain.
            <br /><br />
            Beyond recycling, we believe in community education, environmental impact reduction, and developing sustainable products. Our leadership is fueled by passion, technical knowledge, and an unyielding drive to transform the future of plastic.
          </p>
        </motion.div>
      </div>

      {/* Vision and Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
        {/* Vision */}
        <motion.div
          className="space-y-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="bg-[#34B34c] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md">
              <BsCrosshair2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#34B34c] font-custom mt-2 md:mt-0">
              Our Vision
            </h3>
          </div>
          <p className="text-gray-700 font-custom1 text-base leading-relaxed">
            Our vision is to lead India’s journey toward a circular economy by revolutionizing how plastic is collected, processed, and reused. We aim to set global benchmarks in responsible recycling and empower communities to adopt sustainable practices.
            <br /><br />
            We envision a future where waste is no longer a problem but a valuable resource that fuels industry and innovation—driven by clean energy, smart systems, and a shared responsibility.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="space-y-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="bg-[#34B34c] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md">
              <TbTargetArrow size={26} />
            </div>
            <h3 className="text-xl font-bold text-[#34B34c] font-custom mt-2 md:mt-0">
              Our Mission
            </h3>
          </div>
          <p className="text-gray-700 font-custom1 text-base leading-relaxed">
            Our mission is to provide sustainable plastic waste solutions through innovation, transparency, and high-quality service. We strive to:
            <ul className="list-disc pl-5 mt-2 space-y-1 text-left">
              <li>Reduce environmental impact by promoting eco-friendly processes</li>
              <li>Deliver consistent quality raw materials to industries</li>
              <li>Educate and involve communities in recycling initiatives</li>
              <li>Adopt the latest technology for maximum efficiency</li>
            </ul>
            <br />
            Every product we reclaim, every community we serve, and every kilo of plastic we recycle brings us closer to a healthier planet.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutDetails;
