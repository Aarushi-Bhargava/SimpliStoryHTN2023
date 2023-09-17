import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo2 } from "../mascots/robot_head.svg";

const Navbar = () => {
    const location = useLocation()
    return (
        <nav className="nav">
            <ul className="navbar">
                <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
                
                <li><Link to="/search" className={location.pathname === "/search" ? "active" : ""}>Search</Link></li>
                <li><Link to="/news" className={location.pathname === "/news" ? "active" : ""}>Latest News</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;