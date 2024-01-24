import { useState } from "react";
import PlayerSection from "./components/PlayerSection";
import dice1 from './img/dice-1.png'
import dice2 from './img/dice-2.png'
import dice3 from './img/dice-3.png'
import dice4 from './img/dice-4.png'
import dice5 from './img/dice-5.png'
import dice6 from './img/dice-6.png'
import Button from "./components/Button";

function App() {
  // state defining
  const [imgSource, setImgSource] = useState(null);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [current, setCurrent] = useState(0);
  const [activePlayer, setActivePlayer] = useState(1);
  const [playGame, setPlayGame] = useState(true);

  // dice function
  const handleDice = () => {
    if (playGame) {
      const dice = Math.floor(Math.random() * 6) + 1;
        if(dice === 1){
          setImgSource(dice1)
        }else if (dice === 2){
          setImgSource(dice2)
        }else if (dice === 3){
          setImgSource(dice3)
        }else if (dice === 4){
          setImgSource(dice4)
        }else if (dice === 5){
          setImgSource(dice5)
        }else{
          setImgSource(dice6)
        }
      if (dice !== 1) {
        setCurrent((prevCurrent) => prevCurrent + dice);
      } else {
        setActivePlayer(activePlayer === 1 ? 2 : 1);
        setCurrent(0);
      }
    }
  };

  // hold function
  const handleSwitch = () => {
    if (playGame) {
      if (activePlayer === 1) setScore1((prevScore) => prevScore + current);
      else setScore2((prevScore) => prevScore + current);
      setCurrent(0);
      setActivePlayer(activePlayer === 1 ? 2 : 1);
    }
  };

  // new game function
  const handleNewGame = () => {
    setScore1(0);
    setScore2(0);
    setCurrent(0);
    setPlayGame(true);
    setActivePlayer(1);
    setImgSource(null)
    
  };

  // defining maximum score to win
  if (playGame) {
    if (score1 >= 100) {
      setPlayGame(false);
    }
    if (score2 >= 100) {
      setPlayGame(false);
    }
  }

  return (
    <div className="App">
      <PlayerSection
        player={"Player 1"}
        activePlayer={1}
        score={score1}
        current={activePlayer === 1 ? current : 0}
        newActivePlayer={activePlayer}
      />
      <PlayerSection
        player={"Player 2"}
        activePlayer={2}
        score={score2}
        current={activePlayer === 2 ? current : 0}
        newActivePlayer={activePlayer}
      />
      <img src={imgSource} alt="" className="dice" />
      <Button
        handleNewGame={handleNewGame}
        buttonClass={"btn_new"}
        text={"🔄 New Game"}
      />
      <Button
        handleNewGame={handleDice}
        buttonClass={"btn_roll"}
        text={"🎲 Roll dice"}
      />
      <Button
        handleNewGame={handleSwitch}
        buttonClass={"btn_hold"}
        text={"📥 Hold"}
      />
    </div>
  );
}

export default App;
