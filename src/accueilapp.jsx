import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Accueil() {

  document.title = 'Projet react';
  
  return (
    <div id="wrapperapp">
        <h1 >Choose the project to visit</h1>
        <nav>
            <NavLink to="/projet11" className="link-appWeb">Projet 11<br/>Apartment rental website</NavLink>
            <NavLink to="/projet12" className="link-appWeb">Projet 12<br/>Analytical table with recharts</NavLink>
        </nav>
    </div>
  )
}
