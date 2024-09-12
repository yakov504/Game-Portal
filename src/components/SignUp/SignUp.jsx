import React from 'react'
import './SignUp.css'
import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function SignUp() {

  const navigate = useNavigate()

  const {addUser} = useContext(UserContext)
  
  const [data,setData] = useState({
    nickName:'',
    email:'',
    phoneNumber:'',
    password:''
  })
 
  const handleChange = (e)=>{
    return setData({...data, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(data);
    if(data.nickName && data.email && data.phoneNumber && data.password){

      if(addUser(data)){
        navigate('/Login')
      }else{
        console.log('Faild');
        
      };
    }
    setData({});
    // localStorage.setItem('data',JSON.stringify(data));
   }
  
  //  const getedData = JSON.parse(localStorage.getItem('data'))

  return (
    <form onSubmit={handleSubmit} >
      <div className='container'>
        <div className='head'>
          <div className='text'>Sign Up</div>
          <div className='underLine'></div>
          <div className='inputs'>
            <div className='input'>
              <input type="text" name='nickName' placeholder='Nick Name' onChange={handleChange} value={data.nicName}/>
            </div>
          <div className='input'>
              <input type="email" name='email' placeholder='Email' onChange={handleChange} value={data.email}/>
          </div> 
          <div className='input'>
              <input type="text" name='phoneNumber' placeholder='Phone Number' onChange={handleChange} value={data.phoneNumber}/>
          </div>
          <div className='input'>
              <input type="password" name='password' placeholder='Password' onChange={handleChange} value={data.password}/>
          </div>
        </div>
        <div className='submit-container'>
          <div className='submit'onClick={handleSubmit}>Sign Up</div>
        </div>
          </div>
          {/* <div>{getedData}</div> */}
        </div>
    </form>
  )
}
