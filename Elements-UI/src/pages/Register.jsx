import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";
import { Axios } from "axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
const Register = () => {

    const [data,setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : ""
    })

    const handleChange = (e) =>{
        const {name,value} = e.target

        setData((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
        console.log("Data",data)
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(data.password !== data.confirmPassword){
            toast.error("password and confirm password must be same ")
            return
        }

        try {
             const response = await Axios({
            ...SummaryApi.register,
            data : data
        })
            if(response.data.error){
                toast.error(response.data.message)
            }
            if(response.data.success){
                toast.success(response.data.message)
            }

        } catch (error) {
            AxiosToastError(error)
        }
       

    }

    // const validValue = Object.values(data).every(el=>el)
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-4 pt-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-[#111111] bg-opacity-80 backdrop-blur-lg border border-cyan-500/30 rounded-2xl shadow-2xl p-8"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6 text-lime-400 text-3xl font-gamer">
          <Gamepad2 className="animate-pulse" />
          Elements
        </div>

        <h2 className="text-center text-2xl font-bold text-white mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="text-cyan-400 text-sm block mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="enter your name "
              value={data.name}
              id="name"
              name="name"
              onChange = {handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-cyan-400 text-sm block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="you@example.com"
              value={data.email}
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-cyan-400 text-sm block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="••••••••"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
         <div>
            <label htmlFor="confirmPassword" className="text-cyan-400 text-sm block mb-1">Confirm Password</label>
            <input
              id="confirmPassword"
              type="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="••••••••"
               value={data.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-xl transition-all shadow-[0_0_12px_#00ffff80]"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
