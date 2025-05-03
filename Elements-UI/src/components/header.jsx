import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { useSelector } from 'react-redux';
const Header = () => {

    
  const navigate = useNavigate()
  const redirectToLoginPage = () =>{
        navigate("/login")
  }
  const user = useSelector((state)=>state?.user)
  console.log("user from store",user)
  return (
    <>
    {/* Desktop Menu */}
            <header className='h-28 lg lg: shadow sticky top-0 bg-sky-500 flex justify-center flex-col gap-2' >
                       <div className='container mx-auto flex items-center px-4 justify-between' >
                          <div className='h-full' >
                              <Link to={'/'} className='text-6xl h-full flex justify-center items-center ' >
                                  <p className='hidden lg:block' > Elements</p>
                                  <p className='lg:hidden mr-3' > Elements</p>
                              </Link>
                          </div>
                        {/* Login & booking section */}
                        <div className=' '>
                             {/* user icon is only visible in mobile */}
                             <button className="text-neutral-500 lg:hidden ">
                                <FaUserCircle size={22} />
                             </button>
                              {/* Desktop view */}
                              <div className="hidden lg:flex items-center gap-10">
                                  <button onClick={redirectToLoginPage} className='text-xl px-2 font-serif ' >Login</button>
                                  <button className='flex items-center bg-red-500 hover:bg-red-700 text-white gap-2 px-3 py-3 rounded ' >
                                    {/* my bookings */} 
                                    <div className='animate-bounce' >
                                        <TbBrandBooking size={28} />
                                    </div>
                                    {/* bookings history */}
                                    <div className='font-serif'  >
                                        <p>My Bookings</p>
                                    </div>
                                  </button>
                              </div>
                        </div>
                       </div>
            </header>

           
            
    </>
)
}

export default Header