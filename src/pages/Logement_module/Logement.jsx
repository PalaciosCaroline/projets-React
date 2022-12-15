import React from 'react'
import { useState, useEffect } from 'react';
import Modalslide from '../../components/Modalslide_module/Modalslide';
import { useParams } from "react-router-dom";
import { FaStar,  } from 'react-icons/fa';
import './logement.css'

export default function Logement(props){
    const [logement, setlogement] = useState({tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}});

    let { id } = useParams();
   
  
    useEffect (function (){
        for (let i=0; i<props.logements.length; i++){
            if (props.logements[i].id === id){
                setlogement(props.logements[i])
            }
        }
        // setlogement(props.logements.filter((item) => item.id === {id}))
    },[]);
   
       console.log(logement)
       let numberOfRating = logement.rating;
       numberOfRating = parseInt(numberOfRating)

    let star = [1,2,3,4,5]

      return (

        <div className="box_logementFiche" >
    
          <Modalslide imgs={logement.pictures}/>
         <main>
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
        </main>
        </div>
        )
}