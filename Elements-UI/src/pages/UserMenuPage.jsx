import React from 'react'
import UserMenu from '../components/UserMenu'
import { IoCloseSharp } from "react-icons/io5";
const UserMenuPage = () => {
  return (
    <section className='bg-white h-full w-full py-2' >
      <button onClick={()=>window.history.back()} className='text-neutral-800 block w-fit ml-auto' >
            <IoCloseSharp size={25} />  
      </button>
       <div className='container mx-auto px-3 pb-8' >
         <UserMenu/>
       </div>
    </section>
  )
}

export default UserMenuPage