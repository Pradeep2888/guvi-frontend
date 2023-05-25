import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProfileBox() {
    const [state,setState]=useState({age:"",gender:"",dob:"",mobile:""})
   const navigate=useNavigate()
    const handleChange=(e)=>{
   
    let name=e.target.name
    let value=e.target.value
    setState({...state, [name]:value})
    }
  
    const handleSubmit=(e)=>{
      e.preventDefault()
      profileupdate(state)
    }

    const profileupdate=(state)=>{
      const token=JSON.parse(localStorage.getItem("token")) || ""
       axios.post(`https://guvi-backend-l0eg.onrender.com/profile/update/${token}`,state)
       .then((r)=>{
        alert(r.data.msg)
        if(r.data.msg==="update successfully"){
          navigate("/home")
        }
       })
       .catch((e)=>{
        console.log(e)
       })
    }

  return (
    <div className='box' >
    <h1 className='text'>User Profile</h1>
    <form onSubmit={handleSubmit} >
      <div className='' >
        <h3>Age</h3>
        <input type='number' required name='age' value={state.age || ""} onChange={handleChange} />
      </div>
      <div>
        <h3>Gender</h3>
        <input type='text' required name='gender' value={state.gender || ""} onChange={handleChange} />
      </div>
      <div>
        <h3>Date of birth</h3>
        <input type='date' required name='dob' value={state.dob || ""} onChange={handleChange} />
      </div>
      <div>
        <h3>Mobile</h3>
        <input type='number' required name='mobile' value={state.mobile || ""} onChange={handleChange}/>
      </div>
      <div>
        <input type='submit' className='button'  value="Update Profile" />
      </div>
      
    </form>
  </div>
  )
}

export default ProfileBox