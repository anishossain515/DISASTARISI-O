import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Navbar } from './components/CommonCotains/Navber/Navbar'
import { Dashboard } from './components/Contains/Dashboard'
import { Incidents } from './components/Contains/Incidents/Incidents'
import { Location } from './components/Contains/Location/Location'
import { IncidentPage2 } from './components/Contains/Incidents/IncidentPage2'


function App() {
  return (
    // <BrowserRouter>
    //    <Routes>

    //       <Route path='' element={<Navbar/>}>
    //       <Route path='/' element={<Dashboard/>} />
    //       <Route path='/incidents' element={<Incidents/>} />
    //       <Route path='/location' element={<Location/>}/>

    //       </Route>

    //    </Routes>
    // </BrowserRouter>

    <>
      <IncidentPage2/>
    </>
   
   
 
  
  
  

    
  )
}

export default App
