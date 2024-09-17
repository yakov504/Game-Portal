import './Home.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import MemoImg from '../../assets/image/memo.png'
import PuzImg from '../../assets/image/puz.png'
import TicImg from '../../assets/image/tic.png'


export default function Home({currUser}) {

  const navigate = useNavigate()

  return (
    <div>
      <h2>HELLO {currUser.role === 'guest' ? 'GUEST' : currUser.nickName}</h2>
      <div className="imgGame">
        <img src={MemoImg} alt="memo" onClick={() => navigate('/Memory')}/>
        <img src={PuzImg} alt="memo" onClick={() => navigate('/Puzzle')}/>
        <img src={TicImg} alt="memo" onClick={() => navigate('/TicTacToe')}/>
      </div>     
    </div>
  )
}
