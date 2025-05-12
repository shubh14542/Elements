// import React from 'react'
// import UserMenu from '../components/UserMenu'
// import { Outlet } from 'react-router-dom'

// const Dashboard = () => {
//   return (
//         <section className='bg-white' >
//             <div className='container mx-auto p-3 grid lg:grid-cols-[250px,1fr]' >
               
//                  {/* left for menu */}
//                     <div className='py-2 sticky top-24 overflow-y-auto hidden lg:block ' >
//                         <UserMenu/>
//                     </div>
//                 {/* right for content */}
//                     <div className='bg-white p-4' >
//                            <Outlet/>
//                     </div>
            
//             </div>
//         </section>
//     )
// }

// export default Dashboard
import React from 'react';
import UserMenu from '../components/UserMenu';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111] text-white font-sans">
      <div className="container mx-auto p-4 grid lg:grid-cols-[260px,1fr] gap-6">
        
        {/* Sidebar Menu */}
        <aside className="hidden lg:block sticky top-24 h-fit">
          <div className="bg-black/60 backdrop-blur-md rounded-xl border border-white/10 shadow-lg p-5 space-y-4">
            <h2 className="text-xl font-bold tracking-wide text-purple-400">
              Gamer Panel
            </h2>
            <UserMenu />
          </div>
        </aside>

        {/* Main Content */}
        <main className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-md min-h-[70vh]">
          <div className="text-2xl font-semibold text-purple-300 mb-4 border-b border-white/10 pb-2">
            Dashboard
          </div>
          <Outlet />
        </main>

      </div>
    </section>
  );
};

export default Dashboard;
