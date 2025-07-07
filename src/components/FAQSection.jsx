import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import bgimg from "../assets/image/bg-hero-circuits.svg";

const faqs = [
  {
    question: "What types of plastic do you recycle?",
    answer:
      "We recycle PET, HDPE, LDPE, and other industrial plastic materials. These are collected from municipal sources, manufacturing units, and scrap dealers and are processed into reusable raw materials.",
  },
  {
    question: "Do you offer pickup services for bulk plastic waste?",
    answer:
      "Yes, we provide pickup and logistics services for bulk quantities. Whether you are a business, municipality, or institution, our team ensures efficient and timely collection of your plastic waste.",
  },
  {
    question: "Are you ISO certified?",
    answer:
      "Absolutely. Our facility is ISO 14001:2015 certified, ensuring we maintain strict environmental management practices during collection, segregation, and recycling of plastic waste.",
  },
  {
    question: "Can I partner with your recycling plant?",
    answer:
      "We actively collaborate with companies, NGOs, and government bodies for responsible plastic waste management. Partnership opportunities include bulk processing, awareness campaigns, and recycling credits.",
  },
  {
    question: "What happens to the plastic after recycling?",
    answer:
      "The plastic is processed into granules or PET flakes and then sold as raw material for manufacturing new plastic products. This reduces the need for virgin plastic production and promotes circular economy.",
  },
  {
    question: "Do you recycle other waste types?",
    answer:
      "Yes, besides plastic, we also handle electronic waste, bio-medical waste, solid municipal waste, and construction debris, depending on client needs and compliance with environmental standards.",
  },
  {
    question: "Where is your recycling plant located?",
    answer:
      "Our plant is located in Humnabad Industrial Area, Bidar, Karnataka. The site is equipped with advanced recycling machinery and adheres to national safety and environmental regulations.",
  },
  {
    question: "How can I request a service or quote?",
    answer:
      "You can use our contact form to reach out or call our support team directly. We’ll get back to you with a custom quote based on your requirements, waste type, and quantity.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16" style={{
            backgroundImage: `url(${bgimg})`,
    
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
          }}>
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2">
          Clear answers to your queries about our recycling process, services, and partnerships.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-green-600 font-semibold text-lg transition-colors"
            >
              {faq.question}
              <FaChevronDown
                className={`ml-2 text-green-500 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`px-6 pt-0 pb-4 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
                openIndex === index ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
