import React from 'react'
import ContactUsHero from '../components/Contact/ContactUsHero'
import Contact from "../components/Contact"
import FAQSection from '../components/FAQSection'

function ContactUs() {
  return (
    <div>
        <ContactUsHero/>
        <FAQSection />


         {/* Map Section */}
      <div className="w-full my-8">
        <iframe
          title="Bangalore Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.858066985024!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c1b2c1b1%3A0x7d0b0c0b0b0b0b0b!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      
        <Contact />

    </div>
  )
}

export default ContactUs