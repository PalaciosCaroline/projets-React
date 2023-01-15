import React from 'react'
import { NavLink } from 'react-router-dom'
import {MainAccueil} from './choiceuser.style'
import GlobalStyle from './../../theme/globalStyles';

export default function Choiceuser() {
  return (
    <>
    <GlobalStyle />
    <MainAccueil>
      <h1>Accueil<br></br></h1>
      <h2>Choice User</h2>
      <nav>
          <NavLink to="/projet12/user/12">USER 12</NavLink>
          <NavLink to="/projet12/user/18">USER 18</NavLink>
      </nav>
    </MainAccueil>
    </>
  )
}

