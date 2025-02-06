import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import './assets/styles/index.scss'

import Home from './pages/Home'
import About from './pages/About'
import HousingSheet from './pages/HousingSheet'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path='/fiche-logement' element={<HousingSheet />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
