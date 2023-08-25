import { Routes, Route } from 'react-router-dom'
import Accueilapp from './accueilapp'
import Apropos from './projet11/pages/Apropos'
import Erreur404 from './projet11/pages/Erreur404'
import Logement from './projet11/pages/Logement'
import Appprojet11 from './projet11/Appprojet11'
import Choiceuser from './projet12/pages/choiceuser/Choiceuser'
import Dashboard from './projet12/pages/dashboard/Dashboard'


export default function Router() {
  return (
    <Routes>
      <Route index element={<Accueilapp />} />
      <Route path="/projet11" element={<Appprojet11 />} />
      <Route path="/projet11/Apropos" element={<Apropos />} />
      <Route path="/projet11/logement/:id" element={<Logement />} />
      <Route path="/projet12/" element={<Choiceuser />} />
      <Route path="/projet12/user/:id" element={<Dashboard />} />
      <Route path="*" element={<Erreur404 />} />
    </Routes>
    
  )
}
