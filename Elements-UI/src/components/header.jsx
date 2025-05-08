// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// // import useMobile from '../hooks/useMobile'
// import { RxTriangleDown } from "react-icons/rx";
// import { RxTriangleUp } from "react-icons/rx";
// import { FaUserCircle } from "react-icons/fa";
// import { TbBrandBooking } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import UserMenu from "./UserMenu";
// const Header1 = () => {
//   // const [isMobile] = useMobile()
//   const navigate = useNavigate();
//   // const location = useLocation()
//   const [openUserMenu, setOpenUserMenu] = useState(false);
//   const user = useSelector((state) => state?.user);

//   const redirectToLoginPage = () => {
//     navigate("/login");
//   };

//   return (
//     <>
//       <header
//         className="h-32 sticky top-0 bg-cover bg-center flex justify-center flex-col shadow-md"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1612197593122-82bc5eacb28d?auto=format&fit=crop&w=1470&q=80')`,
//           backgroundBlendMode: "overlay",
//           backgroundColor: "rgba(0,0,0,0.7)",
//         }}
//       >
//         <div className="container mx-auto flex items-center px-4 justify-between font-sans">
//           {/* Logo */}
//           <div className="h-full">
//             <Link
//               to="/"
//               className="text-3xl font-bold text-white flex items-center"
//             >
//               <p className="hidden lg:block">Elements</p>
//               <p className="lg:hidden">E</p>
//             </Link>
//           </div>

//           {/* Login & Bookings */}
//           <div>
//             {/* Mobile User Icon */}
//             <button
//               aria-label="User Account"
//               className="text-white lg:hidden hover:scale-105 transition-transform duration-300"
//             >
//               <FaUserCircle size={26} />
//             </button>

//             {/* Desktop View */}
//             <div className="hidden lg:flex items-center gap-6">
//               {user?._id ? (
//                 <div className="relative" >
//                   <div onClick={()=>setOpenUserMenu(preve => !preve)} className="flex items-center select-none gap-2 px-4 py-2 rounded cursor-pointer bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 border border-[#333] shadow-md shadow-[#0ff]">
//                     <p className="text-[#0ff] font-semibold tracking-wide">
//                       Account
//                     </p>
//                     {
//                       openUserMenu ? (
//                         <RxTriangleUp/>
//                       ) : (
//                         <RxTriangleDown size={22} className="text-[#0ff]" />
//                       )
//                     }
                   
//                   </div>
//                   {
//                     openUserMenu &&  ( 
//                       <div className="absolute right-0 top-12 " >
//                       <div className="bg-yellow-500 rounded p-4 min-w-52 lg:shadow-lg " >
//                           <UserMenu/>
//                       </div>
//                 </div>
//                     )
//                   }
                 
//                 </div>
//               ) : (
//                 <button
//                   onClick={redirectToLoginPage}
//                   className="px-4 py-2 text-[#0ff] font-semibold border border-[#0ff] rounded hover:bg-[#0ff] hover:text-[#111] transition-all duration-300 shadow-md shadow-[#0ff]"
//                 >
//                   Login
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header1;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu";

const Header = () => {
  const navigate = useNavigate();
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const user = useSelector((state) => state?.user);

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  return (
    <header className="h-28 sticky top-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-md pt-7 px-2 border-b border-[#00ffcc33] shadow-md shadow-[#00ffcc22]">
      <div className="container mx-auto px-4 flex items-center justify-between font-sans">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-[#00ffcc] tracking-wider select-none">
          <span className="hidden lg:block">⚡ Elements</span>
          <span className="lg:hidden">⚡E</span>
        </Link>

        {/* Desktop User Panel */}
        <div className="hidden lg:flex items-center gap-6">
          {user?._id ? (
            <div className="relative">
              <div
                onClick={() => setOpenUserMenu(prev => !prev)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111]/80 border border-[#00ffcc33] text-[#00ffcc] font-semibold tracking-wide cursor-pointer hover:bg-[#1a1a1a]/90 transition duration-300 shadow-[0_0_10px_#00ffcc33]"
              >
                Account
                {openUserMenu ? <RxTriangleUp /> : <RxTriangleDown />}
              </div>
              {openUserMenu && (
                <div className="absolute right-0 mt-3">
                  <div className="w-72 rounded-2xl p-3 bg-[#0f0f0f]/95 backdrop-blur-md border border-[#00ffcc20] shadow-[0_0_25px_#00ffcc22]">
                    <UserMenu />
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

        {/* Mobile Icon (Optional) */}
        <div className="lg:hidden text-[#00ffcc]">
          <FaUserCircle size={28} />
        </div>
      </div>
    </header>
  );
};

export default Header;
