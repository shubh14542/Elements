// import React, { useEffect, useState } from "react";
// import UploadDevice from "../components/UploadDevice";
// import Loading from "../components/Loading";
// import NoData from "../components/NoData";
// import Axios from "../utils/Axios";
// import SummaryApi from "../common/SummariApi";
// import EditDevice from "../components/EditDevice";
// import ConfirmBox from "../components/ConfirmBox";
// import toast from "react-hot-toast";
// import AxiosToastError from "../utils/AxiosToastError";
// const Device = () => {
//   const [openUploadDevice, setOpenUploadDevice] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [deviceData, setDeviceData] = useState([]);
//   const [openEdit, setOpenEdit] = useState(false);
//   const [editData, setEditData] = useState({
//     name: "",
//     image: "",
//   });
//   const [openConfirmBoxDelete, setOpenConfirmBoxDelete] = useState(false);
//   const [deleteDevice, setDeleteDevice] = useState({
//     _id: "",
//   });
//   const fetchDevice = async () => {
//     try {
//       setLoading(true);
//       const response = await Axios({ ...SummaryApi.get_device });
//       const { data: responseData } = response;
//       if (responseData.success) {
//         setDeviceData(responseData.data);
//       }
//     } catch (error) {
//       console.error("Fetch failed", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDevice();
//   }, []);

//   const handleDeleteDevice = async () => {
//      try {
      
//        const response = await Axios({
//         ...SummaryApi.delete_device,
//         data : deleteDevice,
         
//       })

//       const { data: responseData } = response;

//       if(responseData.success){
//         toast.success(responseData.message)
//         fetchDevice()
//         setOpenConfirmBoxDelete(false)
//       }

//      } catch (error) {
//        AxiosToastError(error)
//      }
//   };

//   return (
//     <section className="text-white min-h-screen font-sans">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 mb-6 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 shadow-lg">
//         <h1 className="text-2xl font-bold text-[#00ffc3] tracking-wider">
//           🎮 Device Manager
//         </h1>
//         <button
//           onClick={() => setOpenUploadDevice(true)}
//           className="text-sm px-5 py-2 rounded-md bg-[#00ffc3]/10 hover:bg-[#00ffc3]/20 text-[#00ffc3] border border-[#00ffc3]/30 transition duration-200"
//         >
//           ➕ Add Device
//         </button>
//       </div>

//       {/* No Devices */}
//       {!deviceData.length && !loading && <NoData />}

