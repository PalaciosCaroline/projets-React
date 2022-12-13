import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


import Datalogements from './../getData';

export default function Logement(){

    let { id } = useParams();

    return (
        <div className="logement">
         
        <h1>Logement à créer</h1>
      
        </div>
        )
}