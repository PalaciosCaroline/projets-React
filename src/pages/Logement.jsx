import React from "react";
import { useState, useEffect } from "react";
import SlideShow from "../components/SlideShow";
import { useParams, useNavigate } from "react-router-dom";
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
      <LogementFicheHeader logement={logement} />
      <LogementFicheMain logement={logement} />
    </main>
  );
}
