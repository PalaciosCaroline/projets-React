import { FaStar} from 'react-icons/fa';
import './logementFicheHeader.css'


export default function LogementFicheHeader(props) {
let logement = props.logement
    let numberOfRating = logement.rating;
    numberOfRating = parseInt(numberOfRating)

    let starTotal = [1,2,3,4,5]

    const nameAndSurname = logement.host.name.split(" ");

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
                            <h3>{nameAndSurname[0]}</h3>
                            <h3>{nameAndSurname[1]}</h3>
                            </div>
                            <img src={logement.host.picture} alt=""/>
                        </div>
                        <div className="star" aria-label="avis {logement.rating} étoiles sur 5" >
                        {starTotal.map((number) => (
                    <FaStar
                        className={`${
                        (number <= numberOfRating ? "icon_star star_colorred" : "icon_star star_empty")}`}
                        key={`star-${number}`} aria-hidden="true"
                    ></FaStar>
                    ))}
                        </div>
                    </div>
            </header>
    )

}