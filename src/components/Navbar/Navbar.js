import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarItems from './NavbarItems'
import './Navbar.css'

function Navbar() {

const [open, setOpen] = useState(false)
    return(
        <div>
            <nav>
                <a href="/" className="logo">
                    <img src={"https://i.imgur.com/WcswvNC.png"} alt="logo" className="logo"/>
                </a>
                
                <button onClick={() => {document.body.classList.toggle('dark')}} className="light"><i class="fas fa-cloud-sun"></i></button>
                <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
                    {NavbarItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} style={{transform: open ? "translateX(0px)" : ""}} className="link" id="link">
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    </ul>
                    <i onClick={() => {if (open == false) {setOpen(!open)} else {setOpen(open)}}} className="fas fa-bars burger"></i>
            </nav>
        </div>
    )
}

export default Navbar