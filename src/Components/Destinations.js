import React from 'react'
import "./DestinationStyle.css"
import { DestinationData } from './DestinationData'

const Destinations = () => {
    return (
        <>
            <div className="destination-headings">
                <h1>Popular Destination</h1>
                <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            </div>
            {DestinationData.map((items, index) => {
                return (
                    index < 2 ?
                        <div className={index/2===0?"popular-destinations-container":"popular-destinations-container direction"}>
                            <div className="about-destination">
                                <h2>{items.destinationName}</h2>
                                <p>{items.aboutDes}</p>
                            </div>
                            <div className='destination-img'>
                                <img id='des-img1' src={items.desImg1} alt="" />
                                <img id='des-img2' src={items.desImg2} alt="" />
                            </div>
                        </div>
                        : ""
                )
            })}

        </>
    )
}

export default Destinations