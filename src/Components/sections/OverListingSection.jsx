
import React, { useEffect, useState } from 'react';
import CurrentOverStatus from './CurrentOverSatus';


export default function OverListingSection({allOvers}) {

  if (!allOvers || allOvers.length === 0) {
    return (
      <div>
        <p style={{ color: 'aliceblue' }}>No overs data available</p>
      </div>
    );
  }
  
  return (
    <div>
      {allOvers.map((item, index) => (
        <div key={index}>
          <p style={{ paddingLeft: "50px", margin: "0px", color: "aliceblue" }}>Over {index + 1}</p>
          <CurrentOverStatus ballScores={item} currentBallIndex="none" />
        </div>
      ))}
    </div>
  );
}
