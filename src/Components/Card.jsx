import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Card() {
    const [data,setData]=useState()
     const navigate=useNavigate()
    const getData=()=>{
        const token=JSON.parse(localStorage.getItem("token")) || ""
        axios.get(`https://guvi-backend-xk1j.onrender.com/profile/user/${token}`)
        .then((r)=>{
            setData(r.data.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
useEffect(()=>{
        getData()
 },[])

 const handleClick=()=>{
    localStorage.setItem("token",JSON.stringify(""))
    navigate("login")
 }
  return (
    <div className='profilecard' >
          <div className='block1' >
            <div><img src='https://bit.ly/dan-abramov' /></div>
            <div><button className='logoutbutton' onClick={handleClick} >Logout</button></div>
          </div>
          <div className='block2'>
            <h2>Name: {data?.name}</h2> 
              <h2>Email: {data?.email}</h2>
              <h2>Gender: {data?.gender}</h2>
              <h2>Date Of Birth: {data?.dob}</h2>
              <h2>Phone: {data?.mobile}</h2>
          </div>
    </div>
  )
}

export default Card