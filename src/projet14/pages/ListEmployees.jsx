import React from 'react'
import { useSelector } from "react-redux";
import TableEmployees from '../components/TableEmployees';
import { NavLink } from 'react-router-dom'
import logoHRnet from './../assets/logoHRnet_bg.png'
import './../../projet14/index.scss';

export default function ListEmployees() {

  const employees = useSelector(state => state.employees);

  return (
 
  <div className='wrapper_projet14'>
    <header className='header_ListEmployees'>
      <div className='box_logoService'>
        <img src={logoHRnet} alt="" />
        <p className="titleService">HRnet</p>
      </div>
      <NavLink to="/projet14/newemployee" className="linkNewEmployee">Add New Employee</NavLink>
    </header>
    <main className='main_ListEmployees'>
        <TableEmployees employees={employees} title={(<h1>List of employees</h1>)}/>
    </main>
    </div>

  )
}
