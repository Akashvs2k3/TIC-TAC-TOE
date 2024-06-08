import React, { useState, useRef } from 'react';
import '../Components/tictactoe.css';
import circle_icon from '../img/circle.png';
import cross_icon from '../img/cross.png';

function TicTacToe() {
  let [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  let titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }

    if (count % 2 === 0) {
      data[num] = "x";
      setCount(++count);
    } else {
      data[num] = "o";
      setCount(++count);
    }

    checkwin();
    setData(data);
  };

  const checkwin= ()=>{
    if (data[0]===data[1] && data[1]===data[2] && data[2]!==""){
      won(data[2])
    }
    else if (data[3]===data[4] && data[4]===data[5] && data[5]!==""){
      won(data[5])
    }
    else if (data[6]===data[7] && data[7]===data[8] && data[8]!==""){
      won(data[8])
    }
    else if (data[0]===data[3] && data[3]===data[6] && data[6]!==""){
      won(data[6])
    }
    else if (data[1]===data[4] && data[4]===data[7] && data[7]!==""){
      won(data[7])
    }
    else if (data[2]===data[5] && data[5]===data[8] && data[8]!==""){
      won(data[8])
    }
    else if (data[0]===data[4] && data[4]===data[8] && data[8]!==""){
      won(data[8])
    }
    else if (data[0]===data[1] && data[1]===data[2] && data[2]!==""){
      won(data[2])
    }
    else if (data[2]===data[4] && data[4]===data[6] && data[6]!==""){
      won(data[6])
    }
  }


  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> Wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}> Wins`;
    }
  };

  const resetGame = () => {
    setCount(0);
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    titleRef.current.innerHTML = "Tic Tac Toe Game In <span>React</span>";
  };

  return (
    <div className='container'>
      <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
     
<div className="board">
        
        <div className="row1">
                 <div className="boxes" onClick={(e) => { toggle(e, 0); }}>
                   {data[0] === 'x' && <img src={cross_icon} alt="cross" />}
                   {data[0] === 'o' && <img src={circle_icon} alt="circle" />}
                 </div>
                 <div className="boxes" onClick={(e) => { toggle(e, 1); }}>
                   {data[1] === 'x' && <img src={cross_icon} alt="cross" />}
                   {data[1] === 'o' && <img src={circle_icon} alt="circle" />}
                 </div>
                 <div className="boxes" onClick={(e) => { toggle(e, 2); }}>
                   {data[2] === 'x' && <img src={cross_icon} alt="cross" />}
                   {data[2] === 'o' && <img src={circle_icon} alt="circle" />}
                 </div>
               </div>
              
               <div className="row2">
                 <div className="boxes" onClick={(e) => { toggle(e, 3); }}>
                   {data[3] === 'x' && <img src={cross_icon} alt="cross" />}
                   {data[3] === 'o' && <img src={circle_icon} alt="circle" />}
                 </div>
                 <div className="boxes" onClick={(e) => { toggle(e, 4); }}>
                   {data[4] === 'x' && <img src={cross_icon} alt="cross" />}
                   {data[4] === 'o' && <img src={circle_icon} alt="circle" />}
                 </div>
                 <div className="boxes" onClick={(e) => { toggle(e, 5); }}>
                   {data[5] === 'x' && <img src={cross_icon} alt="cross" />}
                   {data[5] === 'o' && <img src={circle_icon} alt="circle" />}
                 </div>
               </div>
       
               <div className="row1">
                 <div className="boxes" onClick={(e) => { toggle(e, 6); }}>
                   {data[6] === 'x' && <img src={cross_icon} alt="cross" />}
                   {data[6] === 'o' && <img src={circle_icon} alt="circle" />}
                 </div>
                 <div className="boxes" onClick={(e) => { toggle(e, 7); }}>
                   {data[7] === 'x' && <img src={cross_icon} alt="cross" />}
                   {data[7] === 'o' && <img src={circle_icon} alt="circle" />}
                 </div>
                 <div className="boxes" onClick={(e) => { toggle(e, 8); }}>
                   {data[8] === 'x' && <img src={cross_icon} alt="cross" />}
                   {data[8] === 'o' && <img src={circle_icon} alt="circle" />}
                 </div>
               </div>
       
             </div>
             <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
}

export default TicTacToe;
