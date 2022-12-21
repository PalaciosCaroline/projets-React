import React, { useState, useEffect } from "react";
import Banner from "./../components/Banner";
import Boxcards from "../components/Boxcards";


export default function Home(props) {
  const [logements, setlogements] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((result) => {
        setlogements(result);
      });
  }, []);

  return (
    <main className="box_home">
      <header className="bannerHome" >
            <Banner /> 
            <h1>Chez vous, <br/>partout et ailleurs</h1> 
      </header>
      <Boxcards logements={logements} />
    </main>
  );
}
