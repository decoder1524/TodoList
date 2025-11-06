import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./AuthStyle.css"
import AuthServices from '../../services/AuthServices'

const Login = () => {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  //login function
  const loginHandler = async (e) =>{
    try {
      e.preventDefault()
      const data = {email,password}
      const res = await AuthServices.loginUser(data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
      
    }
  
  }
  return (
    <div className="form-container">
      <div className="form">
        <div className="mb-3">
          <i className='fa-solid fa-circle-user'></i>
        </div>
        <div className="mb-3">
          <input type="email" className = "form-control" placeholder="Enter email" value ={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <input type="password" className = "form-control" placeholder="Enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className="form-bottom">
          <p className="text-center"> Not a user? please 
            <Link to="/register"> Register</Link>
          </p>
          <button type = "submit" className="login-btn" onClick={loginHandler}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
