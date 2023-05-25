import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Registerbox() {
    const [state,setState]=useState({name:"",email:"",password:"",confirmpassword:""})
     const navigate=useNavigate()
  const handleChange=(e)=>{
 
  let name=e.target.name
  let value=e.target.value
  setState({...state, [name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(state.password===state.confirmpassword){
      register(state)
    }
    else{
      alert("Please write correct password")
    }
  }

  const register=(state)=>{
   axios.post("https://guvi-backend-l0eg.onrender.com/register/add-user",state)
   .then((r)=>{
     alert(r.data.msg)
     if(r.data.msg==="User already exists" || r.data.msg==="User Register Successfull" ){
      navigate("/login")
     }
   })
   .catch((e)=>{
    console.log(e)
   })
  }

  return (
    <div className='box' >
      <h1 className='text'>Register</h1>
      <form onSubmit={handleSubmit} >
        <div >
          <h3>Name</h3>
          <input type='text' required name='name' value={state.name || ""} onChange={handleChange} />
        </div>
        <div>
          <h3>Email</h3>
          <input type='email' required name='email' value={state.email || ""} onChange={handleChange} />
        </div>
        <div>
          <h3>Password</h3>
          <input type='password' required name='password' value={state.password || ""} onChange={handleChange} />
        </div>
        <div>
          <h3>Conferm Password</h3>
          <input  type='password' required name='confirmpassword' value={state.confirmpassword || ""} onChange={handleChange}/>
        </div>
        <div>
          <input type='submit' className='button'  />
        </div>
        
      </form>
    </div>
  )
}

export default Registerbox