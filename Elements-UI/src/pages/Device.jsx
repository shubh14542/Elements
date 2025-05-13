import React, { useState } from "react";
import UploadDevice from "../components/UploadDevice";

const Device = () => {
    const [openUploadDevice,setOpenUploadDevice] = useState(false)
  return (
    <section >
      <div className=" shadow-md flex items-center justify-between" >
        <h1 className="font-semibold"> Devices </h1>
        <button onClick={()=>setOpenUploadDevice(true)} className="text-sm border  bg-indigo-300 hover:bg-indigo-700 px-3 py-1 rounded ">
          
          Add Device
        </button>
      </div>
      {openUploadDevice && (
          <UploadDevice close={()=>setOpenUploadDevice(false)} />

      )

      }
    </section>
  );
};

export default Device;
