import { NavLink } from 'react-router-dom'

export default function Erreur404() {
  return (
    <main className="erreur404">
      <h1 className="Erreur404_title">404</h1>
      <h2 className="Erreur404_text">
        Oups ! La page que <br className="erreur_small" />
        vous demandez n'existe pas.
      </h2>
      <NavLink to="/" className="erreur404_link">
        Retourner sur la page d'accueil
      </NavLink>
    </main>
  )
}
