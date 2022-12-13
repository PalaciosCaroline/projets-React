import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './logement.css'

export default function Logement(props){

    let { id } = useParams();

    return (
        <div className="logement">
         
        <h1>Titre du logement</h1>
        
      
        </div>
        )
}