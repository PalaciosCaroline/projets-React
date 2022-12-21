import { Routes, Route } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Erreur404 from "./pages/Erreur404";
import Logement from "./pages/Logement";

import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "./hooks/useLocaleStorage";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/Apropos"
        element={<Apropos />}
      />
      <Route
        path="/logement/:id"
        element={<Logement />}
      />
      <Route path="*" element={<Erreur404 />} />
    </Routes>
  );
}
