import './App.css'
import Home from './page/Home'
import Features from './page/Features'
import Pricing from './page/Pricing'
import Stories from './page/Stories'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/stories' element={<Stories />} />
      </Routes>
    </HashRouter>
  )
}

export default App
