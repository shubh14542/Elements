// import React from 'react'
// import { useState } from 'react'
// import { IoClose } from "react-icons/io5";
// import uploadImage from '../utils/uploadImage';
// import Axios from "../utils/Axios";
// import SummaryApi from '../common/SummariApi';
// import toast from 'react-hot-toast';
// import AxiosToastError from '../utils/AxiosToastError';
// const UploadDevice = ({close,fetchData}) => {
//     const [data,setData] = useState({
//         name : "",
//         image : ""
//     })

//     const handleChange = (e) =>{
//         const {name,value} = e.target

//         setData((preve) =>{
//             return{
//                 ...preve,
//                 [name] : value
//             }
//         })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         try {
//             setLoading(true)
//             const response = await Axios({
//                 ...SummaryApi.add_device,
//                 data : data 
//             })
//             const { data : responseData } = response 
//             if(responseData.success){
//                 toast.success(responseData.message)
//                 close()
//                 fetchData()
//             }

//         } catch (error) {
//             AxiosToastError(error)
//         }finally{
//             setLoading(false)
//         }

//     }

//     const [loading,setLoading] = useState(false)

//     const handleUploadDeviceImages = async (e) =>{
//         const file = e.target.files[0]

//         if(!file){
//             return 
//         }

//         const response = await uploadImage(file)

//         const {data : imageResponse} = response 

//         setData((preve)=>{
//             return {
//                 ...preve,
//                 image : imageResponse.data.url
//             }
//         })


//     }

//   return (
//     <section className='fixed top-0 bottom-0 left-0 right-0 p-4 flex items-center justify-center bg-neutral-800 bg-opacity-70'>
//     <div className='bg-indigo-500 max-w-4xl w-full p-4 rounded' >
//         <div className='flex items-center justify-between' >
//             <h1 className='font-semibold' > Controllers</h1>
//             <button onClick={close} className='w-fit block ml-auto' >
//                 <IoClose size={25} /> 
//             </button>
//         </div>
//         <form className='my-3 grid gap-3' onSubmit={handleSubmit} >
//             <div className='grid gap-1' >
//                 <label id='deviceName'>Device</label>
//                 <input
//                 type='text'
//                 id='deviceName'
//                 placeholder='Enter your device'
//                 value = {data.name}
//                 name = 'name'
//                 onChange={handleChange}
//                 className='bg-blue-50 p-2 border border-blue-100 focus-within:border-violet-300 outline-none rounded '
//                 />
//             </div>
//             <div className='grid gap-1' >
//                  <p>Image</p>
//                 <div className='flex gap-4 flex-col lg:flex-row items-center ' >
//                     <div className='border bg-blue-50 h-36 w-full lg:w-36 flex items-center justify-center text-neutral-500 rounded' >
//                         {
//                             data.image ?  (
//                                 <img
//                                 alt='device' 
//                                 src={data.image}
//                                 className='w-full  h-full object-scale-down'
//                                 />
//                             )
//                              : 
//                             (
//                                 <p className='text-sm' >No Image</p>
//                              )
//                         }
//                     </div>
//                     <label htmlFor='uploadControllerImage' >
//                         <div  className={`
//                         ${!data.name?"bg-gray-400" : "bg-orange-400" }
//                         px-4 py-1 border rounded cursor-pointer
//                         `} >Upload Image</div>        
//                         <input
//                         disabled={!data.name}
//                         onChange={handleUploadDeviceImages}
//                         type='file'
//                         id='uploadControllerImage'
//                         className='hidden'
//                         />     
//                     </label>       
//                 </div>
//             </div>
//             <button className={`
//             ${data.name && data.image ? "bg-orange-400" : "bg-gray-400" }
//             py-2
//             `}
            
//             >Add Device </button>
//         </form>
//     </div>

//     </section>
//   )
// }

// export default UploadDevice

import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import uploadImage from '../utils/uploadImage';
import Axios from "../utils/Axios";
import SummaryApi from '../common/SummariApi';
import toast from 'react-hot-toast';
import AxiosToastError from '../utils/AxiosToastError';

const UploadDevice = ({ close, fetchData }) => {
  const [data, setData] = useState({ name: "", image: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Axios({ ...SummaryApi.add_device, data });
      const { data: responseData } = response;
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
    const response = await uploadImage(file);
    const { data: imageResponse } = response;
    setData(prev => ({ ...prev, image: imageResponse.data.url }));
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl bg-[#0d0d0d] border border-[#00ffc3]/20 rounded-2xl shadow-[0_0_40px_#00ffc3]/20 p-6 text-white relative">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#00ffc3]/10 pb-3 mb-4">
          <h2 className="text-2xl font-bold text-[#00ffc3] tracking-widest uppercase">
            Add New Device
          </h2>
          <button onClick={close} className="text-gray-300 hover:text-red-500 transition">
            <IoClose size={28} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Device Name */}
          <div>
            <label htmlFor="deviceName" className="text-sm text-[#aaa] mb-1 block">
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
                  <img src={data.image} alt="device" className="w-full h-full object-contain" />
                ) : (
                  <p className="text-sm text-gray-500">No Image</p>
                )}
              </div>

              {/* Upload */}
              <label htmlFor="uploadDeviceImage" className="cursor-pointer">
                <div className={`px-4 py-2 rounded-lg text-sm font-semibold transition
                  ${!data.name ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-[#ff4b9b] hover:bg-[#ff358f] text-white'}
                `}>
                  Upload Image
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
              ${data.name && data.image ? "bg-[#00ffc3] text-black hover:bg-[#00e6b6]" : "bg-gray-600 text-gray-300 cursor-not-allowed"}
            `}
          >
            {loading ? "Adding Device..." : "Add Device"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default UploadDevice;
