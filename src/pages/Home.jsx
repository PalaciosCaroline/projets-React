import React, { useState, useEffect } from "react";
// import data from "./../data";
import Banner from "./../components/Banner";
import Boxcards from "../components/Boxcards";

export default function Home() {
  const [logements, setlogements] = useState([]);
  // const [isMounted, setIsMounted] = useState(false)

  // useEffect(() => {
  //   !isMounted &&
  //     data.getlogements().then((json) => {
  //       setlogements(json);
  //       setIsMounted(true);
  //     });
  // }, [isMounted]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((result) => {
        setlogements(result)}) 
      .catch(function(error) {
          console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message);
      })
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
