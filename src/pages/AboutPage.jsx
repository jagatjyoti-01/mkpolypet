import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutUs from '../components/About'
import ContactUs from '../components/Contact'
import FAQSection from '../components/FAQSection'
import Process from '../components/Process'
import Owner from '../components/About/Owner'
import AboutDetails from '../components/AboutDetails'

function AboutPage() {
  return (
    <div>
   <AboutHero />
   <AboutDetails/>
   <Owner />
   <Process />
   <FAQSection />
   <ContactUs />

    </div>
  )
}

export default AboutPage