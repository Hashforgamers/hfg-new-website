"use client";

import { motion } from "framer-motion";

export default function TournamentsPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* CYBERPUNK BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black">
        <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,255,0.25),transparent_40%),
        radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.25),transparent_40%)]
        animate-pulse"></div>
      </div>

      <div className="relative z-10 px-6 py-20">

        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-center mb-20 
          bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 
          bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]"
        >
          TOURNAMENT ARENA
        </motion.h1>

        {/* UPCOMING CARD */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/5 backdrop-blur-xl p-14 rounded-3xl 
            border border-purple-400/30 
            shadow-[0_0_40px_rgba(255,0,255,0.3)]
            max-w-2xl text-center"
          >
            <h2 className="text-4xl font-bold mb-6 
            bg-gradient-to-r from-cyan-400 to-pink-500 
            bg-clip-text text-transparent">
              Upcoming Tournaments 🏆
            </h2>

            <p className="text-gray-300 text-lg mb-8">
              Competitive battles are loading into the arena.
              Stay ready — registrations will open soon for 
              high-stakes gaming tournaments.
            </p>

            <div className="text-purple-400 tracking-widest text-sm animate-pulse">
              MATCHMAKING INITIALIZING...
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}