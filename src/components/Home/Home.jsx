import './Home.css';
import React from 'react'
import TicTacToe from '../games/TicTacToe.jsx'
import Memory from '../games/memory/Memory.jsx'
// import Puzzle from '../Games/puzzle/Puzzle.jsx';

export default function Home({currUser}) {
  return (
    <div>
      <h2>HELLO {currUser.role === 'guest' ? 'GUEST' : currUser.nickName}</h2>
      <Memory/>
      {/* <TicTacToe/> */}
    </div>
  )
}
