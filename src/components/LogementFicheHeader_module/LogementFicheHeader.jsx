import { FaStar} from 'react-icons/fa';
import './logementFicheHeader.css'


export default function LogementFicheHeader(props) {
let logement = props.logement
    let numberOfRating = logement.rating;
    numberOfRating = parseInt(numberOfRating)

    let star = [1,2,3,4,5]

return(
    <>
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
                            <h3>{logement.host.name}</h3>
                            <img src={logement.host.picture} alt=""/>
                        </div>
                        <div className="star" aria-label="{logement.rating} star" >
                        {star.map((number) => (
                    <FaStar
                        className={`${
                        (number <= numberOfRating ? "star_colorred" : "star_empty")}`}
                        key={`star-${number}`} aria-hidden="true"
                    ></FaStar>
                    ))}
                        </div>
                    </div>
            </header>
        </>
    )

}