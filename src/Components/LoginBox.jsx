import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginBox() {
  const [state,setState]=useState({email:"",password:""})
  const navigate=useNavigate()

  const handleChange=(e)=>{
 
  let name=e.target.name
  let value=e.target.value
  setState({...state, [name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    login(state)
  }

  const login=(state)=>{
    let token=JSON.parse(localStorage.getItem("token")) || ""
    axios.post("https://guvi-backend-l0eg.onrender.com/login/user",state)
    .then((r)=>{
      alert(r.data.msg)
      if(r.data.msg==="Login sucessfull"){
        localStorage.setItem("token",JSON.stringify(r.data.token))
        navigate(`/profile`)
      }
      else if("Please register First"){
        navigate("/")
      }
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  return (
    <div className='box' >
      <h1 className='text'>Login</h1>
      <form onSubmit={handleSubmit} >
        <div className='' >
          <h3>Email</h3>
          <input type='email' required onChange={handleChange} name='email' value={state.email || ""} />
        </div>
        <div>
          <h3>Password</h3>
          <input type='password' required onChange={handleChange} name='password' value={state.password || ""} />
        </div>
        <div>
          <input type='submit' className='button' value="Login"  />
        </div>
        
      </form>
    </div>
  )
}

export default LoginBox