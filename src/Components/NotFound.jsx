import React from 'react'

export default function NotFound() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404 - Page Not Found</h1>
            <p style={styles.paragraph}>Sorry, the page you're looking for doesn't exist.</p>
        </div>
    )
}
const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '36px',
        color: '#FF5733',
    },
    paragraph: {
        fontSize: '18px',
        color: 'black',
    },
}