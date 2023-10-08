import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import "./ContactStyle.css"
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-contact"
        url="https://eshop.macsales.com/blog/wp-content/uploads/2021/09/travel-youtuber-balloons.jpeg"
        title="Contact Us"
        text=""
      />
      <h2 className='contact-heading'>Send a Message to us</h2>
      <div className="contact-container">
        <form action="" method="post">
          <input type="text" placeholder='Name' required />
          <input type="email" placeholder='Email' required />
          <input type="text" placeholder='Subjet' required />
          <textarea name="message" id="message" cols="30" rows="7" placeholder='Message' required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default Contact