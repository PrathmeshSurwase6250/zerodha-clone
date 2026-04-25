import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Navber from './Navbar'
import Footer from './Footer'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navber />
    <App />
    <Footer />
  </BrowserRouter>
 
)
