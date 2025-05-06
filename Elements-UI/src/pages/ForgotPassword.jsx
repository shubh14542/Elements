import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummariApi';
import AxiosToastError from '../utils/AxiosToastError';
import { useNavigate, Link } from 'react-router-dom';
const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const validValue = Object.values(data).every((el) => el.trim() !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({
        ...SummaryApi.forgot_password,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        setData({ email: ""});
        navigate("/otp-verification");
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
            Welcome Gamer
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 text-white">
            {/* Email */}
            <div className="flex items-center bg-gray-800/70 rounded-md border border-green-500 px-4 py-2 hover:border-green-400 transition">
              <MdEmail className="text-green-400 text-xl mr-3" />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-transparent w-full outline-none text-white placeholder-gray-400"
              />
            </div>

            <Link to={"/otp-verification"} className='inline-block text-right  hover:text-green-500' >Forgot Password ? </Link>
            {/* Submit Button */}
            <button
              disabled={!validValue}
              className={`w-full py-3 rounded-md font-semibold text-lg tracking-wide transition 
                ${validValue ? "bg-green-500 hover:bg-green-600" : "bg-gray-600 cursor-not-allowed"}
              `}
            >
              Send OTP
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Already have account?
            <Link
              to="/login"
              className="ml-1 text-green-400 hover:underline font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
