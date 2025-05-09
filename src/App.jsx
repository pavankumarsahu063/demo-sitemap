
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'
function App() {
  

  return (
    <>
    <h1>Site Map Demo Project</h1>
  <BrowserRouter>
  
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
    </Routes>
  
  
  </BrowserRouter>

    </>
  )
}

export default App
