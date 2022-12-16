import React from 'react'
import { useState, useEffect } from 'react';
import Modalslide from '../../components/Modalslide_module/Modalslide'
// import Accordion from '../../components/Accordion_module/Accordion';
import { useParams } from "react-router-dom";
import LogementFicheHeader from '../../components/LogementFicheHeader_module/LogementFicheHeader';
import LogementFicheMain from '../../components/LogementFicheMain_module/LogementFicheMain';
import './logement.css'

export default function Logement(props){
const [logement, setlogement] = useState({tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}});

    let { id } = useParams();
  
    // let logementNew = props.logements.find((item) => item.id === id)
// setlogement(logementNew)
    useEffect (function (){
        let logementNew = [{}];
    logementNew = props.logements.find((item) => item.id === id)
    if (logementNew){
        setlogement(logementNew)
    }
    },[]);
   
    return (
        <div className="box_logementFiche">
             <main>
                <Modalslide imgs={logement.pictures}/>
                <LogementFicheHeader logement={logement}/>
                <LogementFicheMain logement={logement}/>
            </main>
    </div> 
    )
}


// {props.logements.filter((logement) => logement.id === id).map((logement) =>
//     <div className="box_logementFiche" key={`box-${logement.id}`}>

//       <Modalslide imgs={logement.pictures}/>
//         <main>
//             <LogementFicheHeader logement={logement}/>
            
//         </main>
//     </div>
//     )}