
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

      <Route path='https://demo-sitemap-app.vercel.app/' element={<Home/>}/>
      <Route path='https://demo-sitemap-app.vercel.app/about' element={<About/>}/>
      <Route path='https://demo-sitemap-app.vercel.app/services' element={<Service/>}/>
    </Routes>
  
  
  </BrowserRouter>

    </>
  )
}

export default App
