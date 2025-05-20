import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu";

const Header = () => {
  const navigate = useNavigate();
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const user = useSelector((state) => state?.user);
  const menuRef = useRef(null);

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  const handleCloseUserMenu = () => {
    setOpenUserMenu(false);
  };

  const handleMobileUser = () => {
    if (!user?._id) {
      navigate("/login");
      return;
    }
    navigate("/user-mobile");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-28 sticky top-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-md pt-7 px-2 border-b border-[#00ffcc33] shadow-md shadow-[#00ffcc22]">
      <div className="container mx-auto px-4 flex items-center justify-between font-sans">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-[#00ffcc] tracking-wider select-none">
          <span className="hidden lg:block">⚡ Elements</span>
          <span className="lg:hidden">⚡E</span>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex gap-8 text-[#f0f0f0] font-medium tracking-wide">
          <Link to="/" className="hover:text-[#00ffcc] transition duration-200">Home</Link>
          <Link to="/menu" className="hover:text-[#00ffcc] transition duration-200">Menu</Link>
          <Link to="/about" className="hover:text-[#00ffcc] transition duration-200">About</Link>
          <Link to="/contact" className="hover:text-[#00ffcc] transition duration-200">Contact</Link>
        </nav>

        {/* Mobile User Icon */}
        <div className="lg:hidden text-[#00ffcc]">
          <button className="cursor-pointer" onClick={handleMobileUser}>
            <FaUserCircle size={28} />
          </button>
        </div>

        {/* Desktop User Panel */}
        <div className="hidden lg:flex items-center gap-6">
          {user?._id ? (
            <div className="relative" ref={menuRef}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => setOpenUserMenu((prev) => !prev)}
                onKeyDown={(e) => e.key === "Enter" && setOpenUserMenu((prev) => !prev)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111]/80 border border-[#00ffcc33] text-[#00ffcc] font-semibold tracking-wide cursor-pointer hover:bg-[#1a1a1a]/90 transition duration-300 shadow-[0_0_10px_#00ffcc33]"
              >
                Account {openUserMenu ? <RxTriangleUp /> : <RxTriangleDown />}
              </div>
              {openUserMenu && (
                <div className="absolute right-0 mt-3">
                  <div className="w-72 rounded-2xl p-3 bg-[#0f0f0f]/95 backdrop-blur-md border border-[#00ffcc20] shadow-[0_0_25px_#00ffcc22]">
                    <UserMenu close={handleCloseUserMenu} />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={redirectToLoginPage}
              className="px-4 py-2 rounded-xl border border-[#00ffcc] text-[#00ffcc] font-semibold hover:bg-[#00ffcc] hover:text-[#0d0d0d] transition duration-300 shadow-md shadow-[#00ffcc55]"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
