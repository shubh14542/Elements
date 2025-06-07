import React, { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchPage, setIsSearchPage] = useState(false);

  useEffect(() => {
    setIsSearchPage(location.pathname === "/search");
  }, [location.pathname]);

  const redirectToSearchPage = () => {
    navigate("/search");
  };

  return (
    <div className="w-full px-4 py-4 flex justify-center items-center">
      {!isSearchPage ? (
        <div
          onClick={redirectToSearchPage}
          className="cursor-pointer relative group w-full max-w-xl px-6 py-4 bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] border border-cyan-500 rounded-xl hover:scale-105 transition-transform shadow-[0_0_10px_#00ffff40]"
        >
          <div className="flex items-center gap-3">
            <SearchIcon className="text-cyan-400 w-5 h-5 group-hover:animate-spin-slow" />
            <TypeAnimation
              sequence={[
                "Valorant",
                1000,
                "Cyber-Punk",
                1000,
                "Call of Duty",
                1000,
              ]}
              wrapper="span"
              speed={60}
              className="text-cyan-300 font-mono text-sm md:text-base"
              repeat={Infinity}
            />
          </div>
          {/* Optional: Animated border frame */}
          <div className="absolute top-0 left-0 w-full h-full rounded-xl border-2 border-cyan-600 opacity-10 group-hover:opacity-30 animate-pulse pointer-events-none" />
        </div>
      ) : (
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-5 py-3 text-cyan-200 bg-[#0a0a0a] border border-cyan-500 rounded-xl placeholder-cyan-500 shadow-[0_0_20px_#00ffff30] focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono"
          />
          <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5 pointer-events-none" />
        </div>
      )}
    </div>
  );
};

export default Search;
