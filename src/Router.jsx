import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Erreur404 from './pages/Erreur404'
import Logement from './pages/Logement'

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path='/web-cv' component={() => {
    window.location.href = 'https://palacioscaroline.github.io';
    return null;
}}/>
      <Route path="*" element={<Erreur404 />} />
    </Routes>
  )
}
