import React from "react";

const PlayerSection = ({
  player,
  activePlayer,
  score,
  current,
  newActivePlayer,
}) => {
  return (
    <section
      className={`player ${
        activePlayer === newActivePlayer ? "player_active" : ""
      }  ${score >= 100 ? "player_winner " : ""}`}
    >
      <h2 className={`name ${score >= 100 ? "h2_player_winner" : ""}`}>
        {player}
      </h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current_label">Current</p>
        <p className="current_score">{current}</p>
      </div>
      {score >= 100&& (
        <>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
        </>
      )}
    </section>
  );
};

export default PlayerSection;
