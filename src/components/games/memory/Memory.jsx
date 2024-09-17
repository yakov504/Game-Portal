import {useState} from 'react'
import './Memory.css'
import Cover from '../../../assets/image/cover.jpeg'
import Deadpool from '../../../assets/image/Deadpool.png'
import zohan from '../../../assets/image/zohan.jpeg';
import shuli from '../../../assets/image/shuli.jpeg';
import lion from '../../../assets/image/kingLion.jpeg';
import badBoys from '../../../assets/image/Bad_Boys.jpg';
import wallStreet from '../../../assets/image/wollStreet.jpeg';


const cardImages = [
  { src: Deadpool },
  { src: zohan },
  { src: shuli },
  { src: lion },
  { src: badBoys },
  { src: wallStreet },
];

export default function Memory() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), matched: false }));

    setCards(shuffledCards);
    setTurns(0);
    setFlippedCards([]);
  };


  const handleFlip = (card) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.some((flipped) => flipped.id === card.id)) return;
    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);


    if (newFlippedCards.length === 2) {
      if (newFlippedCards[0].src === newFlippedCards[1].src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === newFlippedCards[0].src ? { ...card, matched: true } : card
          )
        );
      }
      setTimeout(() => setFlippedCards([]), 1000); 
    }
  };

  return (
    <div className='containerMemory'>
      <h1>Memory Game - Movies</h1>
      <button className='nwGameMemo' onClick={shuffleCards}>New Game</button> 

      <div className='card-grid'>
        {cards.map((card) => (
          <div className='card' key={card.id} onClick={() => handleFlip(card)}>
            <img
              className={`front ${flippedCards.includes(card) || card.matched ? 'flipped' : ''}`}
              src={card.src}
              alt='card front'
            />
            <img
              className={`back ${flippedCards.includes(card) || card.matched ? 'hidden' : ''}`}
              src={Cover}
              alt='card back'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
