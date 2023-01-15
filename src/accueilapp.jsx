import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Accueil() {
  return (
    <div>
        <h1 className="h1-appWeb">Choississer le projet à visiter</h1>
        <nav>
            <NavLink to="/projet11" className="link-appWeb">Projet 11 site de Location d'appartement</NavLink>
            <NavLink to="/projet12" className="link-appWeb">Projet 12 Tableau analytique avec recharts</NavLink>
        </nav>
    </div>
  )
}
