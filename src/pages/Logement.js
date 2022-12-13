import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function Logement(props){

    let { id } = useParams();
    // let logement = props.logements.map((logement) => logement.id === id)

    return (
        <div className="logement">
         
        <h1>Titre du logement</h1>
        
      
        </div>
        )
}