import React from "react";
import { motion } from "framer-motion";
import Footerimg from "../assets/image/companeyGate.png";
import whiteLogo from "../assets/image/logowhite.png";
import { PiArrowCircleUpBold } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialTwitter, SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { TbShare3 } from "react-icons/tb";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="relative py-12 px-4 sm:px-6 lg:px-28 text-white"
      style={{
        backgroundImage: `url(${Footerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#34B34C]/95 opacity-94 backdrop-blur-sm"></div>

      <div className="container relative mx-auto z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-white">MK Polypet India Pvt. Ltd.</h3>
            <p className="text-gray-200 text-sm">
              A leading plastic recycling company committed to sustainability, innovation, and a cleaner environment. Together, we reshape waste into opportunity.
            </p>
            <div className="flex items-center space-x-3">
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-white bg-white/10 p-2 rounded-full">
                <TbShare3 />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-white bg-[#3b5998] p-2 rounded-full">
                <TiSocialFacebook />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-white bg-[#1DA1F2] p-2 rounded-full">
                <SlSocialTwitter />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-white bg-[#E1306C] p-2 rounded-full">
                <SlSocialInstagram />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-white bg-[#0077b5] p-2 rounded-full">
                <TiSocialLinkedin />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            {[
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/terms-and-conditions" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Blog & News", href: "/blogs" },
  { label: "Gallery", href: "/gallery" }
].map((item, index) => (
  <motion.a
    key={index}
    whileHover={{ x: 5, color: "#fff" }}
    href={item.href}
    className="text-gray-200 block text-sm hover:text-white transition"
  >
    ▸ {item.label}
  </motion.a>
))}

          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white">Our Services</h4>
            {["Plastic Recycling", "Collection & Processing", "Sustainable Solutions", "Custom Raw Material Supply", "Waste Management", "Eco-friendly Consulting"].map((service, index) => (
              <motion.a
                key={index}
                whileHover={{ x: 5, color: "#fff" }}
                href="/services"
                className="text-gray-200 block text-sm hover:text-white transition"
              >
                ▸ {service}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white">Contact Info</h4>
            <p className="text-gray-200 text-sm flex items-center gap-2"><FaMapMarkerAlt className="text-xl" />Humnabad Industrial Area, Humnabad, Karnataka India 585331</p>
            <p className="text-gray-200 text-sm flex items-center gap-2"><FaEnvelope /> <a href="mailto:mkpolypet@gmail.com" className="hover:underline">
    mkpolypet@gmail.com
  </a></p>
            <a href="tel:+9611000960" className="text-gray-200 text-sm flex items-center gap-2"><FaPhone /> +91 96110 00960</a>
            <img src={whiteLogo} alt="MK Polypet Logo" className="mt-4 w-auto h-20" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-green-400 pt-6"
        >
          <p className="text-gray-300 text-sm text-center md:text-left">
            © {new Date().getFullYear()} MK Polypet India Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm text-center md:text-left">
            <a href="/terms-and-conditions" className="hover:text-white">Privacy Policy</a> &nbsp;|&nbsp; <a href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</a>
          </p>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onClick={scrollToTop}
            className="bg-white text-[#34B34C] p-3 rounded-full shadow-lg cursor-pointer"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <PiArrowCircleUpBold size={24} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
