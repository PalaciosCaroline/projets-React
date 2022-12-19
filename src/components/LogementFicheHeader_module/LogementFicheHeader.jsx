// import { FaStar} from 'react-icons/fa';
import './logementFicheHeader.css'

export default function LogementFicheHeader(props) {
    let logement = props.logement
   
    let firstNameAndLastName = logement.host.name.split(" ");
    let firstName = firstNameAndLastName[0];
    let lastName = firstNameAndLastName[1];

    //star rating
    let numberOfRating = logement.rating;
    numberOfRating = parseInt(numberOfRating)
    let starTotal = [1,2,3,4,5]

    return(
        <header className='logementFiche_header'>
            <div className='box_logementFicheTitle'>
                <h1 className='logementFiche_title'>{logement.title}</h1>
                <h2 className='logementFiche_sstitle'>{logement.location}</h2>
                <div className='box_logementFicheTags'>
                {logement.tags.map((item, index) => (<div key={`${item}-${index}`} className='logementFiche_tags'>{item}</div>))}
                </div>
            </div>
            <div className="logementFiche_boxHost">
                <div className='boxHost'>
                    <div className='nameAndSurname' aria-label="nom du propriétaire">
                    <h3>{firstName}</h3>
                    <h3>{lastName}</h3>
                    </div>
                    <img src={logement.host.picture} className="host_picture" alt=""/>
                </div>
                <div className="star" aria-label="avis de {logement.rating} étoiles sur 5" >
                    {starTotal.map((starItem) => (
                    <p className={`icon_star ${(starItem <= numberOfRating ?  "star_colorred" : "star_empty")}`} key={`star-${starItem}`}  aria-hidden="true"/>
                    ))}
                </div>
            </div>
        </header>
    )
}