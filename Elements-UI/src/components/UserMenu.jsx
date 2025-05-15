// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import Divider from "./Divider";
// import Axios from "../utils/Axios";
// import SummaryApi from "../common/SummariApi";
// import { logout } from "../store/userSlice";
// import toast from "react-hot-toast";
// import AxiosToastError from "../utils/AxiosToastError";
// import { FiExternalLink } from "react-icons/fi";

// const UserMenu = ({ close }) => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleLogout = async () => {
//     try {
//       const response = await Axios({
//         ...SummaryApi.logout,
//       });
//       console.log("logout", response);
//       if (response.data.success) {
//         if (close) {
//           close();
//         }

//         dispatch(logout());
//         localStorage.clear();
//         toast.success(response.data.message);
//         navigate("/");
//       }
//     } catch (error) {
//       AxiosToastError(error);
//     }
//   };

//   const handleClose = () => {
//     if (close) {
//       close();
//     }
//   };

//   return (
//     <div className="w-70 p-5 rounded-2xl bg-[#0a0a0a] backdrop-blur-lg border border-[#00ffcc]/20 shadow-[0_0_25px_rgba(0,255,204,0.08)] text-white">
//       <div className="text-xl font-extrabold mb-1 text-[#00ffcc] tracking-wider uppercase">
//         My Account
//       </div>
//       <div className="text-sm text-gray-400 mb-4 tracking-wide flex items-center gap-2">
//         <span className="max-w-52 text-ellipsis line-clamp-1">
//           {" "}
//           {user?.name || user?.mobile}{" "}
//         </span>{" "}
//         <Link
//           to={"/dashboard/profile"}
//           onClick={handleClose}
//           className="hover:text-green-500"
//         >
//           <FiExternalLink size={15} />
//         </Link>
//       </div>

//       <Divider className="my-2 border-[#00ffcc]/20" />

//       <div className="text-sm grid gap-3">
//         <Link
//           to={"/dashboard/device"}
//           onClick={handleClose}
//           className="px-2 py-1 rounded hover:bg-[#00ffcc]/10 hover:text-[#00ffcc] transition-all duration-200"
//         >
//           🎮&nbsp;Devices
//         </Link>

//          <Link
//           to={"/dashboard/slots"}
//           onClick={handleClose}
//           className="px-2 py-1 rounded hover:bg-[#00ffcc]/10 hover:text-[#00ffcc] transition-all duration-200"
//         >
//           🎮&nbsp;Slots
//         </Link>

//         <Link
//           to={"/dashboard/bookings"}
//           onClick={handleClose}
//           className="px-2 py-1 rounded hover:bg-[#00ffcc]/10 hover:text-[#00ffcc] transition-all duration-200"
//         >
//           🎮&nbsp;My Bookings
//         </Link>

//         <Link
//           to={"/dashboard/addresses"}
//           onClick={handleClose}
//           className="px-2 py-1 rounded hover:bg-[#00ffcc]/10 hover:text-[#00ffcc] transition-all duration-200"
//         >
//           📍&nbsp;Saved Addresses
//         </Link>

//         <button
//           onClick={handleLogout}
//           className="text-left text-red-400 hover:text-red-600 px-2 py-1 rounded transition duration-200"
//         >
//           🚪&nbsp;Log Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserMenu;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Divider from "./Divider";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummariApi";
import { logout } from "../store/userSlice";
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToastError";
import { FiExternalLink } from "react-icons/fi";

const UserMenu = ({ close }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await Axios({ ...SummaryApi.logout });
      if (response.data.success) {
        close?.();
        dispatch(logout());
        localStorage.clear();
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  const handleClose = () => {
    close?.();
  };

  return (
    <div className="w-72 p-6 rounded-2xl bg-gradient-to-br from-[#0a0a0a]/80 via-[#0f0f0f]/80 to-[#0a0a0a]/80 border border-[#00ffc3]/20 backdrop-blur-lg shadow-[0_0_20px_#00ffc366] text-white space-y-6 font-sans">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-[#00ffc3] tracking-wide uppercase drop-shadow-[0_0_6px_#00ffc3]">
          Gamer Account
        </h2>
        <div className="text-sm text-gray-400 mt-1 flex items-center gap-2">
          <span className="truncate max-w-[180px]">{user?.name || user?.mobile}</span>
          <Link
            to="/dashboard/profile"
            onClick={handleClose}
            className="hover:text-[#00ffc3] transition"
            title="View Profile"
          >
            <FiExternalLink size={16} />
          </Link>
        </div>
      </div>

      <Divider className="border-[#00ffc3]/20" />

      {/* Menu Items */}
      <div className="grid gap-3 text-sm">
        {[
          { to: "/dashboard/device", label: "🎮 Devices" },
          { to: "/dashboard/slots", label: "🕹️ Slots" },
          { to: "/dashboard/bookings", label: "📅 My Bookings" },
          { to: "/dashboard/addresses", label: "📍 Saved Addresses" },
        ].map(({ to, label }, index) => (
          <Link
            key={index}
            to={to}
            onClick={handleClose}
            className="px-3 py-2 rounded-lg bg-[#00ffc30d] hover:bg-[#00ffc31a] hover:text-[#00ffc3] transition-all duration-200 shadow-inner border border-transparent hover:border-[#00ffc3]/20"
          >
            {label}
          </Link>
        ))}

        <button
          onClick={handleLogout}
          className="px-3 py-2 text-left rounded-lg text-red-400 hover:text-red-500 hover:bg-red-600/10 border border-transparent hover:border-red-500/20 transition-all duration-200"
        >
          🚪 Log Out
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
