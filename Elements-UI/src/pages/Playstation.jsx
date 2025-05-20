// import React from 'react';

// const ConsoleCard = ({ model, type, image, onBook }) => {
//   return (
//     <div
//       style={{
//         background: 'rgba(255, 255, 255, 0.05)',
//         border: '1px solid rgba(255, 255, 255, 0.1)',
//         borderRadius: '16px',
//         padding: '1.5rem',
//         textAlign: 'center',
//         backdropFilter: 'blur(10px)',
//         boxShadow: '0 0 20px rgba(0,0,0,0.6)',
//       }}
//     >
//       <img
//         src={image}
//         alt={model}
//         style={{
//           width: '100%',
//           height: '200px',
//           objectFit: 'cover',
//           borderRadius: '12px',
//           marginBottom: '1rem',
//         }}
//       />
//       <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{model}</h2>
//       <p style={{ marginBottom: '1rem', opacity: 0.7 }}>{type}</p>
//       <button
//         style={{
//           padding: '0.5rem 1.2rem',
//           fontSize: '1rem',
//           backgroundColor: '#2196F3',
//           border: 'none',
//           borderRadius: '8px',
//           color: '#fff',
//           cursor: 'pointer',
//         }}
//         onClick={onBook}
//       >
//         Book Now
//       </button>
//     </div>
//   );
// };

// const PlayStation = () => {
//   const consoles = [
//     {
//       model: 'PS5-1',
//       type: 'PlayStation 5',
//       image: 'https://cdn.mos.cms.futurecdn.net/w3DduzA9MmGhGdJXCP7XpL.jpg',
//     },
//     {
//       model: 'PS5-2',
//       type: 'PlayStation 5',
//       image: 'https://cdn.mos.cms.futurecdn.net/w3DduzA9MmGhGdJXCP7XpL.jpg',
//     },
//     {
//       model: 'PS5-3',
//       type: 'PlayStation 5',
//       image: 'https://cdn.mos.cms.futurecdn.net/w3DduzA9MmGhGdJXCP7XpL.jpg',
//     },
//     {
//       model: 'PS4-1',
//       type: 'PlayStation 4',
//       image: 'https://cdn.mos.cms.futurecdn.net/7Y8vZzBFKo8zryiAVRRu6b.jpg',
//     },
//   ];

//   return (
//     <div
//       style={{
//         padding: '3rem 2rem',
//         background: 'linear-gradient(to bottom, #0f0f0f, #1c1c1c)',
//         minHeight: '100vh',
//         color: '#fff',
//         fontFamily: 'Segoe UI, sans-serif',
//       }}
//     >
//       <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
//         🎮 PlayStation Bookings
//       </h1>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//           gap: '2rem',
//           maxWidth: '1000px',
//           margin: '0 auto',
//         }}
//       >
//         {consoles.map((console, index) => (
//           <ConsoleCard
//             key={index}
//             model={console.model}
//             type={console.type}
//             image={console.image}
//             onBook={() => alert(`Booking ${console.model}`)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PlayStation;

import React, { useState } from 'react';

// Individual console card
const ConsoleCard = ({ model, type, image, status, onBook }) => {
  const isAvailable = status === 'available';

  return (
    <div
      style={{
        background: 'rgba(0, 0, 0, 0.6)',
        border: `2px solid ${isAvailable ? 'rgba(0, 255, 255, 0.4)' : 'rgba(255, 0, 0, 0.4)'}`,
        borderRadius: '20px',
        padding: '1.5rem',
        textAlign: 'center',
        backdropFilter: 'blur(14px)',
        boxShadow: isAvailable
          ? '0 0 25px rgba(0, 255, 255, 0.2)'
          : '0 0 25px rgba(255, 0, 0, 0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        color: '#fff',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.03)';
        e.currentTarget.style.boxShadow = isAvailable
          ? '0 0 35px rgba(0, 255, 255, 0.4)'
          : '0 0 35px rgba(255, 0, 0, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = isAvailable
          ? '0 0 25px rgba(0, 255, 255, 0.2)'
          : '0 0 25px rgba(255, 0, 0, 0.2)';
      }}
    >
      <img
        src={image}
        alt={model}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '12px',
          marginBottom: '1rem',
        }}
      />
      <h2 style={{ fontSize: '1.6rem', marginBottom: '0.3rem', color: '#00ffff' }}>
        {model}
      </h2>
      <p style={{ marginBottom: '0.5rem', color: '#ccc' }}>{type}</p>
      <p style={{ marginBottom: '1rem', color: isAvailable ? '#00ff88' : '#ff3b3b' }}>
        {isAvailable ? '🟢 Available' : '🔴 Booked'}
      </p>
      <button
        style={{
          padding: '0.6rem 1.5rem',
          fontSize: '1rem',
          background: isAvailable
            ? 'linear-gradient(135deg, #00ffff, #007fff)'
            : '#555',
          border: 'none',
          borderRadius: '10px',
          color: '#000',
          fontWeight: 'bold',
          fontFamily: 'Orbitron, sans-serif',
          boxShadow: isAvailable ? '0 0 12px #00ffff' : 'none',
          cursor: isAvailable ? 'pointer' : 'not-allowed',
        }}
        disabled={!isAvailable}
        onClick={() => onBook(model)}
      >
        {isAvailable ? 'Book Now' : 'Unavailable'}
      </button>
    </div>
  );
};

// Main page
const PlayStation = () => {
  const [consoles, setConsoles] = useState([
    {
      model: 'PS5-1',
      type: 'PlayStation 5',
      image: 'https://cdn.mos.cms.futurecdn.net/w3DduzA9MmGhGdJXCP7XpL.jpg',
      status: 'available',
    },
    {
      model: 'PS5-2',
      type: 'PlayStation 5',
      image: 'https://cdn.mos.cms.futurecdn.net/w3DduzA9MmGhGdJXCP7XpL.jpg',
      status: 'booked',
    },
    {
      model: 'PS5-3',
      type: 'PlayStation 5',
      image: 'https://cdn.mos.cms.futurecdn.net/w3DduzA9MmGhGdJXCP7XpL.jpg',
      status: 'available',
    },
    {
      model: 'PS4-1',
      type: 'PlayStation 4',
      image: 'https://cdn.mos.cms.futurecdn.net/7Y8vZzBFKo8zryiAVRRu6b.jpg',
      status: 'available',
    },
  ]);

  const handleBooking = (model) => {
    alert(`✅ Booking confirmed for ${model}`);
    setConsoles((prev) =>
      prev.map((c) =>
        c.model === model ? { ...c, status: 'booked' } : c
      )
    );
  };

  return (
    <div
      style={{
        padding: '4rem 2rem',
        background: 'radial-gradient(circle at top, #0f0f0f, #000)',
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
          textShadow: '0 0 15px #00ffff',
        }}
      >
        🎮 PlayStation Gaming Zone
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {consoles.map((console, index) => (
          <ConsoleCard
            key={index}
            model={console.model}
            type={console.type}
            image={console.image}
            status={console.status}
            onBook={handleBooking}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayStation;

