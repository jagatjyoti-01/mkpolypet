"use client";

import React, { useRef, useState } from 'react';
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
      <div className="w-full md:w-1/2 max-w-2xl">
        <h3 className="text-cyan-500 text-xl font-medium mb-2">
          SOLUTIONS TO YOUR PAIN{' '}
          <span className="ml-4 inline-block w-24 h-0.5 bg-cyan-500"></span>
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
          Best Quality Services With Minimal Pain Rate
        </h1>

        <p className="text-gray-500 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          deleniti amet at atque sequi quibusdam cumque itaque repudiandae
          temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
          saepe in ab? Repellat!
        </p>

        <div className="mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-cyan-100 rounded-full p-1">
              {/* <Check className="text-cyan-500 w-5 h-5" /> */}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Body Relaxation
              </h3>
              <p className="text-gray-500">
                Lorem met, consectetur adipisicing elit. 
                deserunt qui cupiditate Etveritatis enim ducimus.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-6">
            <div className="bg-cyan-100 rounded-full p-1">
              {/* <Check className="text-cyan-500 w-5 h-5" /> */}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Body Relaxation
              </h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                deserunt qui cupiditate veritatis enim ducimus.
              </p>
            </div>
          </div>

          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-full transition-colors">
            More Details
          </button>
        </div>

        <div className="relative mt-8 rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Massage therapy session"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-coral-500 bg-opacity-90 rounded-full p-6 cursor-pointer hover:bg-opacity-100 transition-all">
              {/* <Play className="w-8 h-8 text-white" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Appointment Form */}
      <div className="w-full md:w-1/2 max-w-xl bg-coral-50 rounded-lg p-8">
        <h3 className="text-cyan-500 text-xl font-medium mb-2">GET IN TOUCH</h3>
        <h2 className="text-4xl font-bold text-slate-800 mb-6">
          Get Appointment
        </h2>

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
              <select
                name="gender"
                defaultValue=""
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none"
              >
                <option value="" disabled>
                  Your Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
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
              <select
                name="department"
                defaultValue=""
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none"
              >
                <option value="" disabled>
                  Department
                </option>
                <option value="massage">Massage Therapy</option>
                <option value="physical">Physical Therapy</option>
                <option value="chiropractic">Chiropractic</option>
                <option value="acupuncture">Acupuncture</option>
              </select>
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
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-4 px-6 rounded-lg transition-colors disabled:bg-gray-400"
          >
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT NOW'}
          </button>

          {submitSuccess && (
            <div className="text-green-600 text-center mt-2">
              Your appointment request has been submitted successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
