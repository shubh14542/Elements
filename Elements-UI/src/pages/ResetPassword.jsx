import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import AxiosToastError from "../utils/AxiosToastError";
import toast from 'react-hot-toast';
import SummaryApi from "../common/SummaryApi";
import { MdPassword } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const ResetPassword = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [data,setData] = useState({
      email : "",
      newPassword : "",
      confirmPassword : ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)

    const validValue = Object.values(data).every((el) => el);

    useEffect(()=>{
      if(!(location?.state?.data?.success)){
        navigate("/")
      }

      if(location?.state?.email){
        setData((preve)=>{
            return{
                ...preve,
                email : location?.state?.email
            }
        })
      }
    },[])

    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setData((preve) => {
        return {
          ...preve,
          [name]: value,
        };
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if(data.newPassword !== data.confirmPassword){
        toast.error("New password and confirm password must be same")
        return
      }
      try {
        const response = await Axios({
          ...SummaryApi.reset_password,
          data: data,
        });
        if (response.data.error) {
          toast.error(response.data.message);
        }
        
        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/login");
          setData({
            email : "",
            newPassword : "",
            confirmPassword : ""
          })
        }
      } catch (error) {
        AxiosToastError(error);
      }
    };
  return (
<div className="relative min-h-screen flex items-center justify-center bg-black font-sans overflow-hidden">
      {/* Glowing Background Image */}
      <img
        src="https://images7.alphacoders.com/112/1129844.jpg"
        alt="Gaming Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 z-0"></div>

      {/* Login Container */}
      <section className="relative z-10 w-full max-w-md px-6">
        <div className="bg-black/60 border border-green-400 backdrop-blur-md shadow-lg rounded-2xl p-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-8 tracking-wider neon-glow">
            Enter Your Password
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 text-white">
            {/* Email */}
            <div className="flex items-center bg-gray-800/70 rounded-md border border-green-500 px-4 py-2 hover:border-green-400 transition">
              <label htmlFor='newPassword' >New Password</label>
              <MdPassword className="text-green-400 text-xl mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="newPassword"
                className="w-full outline-none"
                value={data.newPassword}
                onChange={handleChange}
                placeholder="Enter your new password"
              />
              <div
                className="ml-3 text-lg text-green-300 cursor-pointer"
                onClick={() => setShowPassword((preve)=>(!preve))}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye/>}
              </div>
            </div>

            {/* Password */}
            <div className="flex items-center bg-gray-800/70 rounded-md border border-green-500 px-4 py-2 hover:border-green-400 transition">
              <label htmlFor='confirmPaassword'>Confirm Password</label>
              <MdPassword className="text-green-400 text-xl mr-3" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id='password'
                name="confirmPassword"
                value={data.confrimPassword}
                onChange={handleChange}
                placeholder="Enter your confirm password"
                className="bg-transparent w-full outline-none text-white placeholder-gray-400"
              />
              <div
                className="ml-3 text-lg text-green-300 cursor-pointer"
                onClick={() => setShowConfirmPassword((preve)=>(!preve))}
              >
                {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
            <Link to={"/forgot-password"} className='inline-block text-right  hover:text-green-500' >Forgot Password ? </Link>
            {/* Submit Button */}
            <button
              disabled={!validValue}
              className={`w-full py-3 rounded-md font-semibold text-lg tracking-wide transition 
                ${validValue ? "bg-green-500 hover:bg-green-600" : "bg-gray-600 cursor-not-allowed"}
              `}
            >
              Change Password
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-400 mt-6">
            No account yet?
            <Link
              to="/register"
              className="ml-1 text-green-400 hover:underline font-semibold"
            >
              Register Here
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default ResetPassword