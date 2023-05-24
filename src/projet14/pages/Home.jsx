import React from "react";
import { NavLink } from 'react-router-dom'
import logoHRnet from './../assets/logoHRnet_bg.png'
import './../../projet14/index.scss';
import { FaUserPlus, FaUsers} from 'react-icons/fa';

export default function HomeProjet14() {
  document.title = 'Projet 14';
  return (
    <div className='wrapper_projet14'>
       <main className="box_home" data-testid="home">
      <img src={logoHRnet} alt="" className="logoHome" />
      <h1 data-testid="title_home">Welcome to HRnet Service !</h1>
      <br />
      <a href="https://palacioscaroline.github.io#projet14" className="link_CV14" rel="noopener noreferrer">
            Retour web CV 
              </a>
      <nav className="box_navHome">
      <NavLink to="/projet14/newemployee" className="linkNewEmployee"> <FaUserPlus className='iconLink'/><span className='textLink'>Add New Employee</span></NavLink>
          <NavLink to="/projet14/listemployees" className=" linkListEmployee"><FaUsers className='iconLink'/><span className='textLink'>View Current Employees</span></NavLink>
      </nav>
    </main>
    </div>
  )
}
