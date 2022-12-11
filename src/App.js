import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Erreur404 from './pages/Erreur404';

import {v4 as uuidv4} from 'uuid';
import {useLocalStorage} from './hooks/useLocaleStorage';

import './CSS/app.css';

function App() {
 
  return (
    <>
      
      <Routes>  
        <Route path='*' element={<Home />}/>
        <Route path="/ " element={<Home/>}/>
        <Route path="/list" element={<Apropos/>}/>
        <Route render={() => <Erreur404/>}/>
      </Routes>
      
    </>
  );
}

export default App;
