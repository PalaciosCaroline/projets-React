import React from 'react'
import PropTypes from 'prop-types'; 
import iconlogo from './../assets/logo_sportseeSVG.svg'
import styled from 'styled-components'
import { palette } from './../theme/styledvariable'

/** render Header_page Nav
  * @param {img} iconlogo
  * @return {JSX FC React} 
  */
export default function Navhorizontale() {
  return (
    <Header>
      <nav>
        <UlHeader>
          <li>
            <Logohome href="/">
              <img src={iconlogo} alt="" />
            </Logohome>
          </li>
          <li>
            <LinkHeader href="/projet12" end="true">
              Accueil
            </LinkHeader>
          </li>
          <li>
            <LinkHeader href="/projet12">Profil</LinkHeader>
          </li>
          <li>
            <LinkHeader href="/projet12">Réglage</LinkHeader>
          </li>
          <li>
            <Linkcv href="https://palacioscaroline.github.io#projet12"><span>Retour CV</span></Linkcv>
          </li>
        </UlHeader>
      </nav>
    </Header>
  )
}

Navhorizontale.propTypes = {
  img: PropTypes.any
}


const Header = styled.header`
  position: relative;
  z-index:2;
  min-height: 91px;
  width:100%;
  @media (max-width: 450px) {
    min-height: 60px;
  } 
  
`

const Linkcv = styled.a`
  border-radius: 20px;
  display: block; 
  text-decoration: none;
  text-align: center;
  @include devices(mobile){
    font-size: 0.7rem;
  }
  &:hover{
    background: linear-gradient(to left,rgba(182, 35, 5, 1) 0%,rgba(159, 36, 11, 1) 100%);
    transform: translatey(1px); 
  }
  span{
    display:block;
    padding-left:10px;
    padding-right:10px;
    background: linear-gradient(to left,rgba(228, 41, 3, 1) 0%,rgba(214, 47, 13, 1) 100%);
    border: 2px solid #b6604f;
  } 
`

const UlHeader = styled.ul`
  font-size: 1.4rem;
  // min-height: 40px;
  line-height : 91px;
  justify-content: space-between;
  // align-items: center;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${palette.colorHeader};
  padding: 0 8% 0 2%;
  @media (max-width: 450px) {
    line-height : 60px;
    padding: 0;
  } 
  a{
    @media (max-width: 1000px) {
      font-size: 1rem;
      margin: 0 10px 0 10px;
    } 
    @media (max-width: 600px) {
      font-size: 0.8rem;
    } 
    
  }
  
`

const Logohome = styled.a`
  width: 178px;
  display: block;
  height:100%;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    width: 60px;
  } 
  img{
    @media (max-width: 600px) {
      width:60px;
    } 
  }
`

const LinkHeader = styled.a`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
`