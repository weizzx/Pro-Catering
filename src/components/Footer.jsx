import { NavLink, Link } from "react-router-dom"
import Logo from "../assets/icons/logo-fill.png"
import '../css/Footer.css'


export function Footer() {
    return (
        <>
          <div className="footer">
            <div className="inner">
              <hr />
              <div>
                <p>Copyright © 2025. Všechny práva vyhrazena</p>
                <p>Stránka vytvořena s &#9829; <a href="https://weizzx.xyz">weizzx</a></p>
              </div>
            </div>
          </div>
        </>
    )
}
