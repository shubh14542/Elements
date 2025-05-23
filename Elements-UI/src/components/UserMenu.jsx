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
import {
  FaGamepad,
  FaSignOutAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

const UserMenu = ({ close }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await Axios({ ...SummaryApi.logout });
      if (response.data.success) {
        close();
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

  const menuLinks = [
    { path: "/dashboard/profile", label: "Profile", icon: <FaUserAlt /> },
    { path: "/dashboard/bookings", label: "Bookings", icon: <FaCalendarAlt /> },
    { path: "/dashboard/category", label: "Category", icon: <FaGamepad /> },
    { path: "/dashboard/subcategory", label: "Sub-Category", icon: <FaGamepad /> },
    { path: "/dashboard/upload-device", label: "Upload Device", icon: <FaGamepad /> },
    { path: "/dashboard/device", label: "Devices", icon: <FaGamepad /> },
    { path: "/dashboard/slots", label: "Slots", icon: <FaServer /> },
    { path: "/dashboard/admin-panel", label: "Admin Panel", icon: <FaShieldAlt /> },
  ];

  return (
    <div className="w-78 p-6 rounded-2xl bg-gradient-to-br from-[#050505]/90 via-[#0a0a0a]/80 to-[#0f0f0f]/90 border border-[#00ffc3]/30 backdrop-blur-md shadow-[0_0_40px_#00ffc377] text-white space-y-6 font-sans transition-all duration-300">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-[#00ffc3] uppercase tracking-widest font-mono drop-shadow-[0_0_8px_#00ffc3]">
          Gamer Hub
        </h2>
        <div className="text-sm text-gray-400 mt-2 flex items-center gap-2">
          <span className="flex items-center gap-2 max-w-[200px] truncate text-green-400 font-bold tracking-wide text-shadow-glow">
            🎮 {user?.name || user?.mobile}
          </span>
          <Link
            to="/dashboard/profile"
            onClick={handleClose}
            className="hover:text-[#00ffc3] transition-transform hover:scale-110"
            title="View Profile"
          >
            <FiExternalLink size={16} />
          </Link>
        </div>
      </div>

      <Divider className="border-[#00ffc3]/30 animate-pulse" />

      {/* Common Menu Links */}
      <div className="grid gap-3 text-sm">
        <p className="text-xs uppercase tracking-wider text-[#00ffc3]/80 font-semibold mb-1">
          Dashboard
        </p>
        {menuLinks.map(({ path, label, icon }) => (
          <Link
            key={path}
            to={path}
            onClick={handleClose}
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#1a1a1a]/60 hover:bg-[#00ffc3]/10 hover:text-[#00ffc3] transition-all border border-transparent hover:border-[#00ffc3]/30 group"
          >
            <span className="group-hover:rotate-6 transition-transform duration-200">
              {icon}
            </span>
            <span>{label}</span>
          </Link>
        ))}
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-2 text-left rounded-lg text-red-400 hover:text-red-500 hover:bg-red-600/10 border border-transparent hover:border-red-500/30 transition-all duration-200 group"
      >
        <span className="group-hover:rotate-[-6deg] transition-transform duration-200">
          <FaSignOutAlt />
        </span>
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default UserMenu;