//       {/* Device Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-2 py-1">
//         {deviceData.map((device, index) => {
//           return (
//             <div
//               key={device._id}
//               className="bg-[#111]/60 backdrop-blur-md w-36 border border-white/10 rounded-xl shadow-[0_0_25px_rgba(0,255,204,0.08)] p-1 flex flex-col items-center hover:scale-105 transition-transform duration-200"
//             >
//               <img
//                 src={device.image}
//                 alt={device.name}
//                 className="w-36 h-36 object-contain rounded"
//               />
//               <p className="text-center text-sm font-semibold text-[#00ffc3]">
//                 {device.name}
//               </p>
//               <div className="items-center gap-6 h-12 flex gap-3">
//                 <button
//                   onClick={() => {
//                     setOpenEdit(true);
//                     setEditData(device);
//                   }}
//                   className="flex-1 bg-green-100 hover:bg-green-200 text-green-600 p-1 px-2 rounded "
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() => {
//                     setOpenConfirmBoxDelete(true);
//                     setDeleteDevice(device)
//                   }}
//                   className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 p-1 px-2 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Loader */}
//       {loading && <Loading />}

//       {/* Modal Upload */}
//       {openUploadDevice && (
//         <UploadDevice
//           fetchData={fetchDevice}
//           close={() => setOpenUploadDevice(false)}
//         />
//       )}

//       {openEdit && (
//         <EditDevice
//           data={editData}
//           close={() => setOpenEdit(false)}
//           fetchData={fetchDevice}
//         />
//       )}

//       {openConfirmBoxDelete && (
//         <ConfirmBox
//           close={() => setOpenConfirmBoxDelete(false)}
//           cancel={() => setOpenConfirmBoxDelete(false)}
//           ConfirmBox={handleDeleteDevice} 
//         />
//       )}
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
import EditDevice from "../components/EditDevice";
import ConfirmBox from "../components/ConfirmBox";
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToastError";

const Device = () => {
  const [openUploadDevice, setOpenUploadDevice] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deviceData, setDeviceData] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState({ name: "", image: "" });
  const [openConfirmBoxDelete, setOpenConfirmBoxDelete] = useState(false);
  const [deleteDevice, setDeleteDevice] = useState({ _id: "" });

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

  const handleDeleteDevice = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.delete_device,
        data: deleteDevice,
      });

      const { data: responseData } = response;

      if (responseData.success) {
        toast.success(responseData.message);
        fetchDevice();
        setOpenConfirmBoxDelete(false);
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <section className="text-white min-h-screen font-['Orbitron'] bg-gradient-to-br from-black via-[#0f0f23] to-black py-6 px-4">
      {/* Header */}
      <div className="flex items-center justify-between p-4 mb-8 bg-[#0a0a0a]/70 border border-[#00ffc3]/20 rounded-xl shadow-[0_0_20px_#00ffc3] backdrop-blur-md">
        <h1 className="text-3xl font-extrabold text-[#00ffc3] tracking-widest drop-shadow-[0_0_6px_#00ffc3]">
          🎮 Device Manager
        </h1>
        <button
          onClick={() => setOpenUploadDevice(true)}
          className="px-6 py-2 bg-[#00ffc3]/10 border border-[#00ffc3]/30 text-[#00ffc3] hover:bg-[#00ffc3]/30 transition-all duration-200 rounded-md text-sm tracking-wider shadow-[0_0_8px_#00ffc3]"
        >
          ➕ Add Device
        </button>
      </div>

      {/* No Devices */}
      {!deviceData.length && !loading && <NoData />}

      {/* Device Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-1 py-2">
        {deviceData.map((device) => (
          <div
            key={device._id}
            className="bg-[#111]/70 backdrop-blur-md w-full border border-[#00ffc3]/10 rounded-xl p-3 flex flex-col items-center shadow-[0_0_12px_rgba(0,255,195,0.15)] hover:shadow-[0_0_20px_#00ffc3] hover:scale-105 transition-transform duration-200"
          >
            <img
              src={device.image}
              alt={device.name}
              className="w-32 h-32 object-contain rounded-lg mb-3 border border-white/10"
            />
            <p className="text-center text-sm font-semibold text-[#00ffc3] mb-2 tracking-wide">
              {device.name}
            </p>
            <div className="flex gap-2 w-full">
              <button
                onClick={() => {
                  setOpenEdit(true);
                  setEditData(device);
                }}
                className="flex-1 text-xs px-3 py-1 rounded bg-green-200 text-green-900 hover:bg-green-300 transition font-semibold shadow"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setOpenConfirmBoxDelete(true);
                  setDeleteDevice(device);
                }}
                className="flex-1 text-xs px-3 py-1 rounded bg-red-200 text-red-800 hover:bg-red-300 transition font-semibold shadow"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Loading Spinner */}
      {loading && <Loading />}

      {/* Modals */}
      {openUploadDevice && (
        <UploadDevice
          fetchData={fetchDevice}
          close={() => setOpenUploadDevice(false)}
        />
      )}

      {openEdit && (
        <EditDevice
          data={editData}
          close={() => setOpenEdit(false)}
          fetchData={fetchDevice}
        />
      )}

      {openConfirmBoxDelete && (
        <ConfirmBox
          close={() => setOpenConfirmBoxDelete(false)}
          cancel={() => setOpenConfirmBoxDelete(false)}
          confirm={handleDeleteDevice}
        />
      )}
    </section>
  );
};

export default Device;

