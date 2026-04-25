import React from 'react'
import Navber from '../../Navbar'
import Hero from '../Home/Hero'
import Awards from '../Home/Award'
import Pricing from '../Home/Pricing'
import Education from '../Home/Education'
import OpenAccount from '../Home/OpenAccount'
import Footer from '../../Footer'

const Home = () => {
  return (
    <>
    <Navber />
    <Hero />
    <Awards />
    <Pricing />
    <Education />
    <OpenAccount />
    <Footer />
    </>
  )
}

export default Home