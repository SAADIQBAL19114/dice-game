import React from 'react'

const PlayerSection = ({
  player,
  activePlayer,
  winner,
  score,
  current,
  newActivePlayer,
}) => {
  return (
    <section
      className={`player ${
        activePlayer === newActivePlayer ? "player_active" : ""
      }  ${winner === true ? "player_winner " : ""}`}
    >
      <div className={`${winner === true ? "confetti" : ""}`}></div>
      <div className={`${winner === true ? "confetti" : ""}`}></div>
      <div className={`${winner === true ? "confetti" : ""}`}></div>
      <div className={`${winner === true ? "confetti" : ""}`}></div>
      <div className={`${winner === true ? "confetti" : ""}`}></div>
      <div className={`${winner === true ? "confetti" : ""}`}></div>
      <div className={`${winner === true ? "confetti" : ""}`}></div>
      <div className={`${winner === true ? "confetti" : ""}`}></div>
      <div className={`${winner === true ? "confetti" : ""}`}></div>
      <div className={`${winner === true ? "confetti" : ""}`}></div>
    

      <h2 className={`name ${winner === true ? "h2_player_winner" : ""}`}>
        {player}
      </h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current_label">Current</p>
        <p className="current_score">{current}</p>
      </div>
    </section>
  );
};

export default PlayerSection