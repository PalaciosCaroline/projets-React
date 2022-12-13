import React,{useState,useEffect} from 'react';
import Cardlogement from './Cardlogement';

function Boxcards() {
  const [logements,setlogements]=useState([]);
  const getlogements=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setlogements(myJson)
      });
  }
  useEffect(()=>{
    getlogements()
  },[])

  return (
    <div className="boxcards">
     {
       logements && logements.length>0 && logements.map((logement) => (<Cardlogement key={logement.id} logement={logement}/>))
     }
    </div>
  );
}

export default Boxcards;