import React, { useState } from 'react';
import x_icon from '../assets/x-png-33.png';
import o_icon from '../assets/O-Letter.png';
import './Tictac.css';

const Tictac = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

    const toggle = (e, num) => {
        if (lock) {
            return;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src="${x_icon}" alt="X">`;
            data[num] = "x";
            setCount(count + 1);
        } else {
            e.target.innerHTML = `<img src="${o_icon}" alt="O">`;
            data[num] = "o";
            setCount(count + 1);
        }
        if (checkGame()) {
            alert("You won");
            resetGame();
        }
    };

    const checkGame = () => {
        if (
            (data[0] === data[1] && data[1] === data[2] && data[0] !== "") || 
            (data[3] === data[4] && data[4] === data[5] && data[3] !== "") || 
            (data[6] === data[7] && data[7] === data[8] && data[6] !== "") || 
            (data[0] === data[3] && data[3] === data[6] && data[0] !== "") || 
            (data[1] === data[4] && data[4] === data[7] && data[1] !== "") || 
            (data[2] === data[5] && data[5] === data[8] && data[2] !== "") || 
            (data[0] === data[4] && data[4] === data[8] && data[0] !== "") || 
            (data[2] === data[4] && data[4] === data[6] && data[2] !== "")
        ) {
           return true;
        }
        return false;
    };

    const resetGame = () => {
        setData(Array(9).fill(""));
        setCount(0);
        setLock(false);
    };

    return (
        <div className="container">
            <h1 className='Title'>Tic tac toe game in react</h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button type="button" className='reset' onClick={resetGame}>Reset</button>
        </div>
    );
};

export default Tictac;
