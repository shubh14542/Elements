// import React from 'react'

// const Menu = () => {
//   return (
//     <div>
//         <h1> GamerZone </h1>
//     </div>
//   )
// }

// export default Menu

import React from 'react'
import { Link } from 'react-router-dom'

const specialties = [
  {
    title: 'PlayStation Zone',
    path: '/gamers/playstation',
    image: 'https://gaming-cdn.com/images/news/articles/5411/cover/1000x563/ps5-pro-s-upscaling-technology-the-pssr-is-said-to-target-4k-at-120-fps-and-8k-at-60-fps-cover65f83fecb9b56.jpg',
  },
  {
    title: 'High-End Gaming PCs',
    path: '/gamers/gaming-pcs',
    image: 'https://w0.peakpx.com/wallpaper/106/535/HD-wallpaper-pc-gamer.jpg',
  },
  {
    title: 'Rooms Section',
    path: '/gamers/rooms',
    image: 'https://media.vrbo.com/lodging/55000000/54640000/54633000/54632949/ba0cfea1.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
  },
]

const Menu = () => {
  return (
    <div
      style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(to bottom, #0f0f0f, #1c1c1c)',
        minHeight: '100vh',
        color: '#fff',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '3rem', fontWeight: 'bold' }}>
        🎮 Gamer's Specialty Zone
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
        {specialties.map(({ title, path, image }, index) => (
          <Link
            key={index}
            to={path}
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 0 30px rgba(0,0,0,0.7)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={image}
                alt={title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                }}
              />
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Menu
