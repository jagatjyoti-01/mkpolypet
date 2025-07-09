import React, { useState, useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";

import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/image/logodark.png";
import logowhite from "../assets/image/logowhite.png";
import { RxCross2 } from "react-icons/rx";

import { FaUser } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Services", path: "/services" },
  { label: "FAQ", path: "/faq" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact-us" },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
      <div
         className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`} // <-- scroll enabled here
        onClick={(e) => e.stopPropagation()}
       
      >
        <div className="p-2 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#34B34C] hover:bg-gray-100 transition-colors duration-300"
            aria-label="Close menu"
          >
            <RxCross2 className="w-5 h-5 text-white" />

            {/* <X className="w-6 h-6 text-gray-700" /> */}
          </button>
        </div>
        <nav className="p-4 pt-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="block py-2 px-5 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>


        <div className="mt-auto p-4 space-y-4">
  {/* Row 1: Call & WhatsApp */}
  <div className="flex flex-row gap-2">
    <a
      href="tel:+9611000960"
      className="flex-1 bg-blue-600 text-white py-1 px-5 text-center rounded-lg transition-all duration-300 hover:bg-blue-700"
    >
      Call Now
    </a>
    <a
      href="https://wa.me/919611000960"
      className="flex-1 bg-green-600 text-white py-1 px-5 text-center rounded-lg transition-all duration-300 hover:bg-green-700"
    >
      WhatsApp
    </a>
  </div>

  {/* Row 2: Login */}
  <a
    href="/login"
    className="block bg-green-600 text-white py-1 px-5 text-center rounded-lg transition-all duration-300 hover:bg-green-700"
  >
    Login
  </a>
</div>

      </div>
    </div>
  );
}

function Header({ toggleSidebar }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-40 backdrop-blur-md shadow-sm transition-colors duration-300
        ${scrolled ? "bg-[#34B34C] md:text-white" : ""}
      `}
    >
      {/* Top Bar */}
      {/* Main Navigation */}
      <div className="container mx-auto px-4  ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className={`relative group flex items-center text-2xl rounded-full px-4 py-1 transition-colors duration-300
              ${scrolled ? "md:text-white" : ""}
            `}
          >
            <img
              src={scrolled ? logowhite : logo}
              alt="CB Physio Therapy"
              className="md:h-16 h-12 w-auto"
            />
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 group-hover:w-full transition-all duration-300" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`relative group py-2 transition-colors duration-300
                  ${scrolled ? "md:text-white" : ""}
                `}
              >
                <span
                  className={`font-medium transition-colors duration-300 ${window.location.pathname === item.path
                    ? scrolled
                      ? "md:text-white"
                      : "text-[#34B34C] group-hover:text-[#34B34C]"
                    : scrolled
                      ? "md:text-white"
                      : "group-hover:text-[#34B34C] text-gray-700"
                    }`}
                >
                  {item.label}
                </span>
                
                <div
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${window.location.pathname === item.path
                    ? scrolled
                      ? "md:bg-white w-full"
                      : "bg-teal-600 w-full"
                    : scrolled
                      ? "md:bg-white w-0 group-hover:w-full"
                      : "bg-teal-600 w-0 group-hover:w-full"
                    }`}
                />
                
              </Link>
            ))}
            <Link
            to="/login"
            className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center"
            aria-label="Login"
          >
            
            <FaUser className={`w-6 h-6 ${scrolled ? "text-white" : "text-[#34B34C]"} lg:text-inherit`} />
          </Link>
          </nav>

          

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <RiMenu3Line className={`w-6 h-6 ${scrolled ? " text-white" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}

function Apphead() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}

export default Apphead;
