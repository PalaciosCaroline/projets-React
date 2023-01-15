import React from 'react'
import Collapse from './Collapse'

export default function LogementFicheMain({ logement }) {
  return (
    <div className="LogementFiche_boxArticles">
      <Collapse
        title="Description"
        content={logement.description}
        key={`${logement.title}-${logement.id}`}
      />
      <Collapse
        title="Equipements"
        content={
          <ul className="equipement_list">
            {logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        }
      />
    </div>
  )
}
