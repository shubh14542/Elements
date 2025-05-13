import React from 'react'
import { useState } from 'react'
import { IoClose } from "react-icons/io5";
import uploadImage from '../utils/uploadImage';
const UploadDevice = ({close}) => {
    const [data,setData] = useState({
        name : "",
        images : ""
    })

    const handleChange = (e) =>{
        const {name,value} = e.target

        setData((preve) =>{
            return{
                ...preve,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleUploadDeviceImages = async (e) =>{
        const file = e.target.files[0]

        if(!file){
            return 
        }

        const response = await uploadImage(file)

        const {data : imageResponse} = response 

        setData((preve)=>{
            return {
                ...preve,
                images : imageResponse.data.url
            }
        })


    }

  return (
    <section className='fixed top-0 bottom-0 left-0 right-0 p-4 flex items-center justify-center bg-neutral-800 bg-opacity-70'>
    <div className='bg-indigo-500 max-w-4xl w-full p-4 rounded' >
        <div className='flex items-center justify-between' >
            <h1 className='font-semibold' > Controllers</h1>
            <button onClick={close} className='w-fit block ml-auto' >
                <IoClose size={25} /> 
            </button>
        </div>
        <form className='my-3 grid gap-3' onSubmit={handleSubmit} >
            <div className='grid gap-1' >
                <label id='deviceName'>Device</label>
                <input
                type='text'
                id='deviceName'
                placeholder='Enter your device'
                value = {data.name}
                name = 'name'
                onChange={handleChange}
                className='bg-blue-50 p-2 border border-blue-100 focus-within:border-violet-300 outline-none rounded '
                />
            </div>
            <div className='grid gap-1' >
                 <p>Image</p>
                <div className='flex gap-4 flex-col lg:flex-row items-center ' >
                    <div className='border bg-blue-50 h-36 w-full lg:w-36 flex items-center justify-center text-neutral-500 rounded' >
                        {
                            data.images ?  (
                                <img
                                alt='device' 
                                src={data.images}
                                className='w-full  h-full object-cover'
                                />
                            )
                             : 
                            (
                                <p className='text-sm' >No Image</p>
                             )
                        }
                    </div>
                    <label htmlFor='uploadControllerImage' >
                        <div  className={`
                        ${!data.name?"bg-gray-400" : "bg-orange-400" }
                        px-4 py-1 border rounded cursor-pointer
                        `} >Upload Image</div>        
                        <input
                        disabled={!data.name}
                        onChange={handleUploadDeviceImages}
                        type='file'
                        id='uploadControllerImage'
                        className='hidden'
                        />     
                    </label>       
                </div>
            </div>
        </form>
    </div>

    </section>
  )
}

export default UploadDevice