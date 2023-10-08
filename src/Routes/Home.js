import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Destinations from '../Components/Destinations'
import ServicesPoster from '../Components/ServicesPoster'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero 
          cName="hero-home"
          url="https://serenaslenses.net/wp-content/uploads/2018/04/Patagonia-Travel-Guide-Cover.jpg" 
          title="Your Journey Your Story" 
          text="Choose Your Favourite Destination"
        />
        <Destinations/>
        <ServicesPoster/>
        <Footer/>
    </>
  )
}

export default Home