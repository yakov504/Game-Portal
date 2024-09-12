import '../App.css'
import { useContext} from 'react'
import UserContext  from '../context/UserContext'
// import { user } from 'fontawesome'

export default function UsersDetails({users}) {

  // const {nickName, email, phoneNumber} = users
  const {removeUser} = useContext(UserContext)
      
   const myUsers = users.length > 0 ?
    users.map((use)=>(
        <ul className='userList' key={use.id}>{use.nickName}
          <li>Nick Name: {use.nickName}</li>
          <li>Email: {use.email}</li>
          <li>Role: {use.role}</li>
          <li>Phone Number: {use.phoneNumber}</li>
          <button className='removeUser' onClick= {() => removeUser(use.id)}>remove user</button>
        </ul> 
    )) : <p>no users</p>        

  return (
    <div className='userDetail'>
        <h2>Meet our portal user's:</h2>
        <div className='list'>
          {myUsers}
        </div>      
    </div>
  )
}
