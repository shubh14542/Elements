
// import React from 'react';
// import UserMenu from '../components/UserMenu';
// import { Outlet } from 'react-router-dom';

// const Dashboard = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111] text-white font-sans">
//       <div className="container mx-auto p-4 grid lg:grid-cols-[260px,1fr] gap-6">
        
//         {/* Sidebar Menu */}
//         <aside className="hidden lg:block sticky top-24 h-fit">
//           <div className="bg-black/60 backdrop-blur-md  rounded-xl border border-white/10 shadow-lg p-5 space-y-4">
//             <h2 className="text-xl font-bold tracking-wide text-purple-400">
//               Gamer Panel
//             </h2>
//             <UserMenu />
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-md min-h-[70vh]">
//           <div className="text-2xl font-semibold text-purple-300 mb-4 border-b border-white/10 pb-2">
//             Dashboard
//           </div>
//           <Outlet />
//         </main>

//       </div>
//     </section>  );
// };

// export default Dashboard;

import React from 'react';
import UserMenu from '../components/UserMenu';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#131313] to-[#0f0f0f] text-white font-sans">
      <div className="container mx-auto p-4 grid lg:grid-cols-[260px,1fr] gap-6">
        
        {/* Sidebar Menu - Gamer Style */}
        <aside className="hidden lg:block sticky top-24 self-start">
          <div className="bg-black/70 backdrop-blur-md rounded-2xl border border-purple-700/30 shadow-[0_0_20px_#7e22ce55] p-5 space-y-5 transition-transform hover:scale-[1.02]">
            <h2 className="text-2xl font-bold tracking-wider text-purple-400 drop-shadow-[0_0_6px_#7e22ce]">
              🎮 Gamer Panel
            </h2>
            <UserMenu />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="bg-black/60 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500/20 shadow-[0_0_25px_#06b6d455] min-h-[70vh] transition-all duration-300 hover:shadow-[0_0_40px_#06b6d4aa]">
          <div className="text-3xl font-semibold text-cyan-400 mb-5 border-b border-white/10 pb-3 tracking-wide drop-shadow-[0_0_4px_#06b6d4]">
            🧩 Dashboard
          </div>
          <Outlet />
        </main>

      </div>
    </section>
  );
};

export default Dashboard;

