import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Erreur404 from './pages/Erreur404';
import Logement from './pages/Logement';

import {v4 as uuidv4} from 'uuid';
import {useLocalStorage} from './hooks/useLocaleStorage';

import './CSS/app.css';
// import Datalogements from './getData';

function App() {
 
  return (
    <>
      <Routes>  
        <Route index element={<Home/>} />
        <Route path='*' element={<Erreur404/>}/>
        <Route path="/Home" element={<Home />} errorElement={<Erreur404/>}/>
        <Route path="/Apropos" element={<Apropos/>} errorElement={<Erreur404/>}/>
        <Route path="/logement/:id" element={<Logement/>} errorElement={<Erreur404/>}/>
        <Route render={() => <Erreur404/>}/>
      </Routes>
    </>
  );
}

export default App;

