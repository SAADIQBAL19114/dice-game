import React from 'react'

const Button = ({handleNewGame, buttonClass, text}) => {
  return (
    <button 
        className={`btn ${buttonClass}`} 
        onClick={handleNewGame}>
      {text}
    </button>
  );
}

export default Button