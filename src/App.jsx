import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apphead from './components/Header'
import AboutPage from './pages/AboutPage'
import Footer from './components/Footer'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import Faq from './pages/Faq'
 

function App() {
 

  return (
   <div >


<Router>
   <Apphead className="w-full fixed top-1 z-41 bg-white/80 backdrop-blur-md shadow-sm">
        {/* Your header content here */}
      </Apphead>
  
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutPage/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/contact-us" element={<ContactUs/>} />
    <Route path="/faq" element={<Faq/>} />
    
  </Routes>
  <Footer/>

</Router>
  
   </div>
  )
}

export default App
