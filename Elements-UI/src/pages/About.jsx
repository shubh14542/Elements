import React from 'react';

const About = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#e0e0e0',
        fontFamily: "'Orbitron', 'Segoe UI', sans-serif",
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '3.5rem',
          marginBottom: '1rem',
          color: '#00e5ff',
          textShadow: '0 0 10px #00e5ff',
          fontWeight: '900',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        About Elements
      </h1>

      <p
        style={{
          maxWidth: '700px',
          fontSize: '1.3rem',
          lineHeight: 1.7,
          marginBottom: '3rem',
          color: '#b0d6f7',
        }}
      >
        Elements was founded to build immersive, cutting-edge gaming experiences and
        spaces where gamers can unite, compete, and unwind. We blend the latest
        technology with a passion for community to create zones that feel alive and
        welcoming — from high-end consoles to chill lounges and beyond.
      </p>
       
      </div>

  );
};

export default About;
