// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import Divider from './Divider'
// const UserMenu = () => {
//   const user = useSelector((state)=>state.user)
//   return (
//     <div>
//         <div className='font-semibold' >
//           My Account
//         </div>
//         <div className='text-sm' >{user.name || user.mobile}</div>
//         <Divider/>
//         <div className='text-sm grid gap-3' >
//             <Link to={""} className='px-2' >My Bookings</Link>
//             <Link to={""} className='px-2' >Save Address</Link>
//             <button className='text-left bg-red-500 px-2 ' >Log Out</button>
//         </div>
//     </div>
//   )
// }

// export default UserMenu

import React from 'react'
import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import Divider from './Divider'

const UserMenu = () => {
  const user = useSelector((state) => state.user)
 

  return (
    <div className="w-72 p-5 rounded-2xl bg-[#0a0a0a] backdrop-blur-lg border border-[#00ffcc]/20 shadow-[0_0_25px_rgba(0,255,204,0.08)] text-white">
      <div className="text-xl font-extrabold mb-1 text-[#00ffcc] tracking-wider uppercase">
        My Account
      </div>
      <div className="text-sm text-gray-400 mb-4 tracking-wide">
        {user?.name || user?.mobile || 'Gamer'}
      </div>

      <Divider className="my-2 border-[#00ffcc]/20" />

      <div className="text-sm grid gap-3">
        <Link
          to="/bookings"
          className="px-2 py-1 rounded hover:bg-[#00ffcc]/10 hover:text-[#00ffcc] transition-all duration-200"
        >
          🎮&nbsp;My Bookings
        </Link>
        <Link
          to="/address"
          className="px-2 py-1 rounded hover:bg-[#00ffcc]/10 hover:text-[#00ffcc] transition-all duration-200"
        >
          📍&nbsp;Saved Addresses
        </Link>
        <button
          className="text-left text-red-400 hover:text-red-600 px-2 py-1 rounded transition duration-200"
        >
          🚪&nbsp;Log Out
        </button>
      </div>
    </div>
  )
}

export default UserMenu
