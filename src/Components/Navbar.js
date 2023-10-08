
import React from 'react'
import "./Navbar.css"
import { NavIcons } from './Nav-Icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [clicked, setClicked] = useState(true)
    const handleClick=()=>{
        setClicked(!clicked)
    }
    return (
        <div className="navbar">
            <h1>Trippy</h1>
            <div className="nav-drop">
                <div  className="ham-cross" onClick={
                    handleClick
                }>
                    <i className={clicked?"fa-solid fa-bars fa-xl":"fa-solid fa-xmark fa-xl"}></i>
                </div>
            </div>
            <ul  className={clicked?"navIcons":"navIcons show-nav"} >
                {NavIcons.map((items, index) => {
                    return (
                        <li>
                            <Link className={items.cName} to={items.url}>
                                <i className={items.icon}></i>
                                {items.title}
                            </Link>
                        </li>
                    )
                })}
                <button>Sign Up</button>
            </ul>
        </div>
    )
}

export default Navbar