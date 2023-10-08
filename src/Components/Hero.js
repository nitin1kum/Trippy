import React from 'react'
import "./HeroStyle.css"

const Hero = (props) => {
  return (
    <>
      <div className={props.cName + " hero"}>
          <img src={props.url} alt="" />
        <div className="home-imf">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href="/">Travel Plan</a>
        </div>
      </div>
    </>
  )
}

export default Hero