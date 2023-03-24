import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Accueil() {
  document.title = 'Projet react';
  return (
    <div id="wrapperapp">
        <h1 >Choississer le projet à visiter</h1>
        <nav>
            <NavLink to="/projet11" className="link-appWeb">Projet 11<br/> Site de Location d'appartements</NavLink>
            <NavLink to="/projet12" className="link-appWeb">Projet 12<br/> Tableau analytique avec recharts</NavLink>
            <NavLink to="/projet14" className="link-appWeb">Projet 14<br/> Gestion des nouveaux employées</NavLink>
        </nav>
    </div>
  )
}
