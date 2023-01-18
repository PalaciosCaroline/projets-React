import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Accueil() {
  return (
    <div id="wrapperapp">
        <h1 >Choississer le projet à visiter</h1>
        <nav>
            <NavLink to="/projet11" className="link-appWeb">Projet 11<br/> Site de Location d'appartements</NavLink>
            <NavLink to="/projet12" className="link-appWeb">Projet 12<br/> Tableau analytique avec recharts</NavLink>
        </nav>
    </div>
  )
}
