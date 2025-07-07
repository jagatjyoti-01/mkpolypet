import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Process from '../components/Process'
import TrustIndicators from '../components/TrustIndicator'
import Testimonial from '../components/Testimonials'
import BlogSection from '../components/Blog'
import WhyUs from '../components/LearnToRecycle'
import ContactUs from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
<Hero />
<About />
<Process/>
<TrustIndicators />
<Testimonial />
<BlogSection />
<WhyUs />
<ContactUs />



    </div>
  )
}

export default Home