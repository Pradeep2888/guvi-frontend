import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate()
  return (
    <div className='navbarbox' >
        <div><a  onClick={()=>navigate("/home")} >Home</a></div>
        <div><a onClick={()=>navigate("/")} >Register</a></div>
        <div><a onClick={()=>navigate("/login")}>Login</a></div>
    </div>
  )
}

export default Navbar