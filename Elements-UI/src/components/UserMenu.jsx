import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
import Divider from './Divider'
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummariApi'
import { logout } from '../store/userSlice'
import toast from 'react-hot-toast'
import AxiosToastError from '../utils/AxiosToastError'
const UserMenu = ({close}) => {
  const user = useSelector((state) => state.user)
  const dispatch  = useDispatch()
  const handleLogout =  async () => {
      try {
        const response = await Axios ({
          ...SummaryApi.logout

        })
        console.log("logout",response)
        if(response.data.success){
            close()
            dispatch(logout())
            localStorage.clear()
            toast.success(response.data.message)
        }
      } catch (error) {
        AxiosToastError(error)
      }
  }

  return (
    <div className="w-72 p-5 rounded-2xl bg-[#0a0a0a] backdrop-blur-lg border border-[#00ffcc]/20 shadow-[0_0_25px_rgba(0,255,204,0.08)] text-white">
      <div className="text-xl font-extrabold mb-1 text-[#00ffcc] tracking-wider uppercase">
        My Account
      </div>
      <div className="text-sm text-gray-400 mb-4 tracking-wide">
        {user?.name || user?.mobile }
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
           onClick={handleLogout}  className="text-left text-red-400 hover:text-red-600 px-2 py-1 rounded transition duration-200"
        >
          🚪&nbsp;Log Out
        </button>
      </div>
    </div>
  )
}

export default UserMenu
