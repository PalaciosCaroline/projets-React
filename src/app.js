import React, { useState, useEffect, createContext } from "react";
import Router from './Router';
import Footer from './components/Footer_module/Footer';
import Menu from './components/Menu_module/Menu';

export default function App(){

    const [logements, setlogements] = useState([]);
    // useEffect(() => {
    //     fetch("data.json")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           setlogements(result);
    //         }
    //       )
    // }, []);

    const getlogements = () => {
          fetch("data.json", {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
            .then(function (response) {
              return response.json();
            })
            .then(function (logements) {
              setlogements(logements);
            });
        };
        useEffect(() => {
          getlogements();
        }, []);

return(
    <>
        <Menu />
        <Router logements={logements}/>
        <Footer />
    </>
    )

}