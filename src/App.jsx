import { useState } from 'react'
import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Products/>
      <Blog/>
    </>
  )
}

export default App
