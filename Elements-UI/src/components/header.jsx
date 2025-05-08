import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import useMobile from '../hooks/useMobile'
import { RxTriangleDown } from "react-icons/rx";
import { RxTriangleUp } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu";
const Header1 = () => {
  // const [isMobile] = useMobile()
  const navigate = useNavigate();
  // const location = useLocation()
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const user = useSelector((state) => state?.user);

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      <header
        className="h-32 sticky top-0 bg-cover bg-center flex justify-center flex-col shadow-md"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1612197593122-82bc5eacb28d?auto=format&fit=crop&w=1470&q=80')`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="container mx-auto flex items-center px-4 justify-between font-sans">
          {/* Logo */}
          <div className="h-full">
            <Link
              to="/"
              className="text-3xl font-bold text-white flex items-center"
            >
              <p className="hidden lg:block">Elements</p>
              <p className="lg:hidden">E</p>
            </Link>
          </div>

          {/* Login & Bookings */}
          <div>
            {/* Mobile User Icon */}
            <button
              aria-label="User Account"
              className="text-white lg:hidden hover:scale-105 transition-transform duration-300"
            >
              <FaUserCircle size={26} />
            </button>

            {/* Desktop View */}
            <div className="hidden lg:flex items-center gap-6">
              {user?._id ? (
                <div className="relative" >
                  <div className="flex items-center gap-2 px-4 py-2 rounded cursor-pointer bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 border border-[#333] shadow-md shadow-[#0ff]">
                    <p className="text-[#0ff] font-semibold tracking-wide">
                      Account
                    </p>
                    <RxTriangleDown className="text-[#0ff]" />
                  </div>
                  <div className="absolute right-0 top-16 " >
                        <div className="bg-white rounded p-4 min-w-52 " >
                            <UserMenu/>
                        </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={redirectToLoginPage}
                  className="px-4 py-2 text-[#0ff] font-semibold border border-[#0ff] rounded hover:bg-[#0ff] hover:text-[#111] transition-all duration-300 shadow-md shadow-[#0ff]"
                >
                  Login
                </button>
              )}

              <Link
                to="/bookings"
                className="flex items-center bg-red-500 hover:bg-red-600 text-white gap-2 px-5 py-2 rounded-md transition-colors duration-300"
              >
                <TbBrandBooking size={22} />
                <span className="text-base font-normal">My Bookings</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;
