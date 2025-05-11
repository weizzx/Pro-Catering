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
                    <Link to="/"><h1>Pro Catering</h1></Link>
                </div>
                <div className="links">
                    <div className="home"><NavLink to='/' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><h2>Úvod</h2></NavLink></div>
                    <div className="menu"><NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='/Menu'><h2>Menu</h2></NavLink></div>
                    <div className="contacts"><NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='/Contacts'><h2>Kontakt</h2></NavLink></div>
                </div>
            </div>
        </div>
        </>
    )
}
