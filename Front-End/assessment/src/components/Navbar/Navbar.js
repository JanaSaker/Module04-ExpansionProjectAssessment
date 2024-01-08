import "./Navbar.css";
import { Link } from 'react-router-dom'

import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-buttons">
        <Link to={"/"}>
            <h3 className="nav-buttons">Dashboard</h3>
        </Link>
        <Link to={"/hikes"}>
            <h3 className="nav-buttons">Products</h3>
        </Link>
        </div>
    </nav>
  )
}

export default Navbar