import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ServicesPoster from '../Components/ServicesPoster'
import Footer from '../Components/Footer'

const Services = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-services"
        url="https://www.wizardlifestyle.com/assets/img/blog/travel.jpg"
        title="Services Provided By Us"
        text=""
      />
      <ServicesPoster/>
      <Footer/>
    </>
  )
}

export default Services