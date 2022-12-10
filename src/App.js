import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Menu from './components/Menu';

import {v4 as uuidv4} from 'uuid';
import {useLocalStorage} from './hooks/useLocaleStorage';

import './CSS/app.css';


function App() {
 
  return (
    <>
     <Menu/>
    <Routes>
    <Route path="/ " element={<Home/>}/>
    <Route path="/ " element={<Home/>}/>
    <Route path="/list" element={<Apropos/>}/>
    </Routes> 
    </>
  );
}

export default App;
