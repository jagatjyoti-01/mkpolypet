import React from 'react'
import Hero from '../component/Hero'
import AboutUs from '../component/AboutUs'
import Process from '../component/Process'
import TrustIndicators from '../component/TrustIndicator'
import Testimonial from '../component/Testimonials'
import BlogSection from '../component/Blog'
import WhyUs from '../component/WhyUs'
import ContactUs from '../component/Contact'
import Footer from '../component/Footer'

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