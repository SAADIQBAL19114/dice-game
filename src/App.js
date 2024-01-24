import { useState } from "react";

function App() {
  const [imgSource, setImgSource] = useState(require("./img/dice-1.png"));
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(0);
  const [activePlayer, setActivePlayer] = useState(1);
  const [playGame, setPlayGame] = useState(true);
  const [winner1, setWinner1] = useState(false);
  const [winner2, setWinner2] = useState(false)


  const handleDice = () => {
    if (playGame) {
      const dice = Math.floor(Math.random() * 6) + 1;
      setImgSource(require(`./img/dice-${dice}.png`));
      if (dice !== 1) {
        if (activePlayer === 1) {
          setCurrent1((prevCurrent) => prevCurrent + dice);
        } else {
          setCurrent2((prevCurrent) => prevCurrent + dice);
        }
      } else {
        setActivePlayer(activePlayer === 1 ? 2 : 1);
        setCurrent1(0);
        setCurrent2(0);
      }
    }
  };

  const handleSwitch = () => {
    if (playGame) {
      const playerActive = setActivePlayer(activePlayer === 1 ? 2 : 1);
      setScore1((prevScore) => prevScore + current1);
      setCurrent1(0);
      setScore2((prevScore) => prevScore + current2);
      setCurrent2(0);
      return playerActive;
    }
  };

  const handleNewGame = () => {
    setScore1(0)
    setScore2(0)
    setCurrent1(0)
    setCurrent2(0)
    setPlayGame(true)
    setActivePlayer(1)
    setImgSource(require(`./img/dice-1.png`));
  }

  if(playGame){
   if (score1 >= 100) {
     setPlayGame(false);
     setWinner1(true);
   }
   if (score2 >= 100) {
     setPlayGame(false);
     setWinner2(true);
   }
  }

  return (
    <div className="App">
      <section
        className={`player ${activePlayer === 1 ? "player_active" : ""} ${
          winner1 === true ? "player_winner" : ""
        }`}
      >
        <h2 className={`name ${winner1 === true ? "h2_player_winner" : ""}`}>
          Player 1
        </h2>
        <p className="score">{score1}</p>
        <div className="current">
          <p className="current_label">Current</p>
          <p className="current_score">{current1}</p>
        </div>
      </section>
      <section
        className={`player ${activePlayer === 2 ? "player_active" : ""} ${
          winner2 === true ? "player_winner" : ""
        }`}
      >
        <h2 className={`name ${winner2 === true ? "h2_player_winner" : ""}`}>
          Player 2
        </h2>
        <p className="score">{score2}</p>
        <div className="current">
          <p className="current_label">Current</p>
          <p className="current_score">{current2}</p>
        </div>
      </section>
      <img src={imgSource} alt="Playing dice" className="dice" />
      <button 
        className="btn btn_new"
        onClick={handleNewGame}
      >
      🔄 New Game</button>
      <button
        className="btn btn_roll"
        onClick={handleDice}
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
