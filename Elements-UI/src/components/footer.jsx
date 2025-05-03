import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
   <>
        <footer className='border-t text-white font-serif ' >
            <div className='container mx-auto p-4 text-center text-xl flex flex-col gap-4' >
                <p> &copy; All Rights Reserved 2025   </p>
            </div>
            <div className='flex items-center justify-center gap-4' >
               <a href=' ' className='hover:text-primary-light' > <FaLinkedin size={22} /></a>
               <a href=' ' className='hover:text-primary-light' > <FaInstagram size={22} /> </a>
            </div>
        </footer>
   </>
  )
}

export default Footer