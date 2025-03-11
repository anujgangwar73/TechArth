import { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import Home from './pages/home'
import TopNav from './components/topnav'
import Footer from './components/footer'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'
import ScrollToTop from './components/scrollToTop'
import ToastMessage from './components/toastMessage'

const App = () => {

  return (
    <>
      <div className='main-container'>
        <TopNav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      <ToastMessage />
    </>
  )
}

export default App
