import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Faaliyet from './pages/Faaliyet'
import Contact from './pages/Contact'
import Imgone from './newpages/Imgone'
import Imgtwo from './newpages/Imgtwo'
import Imgthree from './newpages/Imgthree'
import Imgfour from './newpages/Imgfour'
import Imgfive from './newpages/Imgfive'
import Imgsix from './newpages/Imgsix'
import Imgseven from './newpages/Imgseven'
import Imgeight from './newpages/Imgeight'
import Konut from './pages/Konut'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>

      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sitekonutları' element={<Konut/>} />
      <Route path='/faaliyet' element={<Faaliyet/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/new1' element={<Imgone/>} />
      <Route path='/new2' element={<Imgtwo/>} />
      <Route path='/new3' element={<Imgthree/>} />
      <Route path='/new4' element={<Imgfour/>} />
      <Route path='/new5' element={<Imgfive/>} />
      <Route path='/new6' element={<Imgsix/>} />
      <Route path='/new7' element={<Imgseven/>} />
      <Route path='/new8' element={<Imgeight/>} />

      </Routes>
      
    </>
  )
}

export default App
