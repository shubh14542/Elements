import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black min-h-[25vh] bg-opacity-30 backdrop-blur-md border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center font-gamer text-sm text-gray-300">
        &copy; {new Date().getFullYear()} GamerZone. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
