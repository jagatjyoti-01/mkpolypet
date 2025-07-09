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
import Galary from './pages/Gallery'
import BlogPage from './pages/BlogPage'
import LegalPage from './pages/LegalPage'

import ScrollToTop from './components/ScrollToTop'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'

import ProtectedRoute from './routes/ProtectedRoute'

function App() {
 

  return (
   <div >


<Router>
   <Apphead className="w-full fixed top-1 z-41 bg-white/80 backdrop-blur-md shadow-sm">
        {/* Your header content here */}
      </Apphead>
  <ScrollToTop />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutPage/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/contact-us" element={<ContactUs/>} />
    <Route path="/faq" element={<Faq/>} />
    <Route path="/gallery" element={<Galary/>} />
    <Route path="/blog" element={<BlogPage/>} />
    <Route path="/terms-and-conditions" element={<LegalPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    
  </Routes>
  <Footer/>

</Router>
  
   </div>
  )
}

export default App
