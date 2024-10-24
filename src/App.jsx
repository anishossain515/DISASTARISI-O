import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Navbar } from './components/CommonCotains/Navber/Navbar'
import { Dashboard } from './components/Contains/Dashboard'
import { Incidents } from './components/Contains/Incidents/Incidents'
import { Location } from './components/Contains/Location/Location'
import { IncidentPage1 } from './components/Contains/Incidents/IncidentPage1'
import { IncidentPage2 } from './components/Contains/Incidents/IncidentPage2'
import { IncidentPage3 } from './components/Contains/Incidents/IncidentPage3'
import { IncidentPage4 } from './components/Contains/Incidents/Incidentpage4'

function App() {
  return (
    <BrowserRouter>
       <Routes>

          <Route path='' element={<Navbar/>}>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/incidents' element={<Incidents/>} />
          <Route path='/location' element={<Location/>}/>
          <Route path='/IncidentPage1' element={<IncidentPage1/>} />
          <Route path='/IncidentPage2' element={<IncidentPage2/>} />
          <Route path='/IncidentPage3' element={<IncidentPage3/>} />
          <Route path='/IncidentPage4' element={<IncidentPage4/>} />

          </Route>

       </Routes>
    </BrowserRouter>


   
   
 
  
  
  

    
  )
}

export default App
