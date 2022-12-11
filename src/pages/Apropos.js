import Bannerapropos from '../components/Banner_apropos';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';


export default function Apropos(){
 
   const [setActive, setActiveState] = useState("");
   const [setOpen, setOpenState] = useState("");
   // const [setClose, setCloseState] = useState("isClose");

   function toggleChevron() {
      setOpenState(setActive === "" ? "isOpen" : "");
      setActiveState(setActive === "" ? "active" : "");
   //   setCloseState(setActive === "active" ? "" : "isClose");
   }

    return (
      
        <div className="apropos">
             {<Bannerapropos/>}
             <div className={`box box_fiabilite ${setActive}`}>
              <button className="btn_fiabilite" onClick={toggleChevron}><span>Fiabilité</span>
              <FaAngleDown className={`iconDown ${setOpen}`}/><FaAngleUp className={`iconUp ${setOpen}`}/></button>
                    <div className={`div_text ${setOpen}`}><span>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</span></div>
             </div>
             <div className='box box_respect'>
                <button className={`btn_respect ${setActive}`} onClick={toggleChevron}><span>Respect</span><FaAngleDown className={`iconDown ${setOpen}`}/><FaAngleUp className={`iconUp ${setOpen}`}/></button>
                <div className={`div_text ${setOpen}`}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
             </div>
             <div className='box box_service'>
                <button className={`btn_service ${setActive}`} onClick={toggleChevron}><span>Service</span><FaAngleDown className={`iconDown ${setOpen}`}/><FaAngleUp className={`iconUp ${setOpen}`}/></button>
                <div className={`div_text ${setOpen}`}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
             </div>
             <div className='box box_securite'>
                <button className={`btn_securite ${setActive}`} onClick={toggleChevron}><span>Sécurité</span><FaAngleDown className={`iconDown ${setOpen}`}/><FaAngleUp className={`iconUp ${setOpen}`}/></button>
                <div className={`div_text ${setOpen}`}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
             </div>
        </div>
        )
}