import React, { useState, useEffect, createContext } from "react";
import BannerHome from "../../components/BannerHome_module/Banner_Home";
import Boxcards from "../../components/Boxcards_module/Boxcards";
import './home.css'

export default function Home(props) {

  const [logements, setlogements] = useState([]);
  
    useEffect(() => {
        fetch("data.json")
          .then(res => res.json())
          .then(
            (result) => {
              setlogements(result);
            }
          )
    }, []);

  return (
    <main className="box_home">
      <BannerHome />
      <Boxcards logements={logements}/>
    </main>
  );
}
