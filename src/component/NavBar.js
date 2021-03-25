import React from "react";
import  './NavBar.css';
import { NavLink } from "react-router-dom";

function NavBar()
{
    return(
 <div>
     <nav className="navbar">
        <div className="nav-container">
        <div className="nav-logo">
           <h1>Axiom</h1> 
  
           </div>
        <ul className="nav-menu">
            <li className="nav-item">
            <NavLink exact to="/"activeClassName="active" className="nav-link">
            Home
        </NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact to="/About" className="nav-link">
            About
        </NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact to="/Log" className="nav-link">
            Log In
        </NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact to="/Services" className="nav-link">
            Services
        </NavLink>
            </li>
        </ul>
        </div>
     </nav>
 </div>
    );
}
export default NavBar;