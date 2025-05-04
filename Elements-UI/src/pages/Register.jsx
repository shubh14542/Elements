// import React, { useState } from 'react';
// import { FaRegFaceRollingEyes } from "react-icons/fa6";
// import { BsEmojiHeartEyes } from "react-icons/bs";
// import toast from 'react-hot-toast';
// import Axios from '../utils/Axios';
// import SummaryApi from '../common/SummariApi';
// import AxiosToastError from '../utils/AxiosToastError';

// const Register = () => {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData(prev => ({ ...prev, [name]: value }));
//   };

//   const validValue = Object.values(data).every(el => el);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (data.password !== data.confirmPassword) {
//       toast.error("Passwords must match!");
//       return;
//     }
//     try {
//       const response = await Axios({
//         ...SummaryApi.register,
//         data: data
//       });
//       if (response.data.error) toast.error(response.data.message);
//       if (response.data.success) toast.success(response.data.message);
//     } catch (error) {
//       AxiosToastError(error);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden font-sans">

//       {/* Moving Gaming Background */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient"></div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Form Container */}
//       <div className="relative z-10 max-w-lg w-full p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-pink-500 shadow-xl">
//         <h1 className="text-center text-4xl mb-8 font-bold text-pink-400">Welcome, Gamer</h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name Field */}
//           <div className="space-y-1">
//             <label htmlFor="name" className="text-pink-300">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               autoFocus
//               value={data.name}
//               onChange={handleChange}
//               className="w-full p-3 rounded-xl bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none"
//               placeholder="Enter your name"
//             />
//           </div>

//           {/* Email Field */}
//           <div className="space-y-1">
//             <label htmlFor="email" className="text-pink-300">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={data.email}
//               onChange={handleChange}
//               className="w-full p-3 rounded-xl bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Password Field */}
//           <div className="space-y-1">
//             <label htmlFor="password" className="text-pink-300">Password</label>
//             <div className="flex items-center bg-gray-900 p-3 rounded-xl focus-within:ring-2 focus-within:ring-pink-500">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 id="password"
//                 name="password"
//                 value={data.password}
//                 onChange={handleChange}
//                 className="w-full bg-transparent outline-none text-white"
//                 placeholder="Enter your password"
//               />
//               <div
//                 onClick={() => setShowPassword(prev => !prev)}
//                 className="text-pink-400 cursor-pointer"
//               >
//                 {showPassword ? <BsEmojiHeartEyes size={24} /> : <FaRegFaceRollingEyes size={24} />}
//               </div>
//             </div>
//           </div>

//           {/* Confirm Password Field */}
//           <div className="space-y-1">
//             <label htmlFor="confirmPassword" className="text-pink-300">Confirm Password</label>
//             <div className="flex items-center bg-gray-900 p-3 rounded-xl focus-within:ring-2 focus-within:ring-pink-500">
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={data.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full bg-transparent outline-none text-white"
//                 placeholder="Confirm your password"
//               />
//               <div
//                 onClick={() => setShowConfirmPassword(prev => !prev)}
//                 className="text-pink-400 cursor-pointer"
//               >
//                 {showConfirmPassword ? <BsEmojiHeartEyes size={24} /> : <FaRegFaceRollingEyes size={24} />}
//               </div>
//             </div>
//           </div>

//           {/* Register Button */}
//           <button
//             disabled={!validValue}
//             className={`w-full py-3 rounded-xl font-bold tracking-wider transition ${
//               validValue
//                 ? "bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 hover:opacity-90"
//                 : "bg-gray-700 cursor-not-allowed"
//             } text-white`}
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

// ------------------------------------------------------------------------------------------------------------

import React, { useState } from "react";
import { FaRegFaceRollingEyes } from "react-icons/fa6";
import { BsEmojiHeartEyes } from "react-icons/bs";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummariApi";
import AxiosToastError from "../utils/AxiosToastError";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => ({ ...preve, [name]: value }));
  };
  console.log("data",data)

  const validValue = Object.values(data).every((el) => el);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      toast.error("password and confirm password must be same");
      return;
    }

    try {
      const response = await Axios({
        ...SummaryApi.register,
        data: data,
      });
      if (response.data.error) {
        toast.error(response.data.message);
      }
      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          name: " ",
          email: " ",
          password: " ",
          confirmPassword: " ",
        });
        navigate("/login");
      }
      console.log("response", response);
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden font-sans">
        {/* PUBG Background Image */}
        <img
          src="https://images.alphacoders.com/871/871847.jpg"
          alt="PUBG Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70 blur-sm"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Form */}
        <section className="relative z-10 w-full max-w-lg mx-auto px-8">
          <div className="bg-white/10 backdrop-blur-md border border-green-500 w-full max-w-lg my-4 mx-auto rounded-xl p-7 shadow-lg">
            <p className="text-center text-white text-2xl font-semibold mb-6">
              Welcome Gamers
            </p>
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 font-sans text-white"
            >
              <div className="grid gap-1">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  autoFocus
                  id="name"
                  name="name"
                  className="bg-white/20 p-2 border rounded outline-none focus:border-green-400"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-white/20 p-2 border rounded outline-none focus:border-green-400"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="password">Password:</label>
                <div className="bg-white/20 p-2 border rounded flex items-center focus-within:border-green-400">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="w-full bg-transparent outline-none"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  <div
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="cursor-pointer"
                  >
                    {showPassword ? (
                      <BsEmojiHeartEyes />
                    ) : (
                      <FaRegFaceRollingEyes />
                    )}
                  </div>
                </div>
              </div>
              <div className="grid gap-1">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <div className="bg-white/20 p-2 border rounded flex items-center focus-within:border-green-400">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full bg-transparent outline-none"
                    value={data.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                  />
                  <div
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <BsEmojiHeartEyes />
                    ) : (
                      <FaRegFaceRollingEyes />
                    )}
                  </div>
                </div>
              </div>
              <button
                disabled={!validValue}
                className={`${
                  validValue ? "bg-green-500 hover:bg-green-700" : "bg-gray-500"
                } text-white py-2 rounded font-semibold mt-4`}
              >
                Register
              </button>
            </form>

            {/* <p  >
                 Already have account ? <Link to={"/login"} className='font-semibold text-green-700 hover:text-green-800' > Login </Link>
            </p> */}
            <p className="text-center text-white text-lg mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-green-400 hover:text-green-500 underline"
              >
                Login
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
