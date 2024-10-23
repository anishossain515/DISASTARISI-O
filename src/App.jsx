import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Navbar } from './components/CommonCotains/Navber/Navbar'
import { Dashboard } from './components/Contains/Dashboard'
import { Incidents } from './components/Contains/Incidents'




function App() {
  return (
    <BrowserRouter>
       <Routes>

          <Route path='' element={<Navbar/>}>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/incidents' element={<Incidents/>} />
        

          </Route>

       </Routes>
    </BrowserRouter>

 
  
  
  

    
  )
}

export default App
