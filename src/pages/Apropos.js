import Bannerapropos from '../components/Banner_apropos';
import { FaBeer } from 'react-icons/fa';

export default function Apropos(){
 
    return (
        <div className="apropos">
             {<Bannerapropos/>}
             <div className="box box_fiabilite">
              <button className='btn_fiabilite'><span>Fiabilité</span><FaBeer/></button>
                    <div className='div_text'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</div>
             </div>
             <div className='box box_respect'>
                <button className='btn_respect'>Respect</button>
                <div className='div_text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
             </div>
             <div className='box box_service'>
                <button className='btn_service'>Service</button>
                <div className='div_text'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
             </div>
             <div className='box box_securite'>
                <button className='btn_securite'>Sécurité</button>
                <div className='div_text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
             </div>
        </div>
        )
}