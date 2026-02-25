"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RewardsPage() {
  const [text, setText] = useState("");
  const fullText = "Loyalty System Unlocking Soon...";

  // Typing Effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 
          bg-[radial-gradient(circle_at_30%_40%,rgba(255,215,0,0.2),transparent_40%),
          radial-gradient(circle_at_70%_60%,rgba(255,0,255,0.2),transparent_40%)]"
        />
      </div>

      {/* Scan Line Effect */}
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-1 bg-gradient-to-r 
        from-transparent via-yellow-400 to-transparent opacity-40"
      />

      <div className="relative z-10 px-6 py-24 text-center">

        {/* Glitch Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-bold mb-16 
          bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 
          bg-clip-text text-transparent 
          drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]"
        >
          HASH LOYALTY PROTOCOL
        </motion.h1>

        {/* Glass Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-2xl p-14 rounded-3xl
          bg-white/5 backdrop-blur-xl
          border border-yellow-400/30
          shadow-[0_0_60px_rgba(255,215,0,0.3)]"
        >
          <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
            {text}
          </h2>

          <p className="text-gray-300 mb-8">
            Elite tiers, XP progression, exclusive perks and premium
            benefits are currently in development.
          </p>

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm tracking-widest text-yellow-400"
          >
            SYSTEM SYNCING...
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}