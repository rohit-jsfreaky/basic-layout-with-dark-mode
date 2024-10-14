import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const RoutesIndex = () => {
  return (
    <Routes>  
      
      <Route path='/signup' element={<Signup/> }/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default RoutesIndex
