import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SlideShow from "../components/SlideShow";
import LogementFicheHost from "../components/LogementFicheHost";
import LogementFicheTitle from "../components/LogementFicheTitle";
import LogementFicheMain from "../components/LogementFicheMain";


export default function Logement() {
  const [logement, setlogement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    host: { name: "", picture: "" },
  });

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(function () {
    fetch("/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let logementNew = data.find((item) => item.id === id);
        if(logementNew !== undefined)
          setlogement(logementNew);
        else {
          navigate("/error")
        }
      });
  }, []);

  return (
    <main className="box_logementFiche">
      <SlideShow imgs={logement.pictures} />
      <header className='logementFiche_header'>
            <LogementFicheTitle logement={logement} />
            <LogementFicheHost logement={logement} />
      </header>
      <LogementFicheMain logement={logement} />
    </main>
  );
}
