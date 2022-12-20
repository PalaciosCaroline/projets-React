import React, { useState, useEffect } from "react";
import BannerHome from "./../components/Banner_Home";
import Boxcards from "../components/Boxcards_module/Boxcards";


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
      <BannerHome />
      <Boxcards logements={logements} />
    </main>
  );
}
