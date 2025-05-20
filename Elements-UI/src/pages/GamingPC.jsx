// // pages/GamingPCs.jsx
// const GamingPC = () => (
//   <div>
//     <h2>High-End Gaming PCs</h2>
//     <p>Top-tier rigs for competitive and casual gamers alike.</p>
//   </div>
// )

// export default GamingPC

import React from 'react';

const pcSetups = Array.from({ length: 17 }, (_, i) => ({
  name: `Beast Rig ${i + 1}`,
  type: 'RTX 4090 | Ryzen 9 | 32GB RAM',
  image: 'https://images.unsplash.com/photo-1616941248999-59b38e09f84b?auto=format&fit=crop&w=1170&q=80',
}));

const PCSetupCard = ({ name, type, image, onBook }) => (
  <div
    style={{
      background: 'rgba(0, 0, 0, 0.6)',
      border: '2px solid rgba(0, 255, 255, 0.2)',
      borderRadius: '20px',
      padding: '1.5rem',
      textAlign: 'center',
      backdropFilter: 'blur(14px)',
      boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.03)';
      e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.6)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.2)';
    }}
  >
    <img
      src={image}
      alt={name}
      style={{
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '12px',
        marginBottom: '1rem',
      }}
    />
    <h2
      style={{
        fontSize: '1.6rem',
        marginBottom: '0.4rem',
        color: '#00ffff',
        fontFamily: 'Orbitron, sans-serif',
      }}
    >
      {name}
    </h2>
    <p style={{ marginBottom: '1rem', color: '#ccc', fontSize: '0.95rem' }}>{type}</p>
    <button
      onClick={onBook}
      style={{
        padding: '0.6rem 1.5rem',
        fontSize: '1rem',
        background: 'linear-gradient(135deg, #00ffff, #007fff)',
        border: 'none',
        borderRadius: '10px',
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'Orbitron, sans-serif',
        boxShadow: '0 0 12px #00ffff',
      }}
    >
      Book Now
    </button>
  </div>
);

const GamingPC = () => {
  return (
    <div
      style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(to bottom, #050505, #0c0c0c)',
        minHeight: '100vh',
        color: '#fff',
        fontFamily: 'Orbitron, sans-serif',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '3rem',
          marginBottom: '2.5rem',
          color: '#00ffff',
          textShadow: '0 0 10px #00ffff',
        }}
      >
        🖥️ Gamer's High-End PC Arena
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {pcSetups.map((pc, index) => (
          <PCSetupCard
            key={index}
            name={pc.name}
            type={pc.type}
            image={pc.image}
            onBook={() => alert(`Booking confirmed for ${pc.name}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default GamingPC;
