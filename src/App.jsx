import React from 'react'
import Home from './Landing/Home/Home'
import { Routes, Route, Outlet } from 'react-router-dom'
import SignUp from './Landing/SignUp/SignUp'
import About from './Landing/About/About'
import Product from './Landing/Products/ProductPage'
import Pricing from './Landing/Pricing/PricingPage'
import Support from './Landing/Support/Support'


const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />

    </Routes>
  )
}

export default App