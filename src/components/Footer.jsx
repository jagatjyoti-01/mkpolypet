import React from "react";
import { motion } from "framer-motion";
//import logo from "../image/logo.png";
import Footerimg from "../assets/image/herosubimg.webp"
import { PiArrowCircleUpBold } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { TbShare3 } from "react-icons/tb";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div
      className="relative py-10 px-4 sm:px-6 lg:px-28 text-white"
      style={{
         backgroundImage: `url(${Footerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to fade the background image */}
      <div className="absolute inset-0 bg-black/92 bg-opacity-90"></div>

      <div className="container relative mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div>
              {/* <img src={logo} alt="logo" className="w-32 h-auto" /> */}
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorem impedit eos autem dolores laudantium quia, qui similique.
            </p>
            <div className="flex items-center space-x-3">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-white bg-transparent p-2"
              >
                <TbShare3 />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-white bg-blue-500 p-2 rounded-full"
              >
                <TiSocialFacebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-white bg-blue-400 p-2 rounded-full"
              >
                <SlSocialTwitter />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-white bg-pink-500 p-2 rounded-full"
              >
                <SlSocialInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-white bg-blue-700 p-2 rounded-full"
              >
                <TiSocialLinkedin />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <h4 className="text-xl font-semibold">Quick Links</h4>
            {["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions", "Our Blog & News", "Our Team"].map((item, index) => (
              <motion.a
                key={index}
                whileHover={{ x: 5, color: "#38bdf8" }}
                href="#"
                className="text-gray-400 block text-sm sm:text-base"
              >
                <i className="fas fa-angle-right mr-2"></i> {item}
              </motion.a>
            ))}
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-3"
          >
            <h4 className="text-xl font-semibold">Terapia Services</h4>
            {["All Services", "Physiotherapy", "Diagnostics", "Manual Therapy", "Massage Therapy", "Rehabilitation"].map((service, index) => (
              <motion.a
                key={index}
                whileHover={{ x: 5, color: "#38bdf8" }}
                href="#"
                className="text-gray-400 block text-sm sm:text-base"
              >
                <i className="fas fa-angle-right mr-2"></i> {service}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-3"
          >
            <h4 className="text-xl font-semibold">Contact Info</h4>
            <p className="text-gray-400 text-sm sm:text-base">
              <i className="fa fa-map-marker-alt mr-2"></i> 123 Street, New York, USA
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              <i className="fas fa-envelope mr-2"></i> info@example.com
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              <i className="fas fa-phone mr-2"></i> +012 345 67890
            </p>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-5"
        >
          <p className="text-gray-400 text-sm sm:text-base text-center md:text-left mb-4 md:mb-0">
            © MK Polypet . All rights reserved.
          </p>
          <p className="text-gray-400 text-sm sm:text-base text-center md:text-left mb-4 md:mb-0">
            Designed by <a href="#" className="text-blue-400 hover:underline">--</a>
          </p>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onClick={scrollToTop} // Add onClick event to scroll to top
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <PiArrowCircleUpBold />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;