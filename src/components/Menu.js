import {NavLink} from 'react-router-dom';
import logo from "./../logo.svg";

export default function Menu(){
    
    return(
        <>
            <header className="menu">
                    <img className="header_logo" src={logo} alt="logo de Kasa" />
                <menu>
                    <ul>
                        <li><NavLink exact to="/Home" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Home</NavLink></li>
                        <li><NavLink to="/Apropos" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>A propos</NavLink></li>
                    </ul>
                </menu>
            </header>
        </>
    )
}