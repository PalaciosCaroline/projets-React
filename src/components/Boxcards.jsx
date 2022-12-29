import React from 'react'
import Cardlogement from './Cardlogement'

export default function Boxcards({ logements }) {
  return (
    <div className="boxcards">
      {logements &&
        logements.length > 0 &&
        logements.map((logement) => (
          <Cardlogement key={logement.id} logementId={logement.id} logementCover={logement.cover} logementTitle={logement.title} />
        ))}
    </div>
  )
}
