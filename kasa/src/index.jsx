import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/header'
import Home from './pages/Home/home'
import FicheLogement from './pages/FicheLogement/ficheLogement'
import APropos from './pages/APropos/aPropos'
import Error from './pages/Error/error'
import Footer from './components/Footer/footer'
import './app.css'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/FicheLogement/:id' element={<FicheLogement/>} />
          <Route path='/APropos' element={<APropos />} />
          <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)