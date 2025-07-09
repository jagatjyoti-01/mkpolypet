import React from "react";
import owner1 from "../../assets/Owner/owner1.jpg";
import owner2 from "../../assets/Owner/owner2.jpg";
import bgimg from "../../assets/image/bg-hero-circuits.svg"

const Owner = () => {
  const directors = [
    {
      name: "Mohammed Khaja Shah",
      role: "Director",
      image: owner2,
      qualification: "25+ Years Experience | Industry Expert",
      message: `From operations to execution, every step at our recycling plant is optimized for impact. Our team’s dedication ensures that plastic waste is not just managed — it's given a new life. Together, we’re committed to driving positive environmental change across India.`,
    },
    {
      name: "MD HAJI SHAH",
      role: "Director",
      image: owner1,
      qualification: "MBA | 10+ Years Experience",
      message: `As the Director of MK POLYPET INDIA PRIVATE LIMITED, I take immense pride in leading a team that's passionate about sustainability. Our goal isn't just to recycle plastic — it's to create a cleaner, safer world through responsible waste transformation and environmental innovation.`,
    },
    
  ];

  return (
    <section className="bg-white py-4 md:py-16 px-4 sm:px-6 lg:px-20" style={{
            backgroundImage: `url(${bgimg})`,
    
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
          }}>
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Leadership Message
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Learn more about the people guiding our sustainable mission forward.
        </p>
      </div>

      {/* Intro Paragraph */}
      <div className="max-w-4xl mx-auto mb-8 md:mb-16 text-center">
        <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
          At MK POLYPET INDIA PRIVATE LIMITED, our directors bring a wealth of
          experience, vision, and leadership in the field of plastic recycling
          and environmental responsibility. Their commitment to innovation,
          operational excellence, and long-term impact is the driving force
          behind our company’s success.
        </p>
      </div>

      {/* Director Profiles */}
      <div className="space-y-20">
        {directors.map((director, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden   transition-all duration-300">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-contain object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-green-700">
                {director.name}
              </h3>
              <p className="text-sm text-gray-600 font-medium mt-1">
                {director.role} — <span className="italic">{director.qualification}</span>
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
                {director.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Owner;
