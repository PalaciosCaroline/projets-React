import React from 'react'
import { useState, useEffect } from 'react';
import Modalslide from '../../components/Modalslide_module/Modalslide';
import { useParams } from "react-router-dom";
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

      return (

        <div className="box_logementFiche" >
          <div>
          <div className="slideshow_location">
          <Modalslide imgs={logement.pictures}/>
      </div>
            <div>
                {logement.tags}
            </div>
            </div>
        </div>
        )
}