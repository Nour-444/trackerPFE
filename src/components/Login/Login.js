import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
const Login = () => {
  const[action,setAction]=useState("Sign Up");
  return (
    <div className='Login'>
         <div className='headerLogin'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
    </div>
    <div className='inputs'>
      {action==="Login"?<div></div>:<div className='input'>
    <span className="icon"><FaUser size={30}/> </span>
    <input type='text' placeholder='Name'></input>
    
    </div>}
    
    <div className='input'>
    <span className="icon"><MdEmail size={30}/> </span>
    <input type='email' placeholder='Email'></input>
    </div>
    <div className='input'>
    <span className="icon"><RiLockPasswordFill size={30}/> </span>
    <input type='password' placeholder='Password'></input>
    </div>
    
    </div>
    {action==="Sign Up"?<div></div>:
    <div className='forgot-password'>Lost Password ?<span>Click Here!</span> </div>}
    
   <div className='submit-container'>
   <div className={action=="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}> Sign Up </div>
    <div className={action=="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}> Login </div>
   </div>
    </div>
   
  )
}

export default Login