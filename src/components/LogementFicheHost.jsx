// import { FaStar} from 'react-icons/fa';

export default function LogementFicheHost({ logement }) {
  let firstNameAndLastName = logement.host.name.split(' ')
  let firstName = firstNameAndLastName[0]
  let lastName = firstNameAndLastName[1]

  //star rating
  let numberOfRating = parseInt(logement.rating)
  let starTotal = [1, 2, 3, 4, 5]

  return (
    <div className="logementFiche_boxHost">
      <div className="boxHost">
        <div className="nameAndSurname" aria-label="nom du propriétaire">
          <h3>{firstName}</h3>
          <h3>{lastName}</h3>
        </div>
        <img src={logement.host.picture} alt="" />
      </div>
      <div
        className="star"
        aria-label="avis de {logement.rating} étoiles sur 5"
      >
        {starTotal.map((starItem) => (
          <p
            className={
              starItem <= numberOfRating ? 'star_colorred' : 'star_empty'
            }
            key={`star-${starItem}`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  )
}
