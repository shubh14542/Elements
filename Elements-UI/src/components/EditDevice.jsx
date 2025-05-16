import React from "react";
import SummaryApi from "../common/SummariApi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import uploadImage from '../utils/uploadImage';
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToastError";
import Axios from "../utils/Axios";
const EditDevice = ({close, fetchData, data : deviceData}) => {
  const [data, setData] = useState(
    { 
    _id : deviceData._id ,
      name: deviceData.name,
      image: deviceData.image
     });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Axios({ ...SummaryApi.update_device, data });
      const { data: responseData } = response;
      setLoading(false);
      if (responseData.success) {
        toast.success(responseData.message);
        close();
        fetchData();
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };
   const handleUploadDeviceImages = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      setLoading(true)
      const response = await uploadImage(file);
      const { data: imageResponse } = response;
      setLoading(false)
      setData((prev) => ({ ...prev, image: imageResponse.data.url }));
    };
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl bg-[#0d0d0d] border border-[#00ffc3]/20 rounded-2xl shadow-[0_0_40px_#00ffc3]/20 p-6 text-white relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#00ffc3]/10 pb-3 mb-4">
          <h2 className="text-2xl font-bold text-[#00ffc3] tracking-widest uppercase">
            Device
          </h2>
          <button
            onClick={close}
            className="text-gray-300 hover:text-red-500 transition"
          >
            <IoClose size={28} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Device Name */}
          <div>
            <label
              htmlFor="deviceName"
              className="text-sm text-[#aaa] mb-1 block"
            >
              Device Name
            </label>
            <input
              type="text"
              id="deviceName"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="e.g. PS5 Controller"
              className="w-full bg-[#1a1a1a] border border-[#00ffc3]/20 rounded-lg px-4 py-2 outline-none focus:border-[#00ffc3] transition"
            />
          </div>

          {/* Device Image */}
          <div>
            <p className="text-sm text-[#aaa] mb-1">Device Image</p>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Preview */}
              <div className="w-full lg:w-36 h-36 flex items-center justify-center bg-[#111] border border-[#00ffc3]/10 rounded-lg">
                {data.image ? (
                  <img
                    src={data.image}
                    alt="device"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <p className="text-sm text-gray-500">No Image</p>
                )}
              </div>

              {/* Upload */}
              <label htmlFor="uploadDeviceImage" className="cursor-pointer">
                <div
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition
                          ${
                            !data.name
                              ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                              : "bg-[#ff4b9b] hover:bg-[#ff358f] text-white"
                          }
                        `}
                >
                  {
                    loading ? "Uploading..." : "Upload Image"
                  }
                  
                </div>
                <input
                  disabled={!data.name}
                  onChange={handleUploadDeviceImages}
                  type="file"
                  id="uploadDeviceImage"
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !(data.name && data.image)}
            className={`w-full py-3 rounded-xl font-bold tracking-wide transition
                      ${
                        data.name && data.image
                          ? "bg-[#00ffc3] text-black hover:bg-[#00e6b6]"
                          : "bg-gray-600 text-gray-300 cursor-not-allowed"
                      }
                    `}
          >
            {loading ? "Updating Device..." : "Update Device"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditDevice;
