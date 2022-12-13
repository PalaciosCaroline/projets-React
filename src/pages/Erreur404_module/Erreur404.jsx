import {NavLink} from 'react-router-dom';
import './erreur404.css'

export default function Erreur404(){
    
    return(
        <div className="erreur404">
            <h1 className="Erreur404_title">404</h1>
            <h2 className="Erreur404_text">Oups ! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/" className="erreur404_link">Retourner sur la page d'accueil</NavLink>            
        </div>
    )
}