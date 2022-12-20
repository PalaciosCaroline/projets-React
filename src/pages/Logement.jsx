import React from "react";
import { useState, useEffect } from "react";
import Modalslide from "../components/Modalslide";
import { useParams } from "react-router-dom";
import LogementFicheHeader from "../components/LogementFicheHeader";
import LogementFicheMain from "../components/LogementFicheMain";


export default function Logement(props) {
  const [logement, setlogement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    host: { name: "", picture: "" },
  });

  let { id } = useParams();

  useEffect(function () {
    // if (window.location.reload){
    fetch("/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let logementNew = [{}];
        logementNew = data.find((item) => item.id === id);
        setlogement(logementNew);
      });
    // } else {
    //     let logementNew = [{}];
    //     logementNew = props.logements.find((item) => item.id === id)
    //     if (logementNew){
    //     setlogement(logementNew)
    //     }
    // }
  }, []);

  return (
    <main className="box_logementFiche">
      <Modalslide imgs={logement.pictures} />
      <LogementFicheHeader logement={logement} />
      <LogementFicheMain logement={logement} />
    </main>
  );
}

// {props.logements.filter((logement) => logement.id === id).map((logement) =>
//     <div className="box_logementFiche" key={`box-${logement.id}`}>

//       <Modalslide imgs={logement.pictures}/>
//         <main>
//             <LogementFicheHeader logement={logement}/>

//         </main>
//     </div>
//     )}
