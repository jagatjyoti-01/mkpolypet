import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apphead from './components/Header'
 

function App() {
 

  return (
   <div >


<Router>
   <Apphead className="w-full fixed top-1 z-41 bg-white/80 backdrop-blur-md shadow-sm">
        {/* Your header content here */}
      </Apphead>
  
  <Routes>
    <Route path="/" element={<Home />} />
    
  </Routes>
</Router>
  
   </div>
  )
}

export default App
