import React from 'react';
import './scoreBoard.css';

export default function ScoreBoard({ scores = {} }) {
  // Destructure scores with default values
  const { runs = 0, wickets = 0, currentOver = 0, currentBallIndex = 0 } = scores;

  return (
    <div id="headSection">
      <p id="score">{runs}/{wickets}</p>
      <p id="wicket">Over ({currentOver}.{currentBallIndex})</p>
    </div>
  );
}
