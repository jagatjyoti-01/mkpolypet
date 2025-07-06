import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Process from '../components/Process'
import TrustIndicators from '../components/TrustIndicator'
import Testimonial from '../components/Testimonials'
import BlogSection from '../components/Blog'
import WhyUs from '../components/WhyUs'
import ContactUs from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
<Hero />
<AboutUs />
<Process/>
<TrustIndicators />
<Testimonial />
<BlogSection />
<WhyUs />
<ContactUs />
<Footer />


    </div>
  )
}

export default Home