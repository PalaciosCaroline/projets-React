import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Cardlogement({ logementId, logementCover, logementTitle }) {

  const coverCard = { backgroundImage: `url(${logementCover})` }

  return (
    <NavLink
      to={'/logement/' + logementId}
      className="link_logement"
      aria-label={`lien vers la page du logement ${logementTitle}`}
    >
      <article
        className="card_logement"
        style={coverCard}
      >
        <div className="card_filter"></div>
        <h2>{logementTitle}</h2>
      </article>
    </NavLink>
  )
}
