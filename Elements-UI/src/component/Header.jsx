import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, User2, LogOut, BookmarkCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Search from './Search';
import useMobile from '../hooks/useMobile';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile] = useMobile();
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const closeOnClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', closeOnClickOutside);
    return () => document.removeEventListener('mousedown', closeOnClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-lg border-b border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 py-2  flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-lime-400 text-2xl font-gamer font-bold drop-shadow-[0_0_10px_rgba(163,230,53,0.9)] hover:text-lime-300 transition hover:scale-105"
        >
          <Gamepad2 className="w-7 h-7 animate-pulse" />
          <span>Elements</span>
        </Link>

        {/* Search + Actions (Mobile Layout) */}
        {isMobile ? (
          <div className="w-full flex items-center justify-between gap-4">
            <div className="flex-grow">
              <Search />
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="px-3 py-2 text-xs font-semibold text-white bg-cyan-700 rounded-lg hover:bg-cyan-600 transition shadow"
              >
                Login
              </Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleMenu}
                  className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-cyan-500 bg-[#111] text-cyan-400 hover:scale-110 transition shadow-md hover:shadow-cyan-400/40"
                >
                  <User2 className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {menuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-48 bg-[#111] border border-cyan-700 p-4 rounded-xl shadow-xl text-white space-y-3 z-50"
                    >
                      <Link to="/profile" className="flex items-center gap-2 text-cyan-300 hover:text-cyan-400 transition">
                        <User2 className="w-4 h-4" /> My Profile
                      </Link>
                      <Link to="/bookings" className="flex items-center gap-2 text-cyan-300 hover:text-cyan-400 transition">
                        <BookmarkCheck className="w-4 h-4" /> My Bookings
                      </Link>
                      <button className="flex items-center gap-2 w-full text-red-400 hover:text-red-500 transition">
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ) : (
          // Desktop Layout
          <>
            <div className="w-full md:w-1/2">
              <Search />
            </div>

            {/* Actions: Login + Profile Icon */}
            <div className="flex items-center gap-4" ref={dropdownRef}>
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-semibold text-white bg-cyan-700 rounded-lg hover:bg-cyan-600 transition shadow"
              >
                Login
              </Link>
              <button
                onClick={toggleMenu}
                className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-cyan-500 bg-[#111] text-cyan-400 hover:scale-110 transition shadow-md hover:shadow-cyan-400/40"
              >
                <User2 className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-16 right-0 w-56 bg-[#111] border border-cyan-700 p-4 rounded-xl shadow-2xl text-white space-y-3 z-50"
                  >
                    <Link to="/profile" className="flex items-center gap-2 text-cyan-300 hover:text-cyan-400 transition">
                      <User2 className="w-4 h-4" /> My Profile
                    </Link>
                    <Link to="/bookings" className="flex items-center gap-2 text-cyan-300 hover:text-cyan-400 transition">
                      <BookmarkCheck className="w-4 h-4" /> My Bookings
                    </Link>
                    <button className="flex items-center gap-2 w-full text-red-400 hover:text-red-500 transition">
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
