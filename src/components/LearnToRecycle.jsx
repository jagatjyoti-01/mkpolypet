import React from 'react';
import { FaRecycle, FaTint, FaTag, FaTrashAlt, FaMapMarkerAlt, FaBan } from 'react-icons/fa';

function LearnToRecycle() {
  const cards = [
    {
      icon: <FaRecycle className="text-4xl text-green-600 mb-4" />,
      title: "Know Your Plastics",
      description: "Understand the types of plastics (PET, HDPE, LDPE) and what can or can't be recycled.",
    },
    {
      icon: <FaTint className="text-4xl text-green-600 mb-4" />,
      title: "Clean Before You Recycle",
      description: "Rinse bottles and containers to ensure higher-quality recycling output.",
    },
    {
      icon: <FaTag className="text-4xl text-green-600 mb-4" />,
      title: "Remove Labels & Caps",
      description: "Caps and labels can disrupt recycling — remove them before disposal.",
    },
    {
      icon: <FaTrashAlt className="text-4xl text-green-600 mb-4" />,
      title: "Separate by Category",
      description: "Sort plastics separately from food waste, electronics, and metals for efficient recycling.",
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-green-600 mb-4" />,
      title: "Drop-Off Locations",
      description: "Use designated bins, collection centers, or community drives to dispose responsibly.",
    },
    {
      icon: <FaBan className="text-4xl text-green-600 mb-4" />,
      title: "Say No to Single-Use",
      description: "Avoid straws, bags, and cutlery — switch to reusable, eco-friendly alternatives.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 font-custom">
          Recycle Plastic the Right Way
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-secondary2 font-custom1 text-sm md:text-lg">
          Empower yourself with simple practices that make a big impact on the planet. Learn how to properly sort, clean, and recycle plastics in your daily life.
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

export default LearnToRecycle;
