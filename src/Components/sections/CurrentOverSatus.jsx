
// import React from 'react';
// import "./currentOverStatus.css";

// export default function CurrentOverStatus({ ballScores }) {
//     return (
//         <div style={{ padding: "8px", color: "black", fontWeight: "500" }}>
//             <p style={{ paddingLeft: "30px", color: "white", letterSpacing: "3px" }}>This Over</p>
//             <div id='currentOver'>
//                 {ballScores.map((score, index) => (
//                     <div style={{ textAlign: "center", color: "red" }} key={index}>
//                         <div className='currentBall' style={{ backgroundColor: getBallColor(index) }}>
//                             {score}
//                         </div>
//                         {`${index + 1}th ball`}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // Helper function to determine the background color for each ball
// function getBallColor(index) {
//     const colors = ["#bab4b4", "skyblue", "#5dcf5d", "orange", "yellow", "#d5cbe1"];
//     return colors[index] || "#ffffff";
// }

import React from 'react';
import "./currentOverStatus.css";

export default function CurrentOverStatus({ ballScores, currentBallIndex }) {
    return (
        <div style={{ padding: "8px", color: "black", fontWeight: "500" }}>
            {/* <p style={{ paddingLeft: "30px", color: "white", letterSpacing: "3px" }}>This Over</p> */}
            <div id='currentOver'>
                {ballScores.map((score, index) => (
                    <div style={{ textAlign: "center", color: "red" }} key={index}>
                        <div
                            className='currentBall'
                            style={{
                                backgroundColor: getBallColor(index),
                                border: index === currentBallIndex ? '3px solid black' : 'none', // Apply border to the active ball
                            }}
                        >
                            {score}
                        </div>
                        {`${index + 1}th ball`}
                    </div>
                ))}
            </div>
        </div>
    );
}

// Helper function to determine the background color for each ball
function getBallColor(index) {
    const colors = ["#bab4b4", "skyblue", "#5dcf5d", "orange", "yellow", "#d5cbe1"];
    return colors[index] || "#ffffff";
};

