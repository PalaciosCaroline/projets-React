import React from 'react'
import { useState, useEffect } from 'react';
import Modalslide from '../../components/Modalslide_module/Modalslide';
import { useParams } from "react-router-dom";
import { FaStar,  } from 'react-icons/fa';
import LogementFicheHeader from '../../components/LogementFicheHeader_module/LogementFicheHeader';
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
   
    // console.log(logement)
    // let numberOfRating = logement.rating;
    // numberOfRating = parseInt(numberOfRating)

    // let star = [1,2,3,4,5]

    return (

        <div className="box_logementFiche" >
    
          <Modalslide imgs={logement.pictures}/>
            <main>
                <LogementFicheHeader logement={logement}/>
                
            </main>
        </div>
    )
}