import React from 'react'
import ContactUsHero from '../components/Contact/ContactUsHero'
import Contact from "../components/Contact"
import FAQSection from '../components/FAQSection'

function ContactUs() {
  return (
    <div>
        <ContactUsHero/>
        <FAQSection />

<Contact />
         {/* Map Section */}
      <div className="w-full my-8">
        <iframe
  title="MK Polypet India Pvt. Ltd. Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.1026154197985!2d77.0923075!3d17.7584698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbb2ecb5ddbf3b%3A0x0!2zMTfCsDQ1JzMwLjUiTiA3N8KwMDUnNDEuNiJF!5e0!3m2!1sen!2sin!4v1720500000000!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>

      
        

    </div>
  )
}

export default ContactUs