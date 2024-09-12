import React from 'react'
import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login({login}) {

  const navigate = useNavigate()

  const [value,setValue] = useState(
    {
      nickName:'',
      password:''
    }
  )

  const handleChange= (e)=>{
    return setValue({...value, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    // let login = window.localStorage.setItem('isLogedIn', true)
    if(value.nickName && value.password){
      if(login(value)){
        navigate('/')
      }else{
        console.log('Faild');
        
      }
    }
    console.log(value);
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className='logContainer'>
         <div className='logHead'>
           <div className='logText'>Login</div>
           <div className='underLine'></div>
         </div>
       <div className='inputs'>
         <div className='input'>
             <input type="text" name='nickName' onChange={handleChange} placeholder='Nick Name'/>
         </div>
         <div className='input'>
             <input type="password" name='password' onChange={handleChange} placeholder='Password'/>
         </div>
       </div>
       <div className='submit-container'>
         <div className = 'submit' onClick={handleSubmit}>Login</div>
       </div>
         </div>
    </form>
  )
}
