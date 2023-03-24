import React from "react";
import { NavLink } from 'react-router-dom'
import logoHRnet from './../assets/logoHRnet_bg.png'
import './../../projet14/index.scss';

export default function HomeProjet14() {
  document.title = 'Projet 14';
  return (
    <div className='wrapper_projet14'>
    <main className='box_home'>
        <img src={logoHRnet} alt="" className="logoHome"/>
        <h1>HRnet</h1><br/>
        <nav className="box_navHome">
          <NavLink to="/projet14/newemployee" className="linkNewEmployee">Add a new employee</NavLink>
          <NavLink to="/projet14/listemployees" className="linkNewEmployee linkListEmployee">View the employees's list</NavLink>
        </nav>
    </main>
    </div>
  )
}
