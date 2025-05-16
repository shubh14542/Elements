import React, { useEffect, useState } from "react";
import UploadDevice from "../components/UploadDevice";
import Loading from "../components/Loading";
import NoData from "../components/NoData";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummariApi";
import EditDevice from "../components/EditDevice";

const Device = () => {
  const [openUploadDevice, setOpenUploadDevice] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deviceData, setDeviceData] = useState([]);
  const [openEdit,setOpenEdit] = useState(false)
  const fetchDevice = async () => {
    try {
      setLoading(true);
      const response = await Axios({ ...SummaryApi.get_device });
      const { data: responseData } = response;
      if (responseData.success) {
        setDeviceData(responseData.data);
      }
    } catch (error) {
      console.error("Fetch failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevice();
  }, []);

  return (
    <section className="text-white min-h-screen font-sans">
      {/* Header */}
      <div className="flex items-center justify-between p-4 mb-6 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 shadow-lg">
        <h1 className="text-2xl font-bold text-[#00ffc3] tracking-wider">
          🎮 Device Manager
        </h1>
        <button
          onClick={() => setOpenUploadDevice(true)}
          className="text-sm px-5 py-2 rounded-md bg-[#00ffc3]/10 hover:bg-[#00ffc3]/20 text-[#00ffc3] border border-[#00ffc3]/30 transition duration-200"
        >
          ➕ Add Device
        </button>
      </div>

      {/* No Devices */}
      {!deviceData.length && !loading && <NoData />}

      {/* Device Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-2 py-1">
        {deviceData.map((device, index) => (
          <div
            key={index}
            className="bg-[#111]/60 backdrop-blur-md w-36 border border-white/10 rounded-xl shadow-[0_0_25px_rgba(0,255,204,0.08)] p-1 flex flex-col items-center hover:scale-105 transition-transform duration-200"
          >
            <img
              src={device.image}
              alt={device.name}
              className="w-36 h-36 object-contain rounded"
            />
            <p className="text-center text-sm font-semibold text-[#00ffc3]">
              {device.name}
            </p>
            <div className="items-center gap-6 h-12 flex gap-3" >
              <button onClick={()=>{
                setOpenEdit(true)
              }} className="flex-1 bg-green-100 hover:bg-green-200 text-green-600 p-1 px-2 rounded " >Edit</button>
              <button className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 p-1 px-2 rounded" >Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Loader */}
      {loading && <Loading />}

      {/* Modal Upload */}
      {openUploadDevice && (
        <UploadDevice
          fetchData={fetchDevice}
          close={() => setOpenUploadDevice(false)}
        />
      )}

      {
        openEdit && (
          <EditDevice close={()=>setOpenEdit(false)} />
        )
      }
    </section>
  );
};

export default Device;
