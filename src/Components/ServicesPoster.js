import React from 'react'
import serviceContext from './ServicesContext'
import "./ServicesStyle.css"

const ServicesPoster = () => {
  return (
    <>
    <div className="service-heading">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      </div>
      <div className="services-container">
        
        {serviceContext.map((items, index) => {
          return (
            <div className="service-poster">
              <div className="location-image">
                <img className='service-img' src={items.url} alt="" />
              </div>
              <h2>Trip To {items.loacation} </h2>
              <p>{items.aboutLocation}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ServicesPoster