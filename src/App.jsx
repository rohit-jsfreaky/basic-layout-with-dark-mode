import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesIndex from './Routes/RoutesIndex'
import { ThemeProvider } from './ThemeContext'
import Navbar from './components/ui/Navbar'




const App = () => {

  useEffect(()=>{
    console.log(localStorage.getItem("theme"))
  },[])
  return (
  
    <ThemeProvider>
     
      <Router>
       
      <Navbar/>
     <RoutesIndex/>
    </Router>
    </ThemeProvider>

  )
}

export default App
