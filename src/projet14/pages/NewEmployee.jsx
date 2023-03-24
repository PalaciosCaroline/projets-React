import React from 'react'
import FormNewEmployee from '../components/FormNewEmployee'
import { NavLink } from 'react-router-dom'
import logoHRnet from './../assets/logoHRnet_bg.png'
import './../../projet14/index.scss';

export default function NewEmployee() {
  return (
    <div className='wrapper_projet14'>
    <header className='header_ListEmployees'>
      <div className='box_logoService'>
        <img src={logoHRnet} alt="" />
        <p className="titleService">HRnet</p>
      </div>
      <NavLink to="/projet14/listemployees" className="linkNewEmployee linkListEmployee">
        List of current employees</NavLink>    
    </header>
    <main className='main_newEmployee containerNewEmployee'> 
      {/* <div className="containerNewEmployee"> */}
          <h1>Create Employee</h1>
          <FormNewEmployee />
      {/* </div> */}
    </main>
    </div>
  )
}