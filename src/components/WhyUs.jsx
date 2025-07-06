import React from 'react';
import { FaHeart, FaStethoscope, FaUserMd } from 'react-icons/fa';

function WhyChoseUs() {
  const cards = [
    {
      icon: <FaStethoscope className="text-4xl text-primary mb-4" />,
      title: "Expert Therapists",
      description: "Our certified therapists tailor each session to your unique needs for effective recovery.",
    },
    {
      icon: <FaHeart className="text-4xl text-primary mb-4" />,
      title: "Holistic Care",
      description: "We focus on both mind and body to ensure complete wellness and long-lasting relief.",
    },
    {
      icon: <FaUserMd className="text-4xl text-primary mb-4" />,
      title: "Modern Equipment",
      description: "State-of-the-art physiotherapy tools for pain management, rehab, and performance training.",
    },
    {
      icon: <FaStethoscope className="text-4xl text-primary mb-4" />,
      title: "Expert Therapists",
      description: "Our certified therapists tailor each session to your unique needs for effective recovery.",
    },
    {
      icon: <FaHeart className="text-4xl text-primary mb-4" />,
      title: "Holistic Care",
      description: "We focus on both mind and body to ensure complete wellness and long-lasting relief.",
    },
    {
      icon: <FaUserMd className="text-4xl text-primary mb-4" />,
      title: "Modern Equipment",
      description: "State-of-the-art physiotherapy tools for pain management, rehab, and performance training.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-custom">
          Why Choose Us?
        </h2>
        <h3 className="text-2xl md:text-5xl font-medium text-secondary1 mt-2 font-custom">
          Get Your Life Style Back
        </h3>
        <p className="mt-4 max-w-3xl mx-auto text-secondary2 font-custom1 text-sm md:text-lg">
          Experience personalized physiotherapy treatments that restore your mobility, reduce pain, and improve your quality of life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              {card.icon}
              <h4 className="text-xl font-semibold text-secondary1 mt-2">{card.title}</h4>
              <p className="text-secondary2 mt-2 text-sm font-custom1">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChoseUs;
