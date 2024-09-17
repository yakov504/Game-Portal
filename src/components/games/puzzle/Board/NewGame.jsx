import React from 'react'
import './Board.css'

export default function NewGame({reset}) {
  return (
    <div className="button-wrapper">
        <button className='nwBtnPuzzle' onClick={reset}>New Game</button>
    </div>
  )
}
