import {useState, useEffect} from 'react'
import './Board.css';
import Tile from '../tile/Tile.jsx'
import Winner from './Winner.jsx'
import NewGame from './NewGame.jsx';

export default function Board() {

  const [ numbers, setNumbers ] = useState([])
  const [ animating, setAnimating ] = useState(false)

  const OverLay = () =>
    new Array(16)
    .fill()
    .map((_,index) => <div key={index} className = 'overlay'/>)

    const shuffle = () =>
      new Array(16)
      .fill()
      .map((_,index) => index + 1)
      .sort(() => Math.random() - 0.5)
      .map((x,index) => ({value:x, index:index}))
      console.log(shuffle());

      const moveTile = tile => {
        const indx16 = numbers.find(n => n.value === 16).index
        if(![indx16 - 1, indx16 + 1, indx16 - 4, indx16 + 4].includes(tile.index) || animating)
          return

        const newNumbers = [...numbers]
        .map(number => {
          if (number.index !== indx16 && number.index !== tile.index)
            return number
          else if (number.value === 16)
            return {value:16, index:tile.index}
          
          return {value:tile.value, index:indx16}
        })
        
        setNumbers(newNumbers)
        setAnimating(true)
        setTimeout (() => setAnimating(false),400)
      }
      const handleKeyDown = e => {
        const indx16 = numbers.find(n => n.value === 16).index
        if(e.keyCode === 37 && !(indx16 % 4 === 3))
          moveTile(numbers.find(n=> n.index === indx16 + 1))
        if(e.keyCode === 38 && !(indx16 > 11))
          moveTile(numbers.find(n=> n.index === indx16 + 4))
        if(e.keyCode === 39 && !(indx16 % 4 === 0))
          moveTile(numbers.find(n=> n.index === indx16 - 1))
        if(e.keyCode === 40 && !(indx16 < 4))
          moveTile(numbers.find(n=> n.index === indx16 - 4))
        
      }

      const reset = () => setNumbers(shuffle())

      useEffect(reset, [])

     useEffect (() => {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
     })

  return (
    <div className='puzzGame'>
        <div className="board">
            <h1>Puzzle Game</h1>  
            {OverLay()}
            {numbers.map((x,index) =>
            <Tile key={index} number={x} moveTile={moveTile}/>
            )}
            <Winner numbers={numbers}/>
            <NewGame reset={reset}/>
        </div>
    </div>
  )
}
