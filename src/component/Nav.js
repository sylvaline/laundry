import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <div className="nav">
                <div className="nav_inner">
                    <div className="logo">
                        <Link to="/">
                        <img src="\image\logo.jpg" alt="logo" />
                        </Link>
                    </div>
                    <div className="menu_centre">
                        <div className="contact_menu">
                            <p>Ask about franchise opportunities: </p>
                            <a href="tel:238-345-345">238-345-3405</a>
                        </div>
                    <ul>
                       <li>
                           <Link to="/about-us">About Us</Link>
                       </li>
                       <li>
                           <Link to="/why-us">Why Us</Link>
                       </li>
                       <li>
                           <Link to="/training-and-support">Training and Support</Link>
                       </li>
                       <li>
                           <Link to="/investment">Investment</Link>
                       </li>
                       <li>
                           <Link to="/faq">FAQ's</Link>
                       </li>
                       <li>
                           <Link to="news">News</Link>
                       </li>
                    </ul>
                    </div>
                    <div className="cta">
                        <button><Link to="/cta_section">REQUEST FRANCHISE INFO</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
