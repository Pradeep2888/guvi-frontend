import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Pages/Profile'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Home from '../Pages/Home'

function AllRoutes() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
       </Routes>
    </div>
  )
}

export default AllRoutes