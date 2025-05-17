// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const games = [
//   {
//     title: "Valorant",
//     image: "https://cdn.cloudflare.steamstatic.com/apps/csgo/blog/images/fb_image.png",
//   },
//   {
//     title: "Fortnite",
//     image: "https://cdn2.unrealengine.com/Fortnite%2FChapter2Season7%2FS7_Announce_BattlePass_Blade-1920x1080-6ff9d2aaf705.jpg",
//   },
//   {
//     title: "Cyberpunk 2077",
//     image: "https://cdn.mos.cms.futurecdn.net/nBrJ3YboR2ZtEeiPGXrQQB.jpg",
//   },
// ];

// const Home = () => {
//   return (
//     <div className="bg-black text-white min-h-screen font-sans">
//       {/* Hero Section */}
//       <div
//         className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://wallpaperaccess.com/full/5651991.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center"
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold text-[#00ffc3] drop-shadow-[0_0_20px_#00ffc3]">
//             Welcome to GamerZone
//           </h1>
//           <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto">
//             Dive into the ultimate gaming experience. Compete, play, and conquer.
//           </p>
//           <Link
//             to="/register"
//             className="mt-6 inline-block px-6 py-3 bg-[#00ffc3] text-black font-bold rounded-full hover:bg-[#00e5b0] transition"
//           >
//             Get Started
//           </Link>
//         </motion.div>
//       </div>

//       {/* Featured Games Section */}
//       <section className="py-16 px-6 max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00ffc3] drop-shadow-[0_0_10px_#00ffc3]"
//         >
//           🎮 Featured Games
//         </motion.h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
//           {games.map((game, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-[#111] border border-[#00ffc3]/20 rounded-2xl overflow-hidden shadow-[0_0_30px_#00ffc344] backdrop-blur-lg"
//             >
//               <img
//                 src={game.image}
//                 alt={game.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-[#00ffc3]">{game.title}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const games = [
  {
    title: "Cyberpunk 2077",
    image : " https://wallpaperaccess.com/full/158905.jpg "
  },
  {
    title: "Fortnite",
    image: "https://wallpaperaccess.com/full/38253.jpg",
  },
  {
    title: "Valorant",
    image: "https://cdn.cloudflare.steamstatic.com/apps/csgo/blog/images/fb_image.png",
  },
  { 
    title: "Call of Duty",
    image: " https://wallpaperaccess.com/thumb/641787.jpg ",
  },
  {
    title: "Assassin's Creed Valhalla",
    image: "https://wallpaperaccess.com/full/8115022.jpg",
  },
];

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://wallpaperaccess.com/full/5651991.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#00ffc3] drop-shadow-[0_0_20px_#00ffc3]">
            Welcome to GamerZone
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto">
            Dive into the ultimate gaming experience. Compete, play, and conquer.
          </p>
          <Link
            to="/dashboard"
            className="mt-6 inline-block px-6 py-3 bg-[#00ffc3] text-black font-bold rounded-full hover:bg-[#00e5b0] transition"
          >
            Get Started
          </Link>
        </motion.div>
      </div>

      {/* Featured Games Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00ffc3] drop-shadow-[0_0_10px_#00ffc3]"
        >
          🎮 Featured Games
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {games.map((game, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-[#00ffc3]/20 rounded-2xl overflow-hidden shadow-[0_0_30px_#00ffc344] backdrop-blur-lg"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#00ffc3]">{game.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
