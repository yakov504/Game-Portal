import React from 'react'
import logo from '../assets/image/logo.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='nav'>
       <Link to='/'><img className='logo' src={logo} alt='logo'></img></Link>
       <ul>
        <li>
        <Link to='/UsersDetails'>User Details</Link>
        </li>
        <li>
        <Link to='/Login'>Login</Link>
        </li>
        <li>
        <Link to='/SignUp'>Sign Up</Link>
        </li>
        <li>
        <Link to='/Game'>game</Link>
        </li>
       </ul>
    </nav>
  )
}
