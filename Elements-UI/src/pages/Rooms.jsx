import React from 'react';
const Rooms = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        color: '#e0e0e0',
        padding: '5rem 2rem',
        fontFamily: "'Exo 2', 'Segoe UI', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: '700',
          letterSpacing: '0.15em',
          marginBottom: '2rem',
          color: '#82cfff',
          textTransform: 'uppercase',
          textShadow: '0 0 8px #82cfff',
        }}
      >
        Chill Lounge
      </h1>

      <div
        style={{
          maxWidth: '900px',
          backgroundColor: '#1f1f1f',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 0 15px #3978ff88',
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <img
          src="https://images.unsplash.com/photo-1598545344186-d245918a2c24?auto=format&fit=crop&w=800&q=80"
          alt="Chill Lounge"
          style={{
            width: '40%',
            borderRadius: '10px',
            objectFit: 'cover',
            boxShadow: '0 0 20px #3978ffaa',
            height: '260px',
          }}
        />
        <div style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          <p>
            Relax in our ultra-modern Chill Lounge, designed for gamers who want a quiet,
            stylish spot to unwind. Enjoy big screens, premium sound, and a curated
            selection of snacks and drinks.
          </p>
          <p style={{ marginTop: '1rem', fontWeight: '600', color: '#82cfff' }}>
            Stream your favorite series, catch up with friends, or recharge for the next game.
          </p>
        </div>
      </div>

      <button
        style={{
          marginTop: '3rem',
          padding: '1rem 2.5rem',
          fontSize: '1.2rem',
          backgroundColor: '#3978ff',
          border: 'none',
          borderRadius: '30px',
          color: '#fff',
          fontWeight: '700',
          cursor: 'pointer',
          boxShadow: '0 0 15px #3978ffcc',
          transition: 'background-color 0.25s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2b5cc2')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3978ff')}
        onClick={() => alert('Booking feature coming soon!')}
      >
        Reserve Your Spot
      </button>
    </div>
  );
};

export default Rooms;
