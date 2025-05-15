// import React, { useEffect, useState } from "react";
// import UploadDevice from "../components/UploadDevice";
// import Loading from "../components/Loading";
// import NoData from "../components/NoData";
// import Axios from "../utils/Axios";
// import SummaryApi from "../common/SummariApi";
// const Device = () => {
//     const [openUploadDevice,setOpenUploadDevice] = useState(false)

//     const [loading,setLoading] = useState(false)

//     const [deviceData,setDeviceData] = useState([])

//     const fetchDevice = async () =>{
//       try {
//         setLoading(true)
//         const response = await Axios ({
//            ...SummaryApi.get_device
//         })
//         const { data : responseData} = response

//         if(responseData.success){
//           setDeviceData(responseData.data)
//         }
//       } catch (error) {
        
//       }finally{
//         setLoading(false)
//       }
//     }

//     useEffect(()=>{
//         fetchDevice()
//     },[])

//   return (
//     <section >
//       <div className=" shadow-md flex items-center justify-between" >
//         <h1 className="font-semibold"> Devices </h1>
//         <button onClick={()=>setOpenUploadDevice(true)} className="text-sm border  bg-indigo-300 hover:bg-indigo-700 px-3 py-1 rounded ">
          
//           Add Device
//         </button>
//       </div>
//     {
//       !deviceData[0] && !loading && (
//         <NoData/>
//       )
//     }

//   <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-4 gap-4 lg:grid-cols-5 gap-4" >
//       {
//       deviceData.map((device,index)=>{
//         return (
//           <div className="w-40  bg-green-400 rounded shadow-md  flex flex-col items-center justify-center " >
//               <img
//                 alt={device.name}
//                 src={device.image}
//                 className="w-52 object-scale-down"
//               />
//               <p>{device.name}</p>
//           </div>
//         )
//       })
//     }
//   </div>


//     {
//       loading && (
//         <Loading/>
//       )
//     }

//       {openUploadDevice && (
//           <UploadDevice fetchData={fetchDevice}  close={()=>setOpenUploadDevice(false)} />

//       )

//       }
//     </section>
//   );
// };

// export default Device;


import React, { useEffect, useState } from "react";
import UploadDevice from "../components/UploadDevice";
import Loading from "../components/Loading";
import NoData from "../components/NoData";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummariApi";

const Device = () => {
  const [openUploadDevice, setOpenUploadDevice] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deviceData, setDeviceData] = useState([]);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
        {deviceData.map((device, index) => (
          <div
            key={index}
            className="bg-[#111]/60 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_0_25px_rgba(0,255,204,0.08)] p-4 flex flex-col items-center hover:scale-105 transition-transform duration-200"
          >
            <img
              src={device.image}
              alt={device.name}
              className="w-28 h-28 object-contain mb-3 rounded"
            />
            <p className="text-center text-sm font-semibold text-[#00ffc3]">
              {device.name}
            </p>
          </div>
        ))}
      </div>

      {/* Loader */}
      {loading && <Loading />}

      {/* Modal Upload */}
      {openUploadDevice && (
        <UploadDevice fetchData={fetchDevice} close={() => setOpenUploadDevice(false)} />
      )}
    </section>
  );
};

export default Device;
