import { useState } from 'react';
import './TicTacToe.css';
import X_icon from '../../assets/image/x-tic-tac.jpeg';
import O_icon from '../../assets/image/o-tic-tac.jpeg';

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [winner, setWinner] = useState(null);

    const checkWinner = (board) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const toggle = (index) => {
        if (lock || board[index] || winner) {
            return;
        }

        const newBoard = [...board];
        newBoard[index] = count % 2 === 0 ? 'x' : 'o';
        setBoard(newBoard);
        setCount(count + 1);

        const newWinner = checkWinner(newBoard);
        if (newWinner) {
            setWinner(newWinner);
            setLock(true); 
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(''));
        setCount(0);
        setLock(false);
        setWinner(null);
    };

    const renderBox = (index) => {
        const value = board[index];
        return (
            <div className="boxes" onClick={() => toggle(index)}>
                {value === 'x' && <img src={X_icon} alt="X" />}
                {value === 'o' && <img src={O_icon} alt="O" />}
            </div>
        );
    };

    return (
        <div className='contaneir'>
            <h1 className="title">Tic Tac Toe</h1>
            {winner ? <h2 className="winnerTic" style={{color:'orangered'}}>{`Winner: ${winner.toUpperCase()}`}</h2> : <h2>{`Turn: ${count % 2 === 0 ? 'X' : 'O'}`}</h2>}
            <div className="boardTic">
                <div className="row1">
                    {renderBox(0)}
                    {renderBox(1)}
                    {renderBox(2)}
                </div>
                <div className="row2">
                    {renderBox(3)}
                    {renderBox(4)}
                    {renderBox(5)}
                </div>
                <div className="row3">
                    {renderBox(6)}
                    {renderBox(7)}
                    {renderBox(8)}
                </div>
            </div>
            <button className='reset' onClick={resetGame}>Reset</button>
        </div>
    );
}
