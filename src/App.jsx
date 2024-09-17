import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import Home from './components/Home/Home.jsx'; //v
import NavBar from'./components/NavBar.jsx'; //v
import Login from './components/login/Login.jsx'; //v
import SignUp from './components/SignUp/SignUp.jsx'; //v
import UsersDetails from './components/UsersDetails.jsx'; //v
import TicTacToe from './components/games/TicTacToe.jsx';
import Memory from './components/games/memory/Memory.jsx';
import Puzzle from './components/games/puzzle/Puzzle.jsx';

import { useState } from 'react';
import UserContext from './context/UserContext.jsx';
// import { textWidth } from 'fontawesome';

function App() {

  const [users, setUsers] = useState( localStorage.getItem('player')?
    JSON.parse(localStorage.getItem('user')):
    [{id:1, nickName:'Deadpool',role:'admin', email:'dedpool@gmail.com', phoneNumber:'0546080824', password:'123456'},
    {id:2, nickName:'The Rock',role:'player', email:'rock@gmail.com', phoneNumber:'0507894562', password:'123456'},
    {id:3, nickName:'President Trump',role:'player', email:'trump@gmail.com', phoneNumber:'0528546329', password:'123456'},
    ]);

    const [ currUser, setCurrUser ] = useState({role:'guest'})

  // const login = window.localStorage.getItem('isLogedIn');

  const removeUser = (id) => {
    const newUser = (users.filter(user => user.id !== id))
    setUsers(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));

  }

  const addUser = (newUser) =>{
    newUser = (users.concat({...newUser, id: uuid()}))
    setUsers(newUser)
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  const login = (formData) => {
    console.log('formdata\n',formData);
    
    let loggedUser = users.find(user => {
      console.log('user\n',user);
      return user.nickName === formData.nickName && user.password === formData.password
      
    })
    console.log('lalala:\n', loggedUser);
    
    if(loggedUser){
      setCurrUser(loggedUser)
      localStorage.setItem('User', JSON.stringify(loggedUser))
      return true
    }
    return false; 
  }

  return (
    <UserContext.Provider value={{removeUser,addUser, currUser, setCurrUser}}>
      <Router>
        <div className="App">
          <NavBar/>
          <h1 className='press-start-2p-regular'>GAME PORTAL</h1>
          <Routes>
            <Route path="/" element={<Home currUser={currUser} />} />
            <Route path="/UsersDetails" element={currUser.role === 'admin'?<UsersDetails users={users} /> : 
             <span style={{color:'orangered'}}>Sorry admin only</span>} />
            <Route path="/Login" element={<Login login={login}/>} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Memory" element={<Memory/>} />
            <Route path="/Puzzle" element={currUser.role === 'player' || currUser.role === 'admin' ? <Puzzle/> : 
             <span style={{color:'orangered'}}>Sorry Player only</span>}/>
            <Route path="/TicTacToe" element={currUser.role === 'player' || currUser.role === 'admin'? <TicTacToe/> : 
             <span style={{color:'orangered'}}>Sorry Player only</span>}/>
          </Routes>  
        </div> 
      </Router>
    </UserContext.Provider>
  );
}

export default App;
