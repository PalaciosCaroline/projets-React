import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <>
      <header className="menu">
        <div className="box_logo">
          <p className="header_logo"></p>
        </div>
        <nav className="box_nav">
          <ul>
          
            <li>
            <a href="https://palacioscaroline.github.io" target="_blank" className="link_CV11" rel="noopener noreferrer">
            Retour web CV 
              </a>
              </li>
              <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'activeLink' : undefined
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Apropos"
                className={({ isActive }) =>
                  isActive ? 'activeLink' : undefined
                }
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
