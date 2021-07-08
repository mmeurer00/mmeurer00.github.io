import React from 'react'
import { Link } from 'react-router-dom'
import NavbarItems from './NavbarItems'
import './Navbar.css'

class Navbar extends React.Component {
    render(){
        return(
            <div>
                <nav>
                    <div className="logo">Logo</div>
                        {NavbarItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                </nav>
            </div>
        )
    }
}

export default Navbar