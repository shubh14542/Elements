// import React from 'react'
// import { useSelector } from 'react-redux'
// import isAdmin from '../utils/isAdmin'
// const AdminPermission = ({children}) => {

//     const user = useSelector(state=>state.user)

//   return (
//    <>
//    {
//         isAdmin(user.role) ? children : <p> Do not have permission </p>
//    }
//    </>
//   )
// }

// export default AdminPermission

import React from 'react';
import { useSelector } from 'react-redux';
import isAdmin from '../utils/isAdmin';

const AdminPermission = ({ children }) => {
  const user = useSelector(state => state.user);

  return (
    <>
      {isAdmin(user?.role) ? (
        children
      ) : (
        <div className="max-w-xl mx-auto mt-16 p-6 rounded-2xl bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-red-600 shadow-[0_0_15px_#ff0000aa] animate-fade-in text-center text-red-500 font-['Orbitron']">
          <div className="text-3xl font-bold mb-2 flex justify-center items-center gap-2">
            <span className="animate-pulse">🚫</span> ACCESS DENIED
          </div>
          <p className="text-sm text-gray-400 italic tracking-wide">
            You don’t have the clearance to enter this zone.
          </p>
          <p className="mt-4 text-xs text-red-400 uppercase tracking-widest">
            Admins only – Level Locked 🔒
          </p>
        </div>
      )}
    </>
  );
};

export default AdminPermission;
