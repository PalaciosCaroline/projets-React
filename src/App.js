import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import {v4 as uuidv4} from 'uuid';
import {useLocalStorage} from './hooks/useLocaleStorage';

import './CSS/app.css';


function App() {
  const [technos, setTechnos] = useState([]);
  const STORAGE_KEY = 'technos';
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() => {
    console.log('useEffect with []');
    setTechnos(storedTechnos);
  }, [])

  useEffect(() => {
    setStoredTechnos(technos);
  }, [technos]);
  // [{name:'react', category:'front', desdcription:'learn react'},{name:'node', category:'back', desdcription:'learn node'},{}];

  function handleAddTechno(techno){
  // console.log('handleAddTechno', techno);
    setTechnos([...technos, {...techno, technoId:uuidv4()}]);
  }

  function handleDeleteTechno(id){
    setTechnos(technos.filter((tech) => tech.technoId !== id))
  }

  return (
    <>
     <Menu/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/ " element={<Home/>}/>
    <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno}/>}/>
    <Route path="/list" element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno}/>}/>
    </Routes> 
    </>
  );
}

export default App;
