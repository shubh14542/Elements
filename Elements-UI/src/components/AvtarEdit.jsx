import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import SummaryApi from "../common/SummariApi";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToastError";
import { updateAvtar } from "../store/userSlice";

const AvtarEdit = ({ close }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleUploadAvtar = async (e) => {
    const file = e.target.files[0];
    if (!file){
      return
    };

    const formData = new FormData();
    formData.append("avtar", file);

    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.upload_Avtar,
        data: formData,
      });

      const { data: responseData } = response;
      dispatch(updateAvtar(responseData.data.avtar));
      close(); // Close on success
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="bg-gradient-to-br from-[#1f1c2c] to-[#928dab] rounded-2xl p-6 w-full max-w-sm shadow-xl relative border border-white/10 backdrop-blur-md text-white"
        >
          <button
            onClick={close}
            className="absolute top-3 right-3 text-white hover:text-red-400 transition"
          >
            <IoClose size={22} />
          </button>

          {/* Avatar */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full border-4 border-purple-500 overflow-hidden shadow-xl animate-pulse bg-black/40">
              {user.avtar ? (
                <img
              key={user.avtar}
                src={`${user.avtar}?${Date.now()}`}
                alt={user.name}
                className="w-full h-full object-cover"
              />
              ) : (
                <FaUserCircle size={80} className="text-purple-400" />
              )}
            </div>

            {/* Upload Button */}
            <form className="mt-4">
              <label htmlFor="uploadProfile">
                <div className="cursor-pointer px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-700 hover:brightness-110 transition text-sm font-semibold shadow-md tracking-wide">
                  {loading ? "Uploading..." : "Upload New Avatar"}
                </div>
              </label>
              <input
                onChange={handleUploadAvtar}
                type="file"
                id="uploadProfile"
                className="hidden"
                accept="image/*"
              />
            </form>
          </div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default AvtarEdit;
