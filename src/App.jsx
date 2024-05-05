import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home_page from './home-page/Home_page.jsx'


function App() {

  return (
   <Router>
   <div>
   <Routes>

      <Route path="/" element={<Home_page/>} />


      </Routes>
   </div>
   </Router>
  )
}

export default App
