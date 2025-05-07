// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import Axios from 'axios'
// import AxiosToastError from "../utils/AxiosToastError";
// import toast from 'react-hot-toast';
// import SummaryApi from "../common/SummariApi";
// import { MdPassword } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

// const ResetPassword = () => {
//     const location = useLocation()
//     const navigate = useNavigate()
//     const [data,setData] = useState({
//       email : "",
//       newPassword : "",
//       confirmPassword : ""
//     })

//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword,setShowConfirmPassword] = useState(false)

//     const validValue = Object.values(data).every((el) => el);

//     useEffect(()=>{
//       if(!(location?.state?.data?.success)){
//         navigate("/")
//       }

//       if(location?.state?.email){
//         setData((preve)=>{
//             return{
//                 ...preve,
//                 email : location?.state?.email
//             }
//         })
//       }
//     },[])

//     const handleChange = (e) => {
//       const { name, value } = e.target;
  
//       setData((preve) => {
//         return {
//           ...preve,
//           [name]: value,
//         };
//       });
//     };

//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       if(data.newPassword !== data.confirmPassword){
//         toast.error("New password and confirm password must be same")
//         return
//       }
//       try {
//         const response = await Axios({
//           ...SummaryApi.reset_password,
//           data: data,
//         });
//         if (response.data.error) {
//           toast.error(response.data.message);
//         }
        
//         if (response.data.success) {
//           toast.success(response.data.message);
//           navigate("/login");
//           setData({
//             email : "",
//             newPassword : "",
//             confirmPassword : ""
//           })
//         }
//       } catch (error) {
//         AxiosToastError(error);
//       }
//     };
//   return (
// <div className="relative min-h-screen flex items-center justify-center bg-black font-sans overflow-hidden">
//       {/* Glowing Background Image */}
//       <img
//         src="https://images7.alphacoders.com/112/1129844.jpg"
//         alt="Gaming Background"
//         className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 z-0"></div>

//       {/* Login Container */}
//       <section className="relative z-10 w-full max-w-md px-6">
//         <div className="bg-black/60 border border-green-400 backdrop-blur-md shadow-lg rounded-2xl p-8 animate-fade-in">
//           <h2 className="text-3xl font-bold text-center text-green-400 mb-8 tracking-wider neon-glow">
//             Enter Your Password
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-6 text-white">
//             {/* Email */}
//             <label htmlFor='newPassword' >New Password</label>
//             <div className="flex items-center bg-gray-800/70 rounded-md border border-green-500 p-4   hover:border-green-400 transition">
//               <MdPassword className="text-green-400 text-xl mr-3" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 name="newPassword"
//                 className="w-full bg-transparent outline-none placeholder-gray-400 "
//                 value={data.newPassword}
//                 onChange={handleChange}
//                 placeholder="Enter your new password"
//               />
//               <div
//                 className="ml-3 text-lg text-green-300 cursor-pointer"
//                 onClick={() => setShowPassword((preve)=>(!preve))}
//               >
//                 {showPassword ? <FaRegEyeSlash /> : <FaRegEye/>}
//               </div>
//             </div>
//               <br/>
//             {/* Password */}
//             <label htmlFor='confirmPaassword'  >Confirm Password</label>
//             <div className="flex items-center bg-gray-800/70 rounded-md border border-green-500 p-4  hover:border-green-400 transition">
//               <MdPassword className="text-green-400 text-xl mr-3" />
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 id='password'
//                 name="confirmPassword"
//                 value={data.confirmPassword}
//                 onChange={handleChange}
//                 placeholder="Enter your confirm password"
//                 className="bg-transparent w-full outline-none text-white placeholder-gray-400"
//               />
//               <div
//                 className="ml-3 text-lg text-green-300 cursor-pointer"
//                 onClick={() => setShowConfirmPassword((preve)=>(!preve))}
//               >
//                 {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
//               </div>
//             </div>
//             <Link to={"/forgot-password"} className='inline-block text-right  hover:text-green-500' >Forgot Password ? </Link>
//             {/* Submit Button */}
//             <button
//               disabled={!validValue}
//               className={`w-full py-3 rounded-md font-semibold text-lg tracking-wide transition 
//                 ${validValue ? "bg-green-500 hover:bg-green-600" : "bg-gray-600 cursor-not-allowed"}
//               `}
//             >
//               Change Password
//             </button>
//           </form>

//           {/* Register Link */}
//           <p className="text-center text-sm text-gray-400 mt-6">
//             No account yet?
//             <Link
//               to="/register"
//               className="ml-1 text-green-400 hover:underline font-semibold"
//             >
//               Register Here
//             </Link>
//           </p>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default ResetPassword

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SummaryApi from '../common/SummariApi';
import toast from 'react-hot-toast';
import AxiosToastError from '../utils/AxiosToastError';
import Axios from '../utils/Axios';
import { useState, useEffect } from 'react';

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validValue = Object.values(data).every(el => el);

  useEffect(() => {
    if (!(location?.state?.data?.success)) {
      navigate("/");
    }

    if (location?.state?.email) {
      setData((prev) => ({
        ...prev,
        email: location.state.email
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.newPassword !== data.confirmPassword) {
      toast.error("New password and confirm password must be same.");
      return;
    }

    try {
      const response = await Axios({
        ...SummaryApi.reset_password,
        data: data
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
        setData({
          email: "",
          newPassword: "",
          confirmPassword: ""
        });
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <div className="w-full max-w-md p-8 backdrop-blur-md bg-white/5 border border-gray-700 rounded-xl shadow-2xl text-white">
        <h2 className="text-2xl font-bold text-center text-green-400 mb-6 tracking-wide">
          Reset Your Password
        </h2>
        <form className="grid gap-5" onSubmit={handleSubmit}>
          {/* New Password */}
          <div className="grid gap-1">
            <label htmlFor="newPassword" className="text-sm text-gray-300">
              New Password
            </label>
            <div className="flex items-center bg-white/10 border border-gray-600 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                placeholder="Enter your new password"
                value={data.newPassword}
                onChange={handleChange}
              />
              <div onClick={() => setShowPassword((prev) => !prev)} className="cursor-pointer ml-2">
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="grid gap-1">
            <label htmlFor="confirmPassword" className="text-sm text-gray-300">
              Confirm Password
            </label>
            <div className="flex items-center bg-white/10 border border-gray-600 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                placeholder="Confirm your password"
                value={data.confirmPassword}
                onChange={handleChange}
              />
              <div onClick={() => setShowConfirmPassword((prev) => !prev)} className="cursor-pointer ml-2">
                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!validValue}
            className={`w-full py-2 rounded text-white font-semibold transition-all duration-300 tracking-wider ${
              validValue
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Change Password
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-400 hover:underline hover:text-green-300"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ResetPassword;
