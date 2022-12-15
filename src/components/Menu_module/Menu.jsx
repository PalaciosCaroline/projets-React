import {NavLink} from 'react-router-dom';
import logo from "./logo.svg";
import './menu.css'


export default function Menu(props){
    
    return(
        <>
            <header className="menu">
                    <img className="header_logo" src={logo} alt="logo de Kasa" />
                <menu>
                    <ul>
                        <li><NavLink to="/" end className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Home</NavLink></li>
                        <li><NavLink to="/Apropos" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>A propos</NavLink></li>
                    </ul>
                </menu>
            </header>
        </>
    )
}