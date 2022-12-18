import React from 'react';
import {NavLink} from 'react-router-dom';
import './cardLogement.css'

export default function Cardlogement(props) {

    return(
        <>
        <NavLink to={"/logement/"+props.logement.id} className="link_logement" aria-label="lien vers la page du logement">
            <div className="card_logement" style={{backgroundImage:`url(${props.logement.pictures[0]})`}}>
                <h2 className="logement_title">{props.logement.title}</h2>
            </div>
        </NavLink>
        </>
        )
}

