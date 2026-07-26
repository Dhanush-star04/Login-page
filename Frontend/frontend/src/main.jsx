import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sucess from './Sucess.jsx'
import Fail from './Fail.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} ></Route>
      <Route path='/sucess' element={<Sucess />} ></Route>
      <Route path='/fail' element={<Fail />} ></Route>
    </Routes>
  </BrowserRouter>
)