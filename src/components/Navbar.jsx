import { NavLink, Link } from "react-router-dom"
import Logo from "../assets/icons/logo.png";
import '../css/Navbar.css'

export function Navbar() {

    return (
        <>
        <div className="navbar">
            <div className="inner">
                <div className="logo">
                    <Link to="/"><img className="logo-img" src={ Logo } /></Link>
                    <Link to="/"><h2>Pro Catering</h2></Link>
                </div>
                <div className="links">
                    <div className="l-home"><NavLink to='/' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><h3>Úvod</h3></NavLink></div>
                    <div className="l-menu"><NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='/Menu'><h3>Menu</h3></NavLink></div>
                    <div className="l-contacts"><NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='/Contacts'><h3>Kontakt</h3></NavLink></div>
                </div>
            </div>
        </div>
        </>
    )
}
