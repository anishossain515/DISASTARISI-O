import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { SecondButton } from './components/common/SecondButton'
import { Input } from './components/common/Input'
import { Disasters } from './components/CommonCotains/Disasters'
import { Navbar } from './components/CommonCotains/Navber/Navbar'
import { MobileMenu } from './components/CommonCotains/Navber/MobileMenu'
import { IncidentsInfo } from './components/CommonCotains/IncidentsInfo'
import { IncidentsDes } from './components/CommonCotains/IncidentsDes'
import { ADN } from './components/CommonCotains/ADN'
import { Dashboard } from './components/Contains/Dashboard'
import { CheatBox } from './components/Contains/CheatBox'
import { Cheat } from './components/common/Cheat'
import { PopupToggle } from './Pop'

function App() {
  return (
    <BrowserRouter>
       <Routes>

          <Route path='' element={<Navbar/>}>
          <Route path='/' element={<Dashboard/>} />
        

          </Route>

       </Routes>
    </BrowserRouter>

 
  
  
  

    
  )
}

export default App
