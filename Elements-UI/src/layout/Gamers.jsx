// layout/GamersLayout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../pages/Menu'

const Gamers = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem', background: '#111', color: '#fff' }}>
      <Menu/>
      <Outlet />
    </div>
  )
}

export default Gamers
