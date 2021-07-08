import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarItems from './NavbarItems'
import './Navbar.css'

function Navbar() {

const [open, setOpen] = useState(false)
    return(
        <div>
            <nav>
                <div className="logo">Logo</div>
                <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
                    {NavbarItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} style={{transform: open ? "translateX(0px)" : ""}}>
                                    {item.title}
                                </Link>
                            </li>
                            //  <li>
                            // <Link to="/">Home</Link>
                            // </li> 
                        )
                    })}
                    </ul>
                    <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
            </nav>
        </div>
    )
}

export default Navbar