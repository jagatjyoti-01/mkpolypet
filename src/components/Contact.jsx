"use client";

import React, { useRef, useState } from 'react';
import bgimg from "../assets/image/bg-hero-circuits.svg";

//import emailjs from '@emailjs/browser';
//import { Check, Calendar, ChevronDown, Play } from 'lucide-react';

export default function ContactUs() {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm('service_wgaceav', 'template_ifegiss', form.current, {
        publicKey: 'jr1PBSjlmuxH9HKXX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitSuccess(true);
          setIsSubmitting(false);
          if (form.current) form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center p-4 md:p-8 gap-8">
      {/* Left Section - Services Info */}
      <div className="w-full md:w-1/2 max-w-2xl" style={{
              backgroundImage: `url(${bgimg})`,
      
              backgroundPosition: "center",
              position: "relative",
              overflow: "hidden",
            }}>
        <h3 className="text-black text-xl md:text-2xl  mb-2 font-bold" style={{fontFamily:"roboto"}}>
          SOLUTIONS TO YOUR PAIN{' '}
          <span className="ml-4 inline-block w-24 h-0.5 bg-cyan-500"></span>
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-[#34B34C] mb-6 leading-tight">
          Smart Solutions to Plastic Waste  
        </h1>

        <p className="text-gray-500 mb-8">
Join hands with India’s leading recycling experts to transform plastic waste into valuable resources, reduce environmental impact, and build a cleaner, greener, and more sustainable future together.        </p>

        <div className="mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-cyan-100 rounded-full p-1">
              {/* <Check className="text-cyan-500 w-5 h-5" /> */}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Plastic Waste Management
              </h3>
              <p className="text-gray-500">
               Comprehensive collection and recycling services tailored for industries, municipalities, and communities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-6">
            <div className="bg-cyan-100 rounded-full p-1">
              {/* <Check className="text-cyan-500 w-5 h-5" /> */}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Sustainable Processing Methods
              </h3>
              <p className="text-gray-500">
                Eco-friendly technologies that reduce pollution and maximize the reuse of plastic waste.
              </p>
            </div>
          </div>

          <button className="bg-[#34B34C] hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-full transition-colors">
            More Details
          </button>
        </div>

       
      </div>

      {/* Right Section - Appointment Form */}
      <div className="w-full md:w-1/2 max-w-xl bg-coral-50 rounded-lg p-8">
        <h3 className="text-black text-xl font-medium mb-2">Ready to Recycle Smarter?</h3>
        <h2 className="text-4xl font-bold text-[#34B34C] mb-6">
Partner with us for smarter recycling.        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="First Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="from_number"
              placeholder="Phone"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <div className="relative">
              <input
                name="Company Name"
                defaultValue=""
                placeholder='Company Name(Optional)'
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none"
              >
                
               
              </input>
              {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" /> */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="date"
                name="appointment_date"
                placeholder="dd-mm-yyyy"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {/* <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" /> */}
            </div>
            <div className="relative">
              <input
                name="Location"
                placeholder='Location'
                defaultValue=""
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none"
              >
                
              </input>
              {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" /> */}
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Write Comments"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#34B34C] hover:bg-cyan-600 text-white font-medium py-4 px-6 rounded-lg transition-colors disabled:bg-gray-400"
          >
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT NOW'}
          </button>

          {submitSuccess && (
            <div className="text-green-600 text-center mt-2">
              Your  request has been submitted successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
