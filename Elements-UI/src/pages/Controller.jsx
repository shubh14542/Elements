import React, { useState } from "react";
import UploadController from "../components/UploadController";

const Controller = () => {
    const [openUploadController,setOpenUploadController] = useState(false)
  return (
    <section >
      <div className=" shadow-md flex items-center justify-between" >
        <h1 className="font-semibold"> Controllers </h1>
        <button onClick={()=>setOpenUploadController(true)} className="text-sm border  bg-indigo-300 hover:bg-indigo-700 px-3 py-1 rounded ">
          
          Add Controller
        </button>
      </div>
      {openUploadController && (
          <UploadController close={()=>setOpenUploadController(false)} />

      )

      }
    </section>
  );
};

export default Controller;
