
import React from 'react';
import "../css/Header.css"
import companyLogo from "../assets/logo.png";
import { NavLink } from "react-router-dom";





function Header() {
    return (
        <header>
        <nav>
            <div className="logo">
                <img src={companyLogo} alt="logo"></img>
            </div>
            <div className="comname">
                <h3>Filcon Sales & Service</h3>
            </div>
            <ul className="nav_links">
                <li><NavLink to="/">Home</NavLink></li> 
                <li><a href="#">About Us</a></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><a href="#">Log In</a></li>           
            </ul>
            <div className="burger">
                <div className="toggle-icons">
                    <i className="bars"/>
                    
                </div>
                    
            </div>
        </nav>    
    </header>

    );
}

export default Header;