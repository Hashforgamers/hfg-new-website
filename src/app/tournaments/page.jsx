"use client";

import { motion } from "framer-motion";

export default function TournamentsPage() {
  const tournaments = [
    {
      title: "BGMI Championship",
      prize: "₹25,000",
      date: "25 Feb 2026",
    },
    {
      title: "Valorant Pro Cup",
      prize: "₹40,000",
      date: "10 March 2026",
    },
    {
      title: "FIFA Showdown",
      prize: "₹15,000",
      date: "18 March 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16 
        bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 
        bg-clip-text text-transparent"
      >
        Live Tournaments
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tournaments.map((tournament, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-2xl border border-purple-500/30 
            hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {tournament.title}
            </h2>
            <p className="text-gray-400">Date: {tournament.date}</p>
            <p className="text-green-400 font-bold mt-2">
              Prize Pool: {tournament.prize}
            </p>

            <button className="mt-6 w-full bg-purple-600 py-2 rounded-xl hover:bg-purple-500 transition">
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
