import {NavLink} from 'react-router-dom';
import logo from "./../logo.svg";

export default function Menu(){
    
    return(
        <div className="menu">
                <img className="header_logo" src={logo} alt="logo de Kasa" />
            <ul>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Home</NavLink></li>
                <li><NavLink to="/list" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>A propos</NavLink></li>
            </ul>
        </div>
    )
}