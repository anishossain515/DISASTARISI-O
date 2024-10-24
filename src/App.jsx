import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Navbar } from './components/CommonCotains/Navber/Navbar'
import { Dashboard } from './components/Contains/Dashboard'
import { Incidents } from './components/Contains/Incidents/Incidents'
import { Location } from './components/Contains/Location/Location'
import { IncidentPage1 } from './components/Contains/Incidents/IncidentPage1'
import { IncidentPage2 } from './components/Contains/Incidents/IncidentPage2'
import { IncidentPage3 } from './components/Contains/Incidents/IncidentPage3'
import { IncidentPage4 } from './components/Contains/Incidents/IncidentPage4'
import { NotFound } from './components/Contains/NotFound'
import { Coming } from './components/Contains/Coming'
import { WithNavbar } from './components/Contains/WithNavbar'


function App() {
  return (
    <BrowserRouter>
       <Routes>

          <Route path='/' element={<WithNavbar><Dashboard/></WithNavbar>} />
          <Route path='/incidents' element={<WithNavbar><Incidents/></WithNavbar>} />
          <Route path='/location' element={<WithNavbar><Location/></WithNavbar>}/>
          <Route path='/IncidentPage1' element={<WithNavbar><IncidentPage1/></WithNavbar>} />
          <Route path='/IncidentPage2' element={<WithNavbar><IncidentPage2/></WithNavbar>} />
          <Route path='/IncidentPage3' element={<WithNavbar><IncidentPage3/></WithNavbar>} />
          <Route path='/IncidentPage4' element={<WithNavbar><IncidentPage4/></WithNavbar>} />
          <Route path='/Coming' element={<WithNavbar><Coming/></WithNavbar>} />


          <Route path='*'  element={<NotFound/>} />
        

       </Routes>
    </BrowserRouter>

    

   
    
  )
}

export default App
