import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutUs from '../components/About'
import ContactUs from '../components/Contact'
import FAQSection from '../components/FAQSection'
import Process from '../components/Process'

function AboutPage() {
  return (
    <div>
   <AboutHero />
   <AboutUs/>
   <Process />
   <FAQSection />
   <ContactUs />

    </div>
  )
}

export default AboutPage