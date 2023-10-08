import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import "./AboutStyle.css"
import Footer from '../Components/Footer'

const About = () => {
  return (
    <><Navbar />
      <Hero
        cName="hero-about"
        url="https://www.playonloop.com/wp-content/uploads/2019/06/background-music-for-travel-vlog.jpg"
        title="About us"
        text=""
      />
      <div className="about-us">
        <div className="history">
          <h1>Our History</h1>
          <p>Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. Trippy .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence.</p>
        </div>
        <div className="mission">
          <h1>Our Mission</h1>
          <p>Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness.</p>
        </div>
        <div className="vision">
          <h1>Our Vision</h1>
          <p>To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients.</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About