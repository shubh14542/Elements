// import React, { useState } from 'react'
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

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validValue = Object.values(data).every((el) => el);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (data.password !== data.confirmPassword) {
//       toast.error("password and confirm password must be same");
//       return;
//     }

//     try {
//       const response = await Axios({
//         ...SummaryApi.register,
//         data: data,
//       });
//       if (response.data.error) toast.error(response.data.message);
//       if (response.data.success) toast.success(response.data.message);
//       console.log("response", response);
//     } catch (error) {
//       AxiosToastError(error);
//     }
//   };

//   return (
//     <>
//       <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden font-sans">
//         {/* PUBG Background Image */}
//         <img
//           src="https://images.alphacoders.com/871/871847.jpg"
//           alt="PUBG Background"
//           className="absolute inset-0 w-full h-full object-cover opacity-70 blur-sm"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60"></div>

//         {/* Form */}
//         <section className="relative z-10 w-full max-w-lg mx-auto px-8">
//           <div className='bg-white/10 backdrop-blur-md border border-green-500 w-full max-w-lg my-4 mx-auto rounded-xl p-7 shadow-lg'>
//             <p className='text-center text-white text-2xl font-semibold mb-6'>Welcome Gamers</p>
//             <form onSubmit={handleSubmit} className='grid gap-4 font-sans text-white'>
//               <div className='grid gap-1'>
//                 <label htmlFor='name'>Name:</label>
//                 <input
//                   type='text'
//                   autoFocus
//                   id='name'
//                   name='name'
//                   className='bg-white/20 p-2 border rounded outline-none focus:border-green-400'
//                   value={data.name}
//                   onChange={handleChange}
//                   placeholder='Enter your name'
//                 />
//               </div>
//               <div className='grid gap-1'>
//                 <label htmlFor='email'>Email:</label>
//                 <input
//                   type='email'
//                   id='email'
//                   name='email'
//                   className='bg-white/20 p-2 border rounded outline-none focus:border-green-400'
//                   value={data.email}
//                   onChange={handleChange}
//                   placeholder='Enter your email'
//                 />
//               </div>
//               <div className='grid gap-1'>
//                 <label htmlFor='password'>Password:</label>
//                 <div className='bg-white/20 p-2 border rounded flex items-center focus-within:border-green-400'>
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     id='password'
//                     name='password'
//                     className='w-full bg-transparent outline-none'
//                     value={data.password}
//                     onChange={handleChange}
//                     placeholder='Enter your password'
//                   />
//                   <div onClick={() => setShowPassword((prev) => !prev)} className='cursor-pointer'>
//                     {showPassword ? <BsEmojiHeartEyes /> : <FaRegFaceRollingEyes />}
//                   </div>
//                 </div>
//               </div>
//               <div className='grid gap-1'>
//                 <label htmlFor='confirmPassword'>Confirm Password:</label>
//                 <div className='bg-white/20 p-2 border rounded flex items-center focus-within:border-green-400'>
//                   <input
//                     type={showConfirmPassword ? 'text' : 'password'}
//                     id='confirmPassword'
//                     name='confirmPassword'
//                     className='w-full bg-transparent outline-none'
//                     value={data.confirmPassword}
//                     onChange={handleChange}
//                     placeholder='Confirm your password'
//                   />
//                   <div onClick={() => setShowConfirmPassword((prev) => !prev)} className='cursor-pointer'>
//                     {showConfirmPassword ? <BsEmojiHeartEyes /> : <FaRegFaceRollingEyes />}
//                   </div>
//                 </div>
//               </div>
//               <button
//                 disabled={!validValue}
//                 className={`${validValue ? "bg-green-500 hover:bg-green-700" : "bg-gray-500"} text-white py-2 rounded font-semibold mt-4`}
//               >
//                 Register
//               </button>
//             </form>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Register;
