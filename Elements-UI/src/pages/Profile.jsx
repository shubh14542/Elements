// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FaUserCircle } from "react-icons/fa";
// import AvtarEdit from "../components/AvtarEdit";
// import Axios from "../utils/Axios";
// import SummaryApi from "../common/SummariApi";
// import AxiosToastError from "../utils/AxiosToastError";
// import toast from "react-hot-toast";
// import { setUserDetails } from "../store/userSlice";
// import fetchUserDetails from "../utils/fetchUserDetails";
// const Profile = () => {
//   const user = useSelector((state) => state.user);
//   const [userData, setUserData] = useState({
//     name: user.name,
//     email: user.email,
//     mobile: user.mobile,
//   });

//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch()
//   useEffect(() => {
//     setUserData({
//       name: user.name,
//       email: user.email,
//       mobile: user.mobile,
//     });
//   }, [user]);

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((preve) => {
//       return {
//         ...preve,
//         [name]: value,
//       };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const response = await Axios({
//         ...SummaryApi.update_user,
//         data: userData,
//       });

//       const { data: responseData } = response;

//       if (responseData.success) {
//         toast.success(responseData.message);
//         const userData = await fetchUserDetails();

//         dispatch(setUserDetails(userData.data));
//       }
//     } catch (error) {
//       AxiosToastError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const [openAvtarEdit, setOpenAvtarEdit] = useState(false);
//   return (
//     <div>
//       {/* Avtar Section */}
//       <div className="w-20 h-20 bg-green-600 flex items-center justify-center rounded-full overflow-hidden drop-shadow-lg">
//         {user.avtar ? (
//           <img alt={user.name} src={user.avtar} className="w-full h-full" />
//         ) : (
//           <FaUserCircle size={50} />
//         )}
//       </div>
//       <button
//         onClick={() => setOpenAvtarEdit(true)}
//         className="text-sm min-w-20 border border-orange-500 hover:bg-green-700 px-3 py-1 rounded-full mt-5"
//       >
//         Change Profile
//       </button>
//       {openAvtarEdit && <AvtarEdit close={() => setOpenAvtarEdit(false)} />}

//       {/* name , mobile , email , password */}
//       <form className="my-4 grid gap-4" onSubmit={handleSubmit}>
//         <div className="grid">
//           <label> Name </label>
//           <input
//             type="text"
//             required
//             placeholder="Enter your name "
//             className="p-2 bg-blue-50  outline-none border focus-within: border-violet-500"
//             value={userData.name}
//             name="name"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="grid">
//           <label htmlFor="email"> Email </label>
//           <input
//             type="email"
//             id="email"
//             required
//             placeholder="Enter your email "
//             className="p-2 bg-blue-50  outline-none border focus-within: border-violet-500"
//             value={userData.email}
//             name="email"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="grid">
//           <label htmlFor="mobile"> Mobile </label>
//           <input
//             type="text"
//             id="mobile"
//             required
//             placeholder="Enter your mobile "
//             className="p-2 bg-blue-50  outline-none border focus-within: border-violet-500"
//             value={userData.mobile}
//             name="mobile"
//             onChange={handleOnChange}
//           />
//         </div>
//         {/* <div className='grid' >
//                 <label> Name </label>
//                 <input
//                 type='text'
//                 placeholder='Enter your name '
//                 className='p-2 bg-blue-50  outline-none border focus-within: border-violet-500'
//                 value={userData.name}
//                 name='name'
//                 onChange={handleOnChange}
//                 />
//             </div> */}
//         <button className="border rounded-full py-1 px-4 bg-yellow-400 hover:bg-yellow-600">
//           {loading ? "Loading..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import AvtarEdit from "../components/AvtarEdit";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummariApi";
import AxiosToastError from "../utils/AxiosToastError";
import toast from "react-hot-toast";
import { setUserDetails } from "../store/userSlice";
import fetchUserDetails from "../utils/fetchUserDetails";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    mobile: user?.mobile || "",
  });

  const [loading, setLoading] = useState(false);
  const [openAvtarEdit, setOpenAvtarEdit] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserData({
      name: user?.name || "",
      email: user?.email || "",
      mobile: user?.mobile || "",
    });
  }, [user]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Axios({ ...SummaryApi.update_user, data: userData });
      const { data: responseData } = response;

      if (responseData.success) {
        toast.success(responseData.message);
        const userData = await fetchUserDetails();
        dispatch(setUserDetails(userData.data));
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Background FX */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 animate-pulse bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_40px_#9333ea55]"
      >
        {/* Avatar + Level */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative w-28 h-28 rounded-full border-4 border-purple-500 shadow-lg overflow-hidden bg-black/50 animate-glow"
          >
            {user.avtar ? (
              <img
                src={user.avtar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUserCircle size={100} className="text-purple-400" />
            )}
          </motion.div>
          {/* <p className="text-sm text-purple-300 font-semibold tracking-wide uppercase">
            Level 12 - Shadow Coder
          </p> */}
        
        </div>

        <button
          onClick={() => setOpenAvtarEdit(true)}
          className="text-xs mb-6 px-4 py-1 border border-purple-400 hover:bg-purple-700 transition rounded-full"
        >
          Change Avatar
        </button>
        {openAvtarEdit && <AvtarEdit close={() => setOpenAvtarEdit(false)} />}

        {/* Profile Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {["name", "email", "mobile"].map((field) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (field === "name" ? 1 : field === "email" ? 2 : 3) }}
              className="space-y-1"
            >
              <label className="block text-sm text-gray-300 capitalize">
                {field}
              </label>
              <input
                type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
                name={field}
                required
                value={userData[field]}
                onChange={handleOnChange}
                className="w-full px-3 py-2 bg-black/30 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder={`Enter your ${field}`}
              />
            </motion.div>
          ))}

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
            type="submit"
            disabled={loading}
            className={`w-full mt-4 py-2 rounded-full text-white font-semibold transition duration-300 shadow-md ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 to-purple-600 hover:brightness-110"
            }`}
          >
            {loading ? "Saving..." : "Update Profile"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Profile;
