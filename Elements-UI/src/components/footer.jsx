import React from 'react'
import { FaLinkedin, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer
        className="text-white py-6 mt-12 "
        style={{
          backgroundColor: '#121212', // Dark background for a gaming vibe
        }}
      >
        <div className="container mx-auto flex flex-col items-center space-y-4 font-sans">
          <p className="text-lg tracking-wide text-gray-400">
            &copy; 2025 Elements. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition-all duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
