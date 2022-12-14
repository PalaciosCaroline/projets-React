import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home_module/Home";
import Apropos from "./pages/Apropos_module/Apropos";
import Erreur404 from "./pages/Erreur404_module/Erreur404";
import Logement from "./pages/Logement_module/Logement";

import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "./hooks/useLocaleStorage";

// import Datalogements from './getData';

export default function Router() {
  
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Erreur404 />} />
        <Route
          path="/Apropos"
          element={<Apropos />}
          errorElement={<Erreur404 />}
        />
        <Route
          path="/logement/:id"
          element={<Logement />}
          errorElement={<Erreur404 />}
        />
        <Route render={() => <Erreur404 />} />
      </Routes>
    </>
  );
}
