import { NavLink } from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import './../styles/index.scss'

export default function Erreur404() {
  document.title = 'Projet 11';
  return (
    <>
    <Menu></Menu>
    <main className="erreur404">
      <h1 className="Erreur404_title">404</h1>
      <h2 className="Erreur404_text">
        Oups ! La page que <br className="erreur_small" />
        vous demandez n'existe pas.
      </h2>
      <NavLink to="/projet11" className="erreur404_link">
        Retourner sur la page d'accueil
      </NavLink>
    </main>
    <Footer></Footer>
    </>
  )
}
