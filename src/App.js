import { useState } from "react";
import PlayerSection from "./components/PlayerSection";

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
      setActivePlayer(activePlayer === 1 ? 2 : 1);
      setScore1((prevScore) => prevScore + current1);
      setCurrent1(0);
      setScore2((prevScore) => prevScore + current2);
      setCurrent2(0);
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
    setWinner1(false)
    setWinner2(false)
  }

  if(playGame){
   if (score1 >= 10) {
     setPlayGame(false);
     setWinner1(true);
   }
   if (score2 >= 10) {
     setPlayGame(false);
     setWinner2(true);
   }
  }

  return (
    <div className="App">
      <PlayerSection
        player = {"Player 1"}
        activePlayer={1}
        winner={winner1}
        score={score1}
        current={current1}
        newActivePlayer={activePlayer}
      />
      <PlayerSection
        player = {"Player 2"}
        activePlayer={2}
        winner={winner2}
        score={score2}
        current={current2}
        newActivePlayer={activePlayer}
      />
      <img src={imgSource} alt="Playing dice" className="dice" />
      <button className="btn btn_new" onClick={handleNewGame}>
        🔄 New Game
      </button>
      <button className="btn btn_roll" onClick={handleDice}>
        🎲 Roll dice
      </button>
      <button className="btn btn_hold" onClick={handleSwitch}>
        📥 Hold
      </button>
    </div>
  );
}

export default App;
