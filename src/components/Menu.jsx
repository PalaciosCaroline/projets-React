import {NavLink} from 'react-router-dom';

export default function Menu(props){
    
    return(
        <>
            <header className="menu">
                <div className='box_logo'>
                    <p className="header_logo"></p>
                </div>
                <nav className="box_nav">
                    <ul>
                        <li><NavLink to="/" end className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink></li>
                        <li><NavLink to="/Apropos" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>A propos</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}