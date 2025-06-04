import { NavLink, Link } from "react-router-dom"
import { useState } from 'react'
import Logo from "../assets/icons/logo.png"
import Menu from "../assets/icons/hamburger-icon.svg"
import '../css/Navbar.css'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="inner">
        <div className="logo">
          <Link to="/"><img className="logo-img" src={Logo} /></Link>
          <Link to="/"><h2>Pro Catering</h2></Link>
        </div>

        {/* Hamburger Button */}
        <button onClick={toggleMenu}>
          <img className="menu-img" src={Menu} alt="Menu" />
        </button>

        {/* Links container with conditional class */}
        <div className={`links menu ${isMenuOpen ? "open" : ""}`}>
          <div className="l-home">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='/'><h3>Úvod</h3></NavLink>
          </div>
          <div className="l-menu">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='/Menu'><h3>Menu</h3></NavLink>
          </div>
          <div className="l-contacts">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='/Contacts'><h3>Kontakt</h3></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
