"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ShopGearPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* CYBERPUNK BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black">
        <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.25),transparent_40%),
        radial-gradient(circle_at_80%_70%,rgba(255,0,255,0.25),transparent_40%)] 
        animate-pulse"></div>
      </div>

      <div className="relative z-10 px-6 py-20">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-20 max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold 
          bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
          bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">
            HASH GEAR STORE
          </h1>

          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-purple-600/60 backdrop-blur-md px-6 py-2 rounded-xl 
            border border-purple-400/30 hover:bg-purple-500 transition"
          >
            🛒 Cart (0)
          </button>
        </div>

        {/* COMING SOON SECTION */}
        <div className="flex flex-col items-center justify-center text-center mt-32">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/5 backdrop-blur-xl p-12 rounded-3xl 
            border border-cyan-400/20 
            shadow-[0_0_40px_rgba(0,255,255,0.3)] max-w-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 
            bg-gradient-to-r from-pink-400 to-cyan-400 
            bg-clip-text text-transparent">
              Gear Launching Soon 🚀
            </h2>

            <p className="text-gray-300 text-lg mb-8">
              Our premium cyber gaming collection is currently under development.
              Stay tuned for high-performance headsets, RGB gear, and pro-level accessories.
            </p>

            <div className="text-cyan-400 text-sm tracking-widest animate-pulse">
              SYSTEM INITIALIZING...
            </div>
          </motion.div>
        </div>
      </div>

      {/* CART MODAL (EMPTY BLUR STYLE) */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl 
          w-[95%] max-w-md relative border border-purple-400/30">

            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">
              Your Cart
            </h2>

            <p className="text-gray-400 text-center">
              No products available yet.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}