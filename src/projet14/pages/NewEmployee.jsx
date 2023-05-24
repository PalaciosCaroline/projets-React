import React from 'react'
import FormNewEmployee from '../components/FormNewEmployee'
import { NavLink } from 'react-router-dom'
import logoHRnet from './../assets/logoHRnet_bg.png'
import './../../projet14/index.scss';
import { FaUsers } from 'react-icons/fa';

export default function NewEmployee() {
  document.title = 'Projet 14';
  
  return (
    <div className='wrapper_projet14'>
      <header className='header_ListEmployees'>
        <div className='box_logoService'>
          <img src={logoHRnet} alt="" />
          <p className="titleService">HRnet</p>
        </div>
        <a href="https://palacioscaroline.github.io#projet14" className="link_CV14" rel="noopener noreferrer">
              Retour web CV 
                </a>
        <NavLink to="/projet14/listemployees" className="linkNewEmployee">
        <FaUsers className='iconLink'/><span className='textLink'> View Current employees</span>
        </NavLink>    
      </header>
      <main className='main_newEmployee containerNewEmployee'> 
            <h1>Create Employee</h1>
            <FormNewEmployee />
      </main>
    </div>
  )
}