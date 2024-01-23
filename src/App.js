import { useState } from "react";
import pic from "./img/dice-1.png";

function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(0);

  const [imgSource, setImgSource] = useState(require("./img/dice-1.png"));
  const [activePlayer, setActivePlayer] = useState(1);

  const handleDice = () => {
    // setActivePlayer(1);
    const dice = Math.floor(Math.random() * 6) + 1;
    if (dice !== 1) {
      setActivePlayer(activePlayer === 1 ? 2 : 1)
      if (activePlayer === 1) {
        setCurrent1((prevCurrent) => prevCurrent + dice);
      } else {
        setCurrent2((prevCurrent) => prevCurrent + dice);
      }
    }
    setImgSource(require(`./img/dice-${dice}.png`));
    console.log(dice);
  };

  const handleSwitch = () => {
   const hlo = setActivePlayer(activePlayer === 1 ? 2 : 1)
    console.log();

  };

  return (
    <div className="App">
      {activePlayer && (
        <section
          className={`player player_0 ${
            activePlayer === 1 ? "player_active" : ""
          }`}
        >
          <h2 className="name">Player 1</h2>
          <p className="score">{score1}</p>
          <div className="current">
            <p className="current_label">Current</p>
            <p className="current_score">{current1}</p>
          </div>
        </section>
      )}
      {activePlayer && (
        <section
          className={`player player_1 ${
            activePlayer === 2 ? "player_active" : ""
          }`}
        >
          <h2 className="name">Player 2</h2>
          <p className="score">{score2}</p>
          <div className="current">
            <p className="current_label">Current</p>
            <p className="current_score">{current2}</p>
          </div>
        </section>
      )}
      <img src={imgSource} alt="Playing dice" className="dice" />
      <button className="btn btn_new">🔄 New Game</button>
      <button
        className="btn btn_roll"
        onClick={() => {
          handleDice();
        }}
      >
        🎲 Roll dice
      </button>
      <button className="btn btn_hold" onClick={handleSwitch}>
        📥 Hold
      </button>
    </div>
  );
}

export default App;
