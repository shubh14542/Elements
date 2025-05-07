import React, { useState, useRef, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummariApi";
import AxiosToastError from "../utils/AxiosToastError";
import { useNavigate, Link, useLocation } from "react-router-dom";

const OtpVerification = () => {
  const [data, setData] = useState(["", "", "", "", "", ""]);
  const [shake, setShake] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/forgot-password");
    }
  }, [location, navigate]);

  const inputRef = useRef([]);

  const validValue = data.every((el) => el.trim() !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({
        ...SummaryApi.forgot_password,
        data: {
          otp: data.join(""),
          email: location?.state?.email,
        },
      });

      if (response.data.error) {
        toast.error(response.data.message);
        setShake(true);
        setTimeout(() => setShake(false), 500); // reset shake animation
      }

      if (response.data.success) {
        toast.success(response.data.message);
        setData(["", "", "", "", "", ""]);
        inputRef.current[0]?.focus();
        navigate("/reset-password", {
          state: { email: location?.state?.email },
        });
      }
    } catch (error) {
      AxiosToastError(error);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black font-sans overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images7.alphacoders.com/112/1129844.jpg"
        alt="Gaming Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 z-0"></div>

      {/* Container */}
      <section className="relative z-10 w-full max-w-md px-1">
        <div className="bg-black/60 border border-green-400 backdrop-blur-md shadow-lg rounded-2xl p-8 animate-fade-in">
          <h2 className="text-xl font-bold text-green-400 mb-8 tracking-wider neon-glow">
            Enter OTP
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 text-white">
            <label htmlFor="otp">Enter your OTP:</label>
            <div className="flex justify-center items-center w-full">
            <MdEmail className="text-green-400 text-xl mr-3" />

              <div
                className={`flex justify-between gap-2  ${
                  shake ? "animate-shake" : ""
                }`}
              >
                {data.map((element, index) => (
                  <input
                    key={"otp" + index}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={data[index]}
                    ref={(ref) => (inputRef.current[index] = ref)}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      const newData = [...data];
                      newData[index] = value;
                      setData(newData);
                      if (value && index < 5) {
                        inputRef.current[index + 1].focus();
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace" && !data[index] && index > 0) {
                        inputRef.current[index - 1].focus();
                      }
                    }}
                    className={`
          w-12 h-12 md:w-14 md:h-14 
          text-center text-2xl font-extrabold tracking-widest 
          bg-black text-green-400 
          border-2 border-green-500 rounded-xl 
          shadow-md shadow-green-500/30
          focus:outline-none focus:border-green-300
          focus:shadow-lg focus:shadow-green-400/50 
          transition-all duration-300 ease-in-out 
          hover:scale-105 hover:shadow-green-400/40
          ${shake ? "animate-shake" : ""}
        `}
                  />
                ))}
              </div>
            </div>

            <Link
              to="/forgot-password"
              className="inline-block text-right hover:text-green-500"
            >
              Forgot Password?
            </Link>

            <button
              disabled={!validValue}
              className={`w-full py-3 rounded-md font-semibold text-lg tracking-wide transition 
                ${
                  validValue
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-600 cursor-not-allowed"
                }
              `}
            >
              Verify OTP
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?
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

export default OtpVerification;
