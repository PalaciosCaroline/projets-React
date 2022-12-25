import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Cardlogement({logement}) {

    return(
        <NavLink to={"/logement/"+logement.id} className="link_logement" aria-label={`lien vers la page du logement ${logement.title}`}>
            <div className="card_logement" style={{backgroundImage:`url(${logement.cover})`}}>
                <div className='card_filter'></div>
                <h2>{logement.title}</h2>
            </div>
        </NavLink>
        )
}

