
// import React, { useState, useEffect } from 'react';
// import CurrentOverStatus from '../sections/CurrentOverSatus';
// import ScoreBoard from '../sections/ScoreBoard';
// import io from 'socket.io-client';

// export default function Home() {
//   // const [score, setScore] = useState([0, 0, 0, 0, 0, 0]);
//   const [socketScore, setSocketScore] = useState({
//     runs: 0,
//     wickets: 0,
//     currentOver:0,
//     currentBallIndex:0,
//     currentOverScore: [0, 0, 0, 0, 0, 0],
//   });

//   // Create socket connection inside useEffect
//   useEffect(() => {
//     const socket = io('http://localhost:8080', { transports: ['websocket', 'polling'] });

//     // Listen for the 'welcome' event from the server
//     socket.on('welcome', (data) => {
//       console.log(data); // Logs: "Hello from the server!"
//     });

//     // Listen for 'scoreUpdate' event to get live score updates
//     socket.on('scoreUpdate', (newScore) => {
//       console.log('New score from server:', newScore.currentOverScore);

//       setSocketScore(newScore); 

//     });

//     // Cleanup socket on unmount
//     return () => {
//       socket.off('welcome');
//       socket.off('scoreUpdate');
//       socket.disconnect();
//     };
//   }, []);

//   // Function to send a message to the server
//   const sendMessage = () => {
//     const socket = io('http://localhost:8080'); // Ensure the socket is initialized
//     socket.emit('message', 'Hello from the client!');
//   };

//   return (
//     <div>
//       <ScoreBoard scores={socketScore} />
//       <div style={{ width: '50%', margin: "20px auto", textAlign: "center", border: "2px solid yellow", padding: "15px", boxShadow: "0 0 15px rgba(219, 205, 52, 0.66)" }}>
//         Animation Of Current Ball
//       </div>
//       <CurrentOverStatus ballScores={socketScore.currentOverScore} currentBallIndex="none" />

//       {/* Add a button to send a message to the server */}
//       <button onClick={sendMessage}>Send Message to Server</button>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import CurrentOverStatus from '../sections/CurrentOverSatus';
import ScoreBoard from '../sections/ScoreBoard';
import io from 'socket.io-client';

export default function Home() {
  // Initialize socketScore with default values
  const [socketScore, setSocketScore] = useState({
    runs: 0,
    wickets: 0,
    currentOver: 0,
    currentBallIndex: 0,
    currentOverScore: [0, 0, 0, 0, 0, 0],
    allOversScoreList: []
  });

  // Store the last valid score in state
  const [lastValidScore, setLastValidScore] = useState(socketScore);

  useEffect(() => {
    const socket = io('http://localhost:8080', { transports: ['websocket', 'polling'] });

    // Listen for 'scoreUpdate' event to get live score updates
    socket.on('scoreUpdate', (newScore) => {
      console.log('New score from server:', newScore.currentOverScore);
      if (newScore && newScore.runs !== undefined && newScore.wickets !== undefined) {
        setSocketScore(newScore);
        setLastValidScore(newScore);  // Update the last valid score
      }
    });

    // Cleanup socket on unmount
    return () => {
      socket.off('scoreUpdate');
      socket.disconnect();
    };
  }, []);

  // Function to send a message to the server
  // const sendMessage = () => {
  //   const socket = io('http://localhost:8080');
  //   socket.emit('message', 'Hello from the client!');
  // };

  const handleAnimation = () => {
    switch(socketScore.currentOverScore[socketScore.currentBallIndex]){
      case 4: return "/4runs.mp4"
      case 6: return "/6runs.mp4"
      case "out": return "/out.mp4"
      default: return "/bat1.mp4"
    }
  }

  return (
    <div>
      {/* Ensure socketScore is never undefined, fallback to lastValidScore */}
      <ScoreBoard scores={socketScore || lastValidScore} />

      <div
        style={{
          width: '50%',
          margin: '20px auto',
          textAlign: 'center',
          border: '2px solid yellow',
          padding: '15px',
          boxShadow: '0 0 15px rgba(219, 205, 52, 0.66)',
        }}
      >
        <video
          src={handleAnimation()}
          autoPlay
          loop
          muted
          style={{ width: '100%', height: '100px' }}
        />
      </div>

      <CurrentOverStatus ballScores={socketScore.currentOverScore} currentBallIndex="none" />
      {/* <button onClick={sendMessage}>Send Message to Server</button> */}
    </div>
  );
}
