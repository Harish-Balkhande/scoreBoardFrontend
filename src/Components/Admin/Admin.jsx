import React, { useEffect, useState } from 'react'
import ScoreBoard from '../sections/ScoreBoard'
import OverControlSection from '../sections/OverControlSection'
import OverListingSection from '../sections/OverListingSection'
import io from 'socket.io-client';

export default function Admin() {
    const [score, setScore] = useState();

    useEffect(() => {
        const socket = io('https://scoreboardbackend.onrender.com', { transports: ['websocket', 'polling'] });

        // Listen for 'scoreUpdate' event to get live score updates
        socket.on('scoreUpdate', (newScore) => {
            console.log('New score from server:', newScore.currentOverScore);
            if (newScore && newScore.runs !== undefined && newScore.wickets !== undefined) {
                setScore(newScore);
            }
        });

        // Cleanup socket on unmount
        return () => {
            socket.off('scoreUpdate');
            socket.disconnect();
        };
    }, []); 
    const allOversScoreList = score?.allOversScoreList || [[0,0,0,0,0,0]];
    return (
        <>
            <ScoreBoard scores ={score} />
            <OverControlSection />
            <OverListingSection allOvers={ allOversScoreList }  />
        </>
    )
}
