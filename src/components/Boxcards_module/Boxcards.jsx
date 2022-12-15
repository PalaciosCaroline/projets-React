import React, { useState, useEffect } from "react";
import Cardlogement from "../CardLogement/Cardlogement";
import './boxcards.css'

function Boxcards(props) {
  // const [logements, setlogements] = useState([]);
  // const getlogements = () => {
  //   fetch("data.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       setlogements(myJson);
  //     });
  // };
  // useEffect(() => {
  //   getlogements();
  // }, []);

  return (
    <div className="boxcards">
      {props.logements &&
        props.logements.length > 0 &&
        props.logements.map((logement) => (
          <Cardlogement key={logement.id} logement={logement} />
        ))}
    </div>
  );
}

export default Boxcards;
