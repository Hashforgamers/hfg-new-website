"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RewardsPage() {
  const [points, setPoints] = useState(1200);

  const rewards = [
    { id: 1, title: "Free 1 Hour Gaming", cost: 500 },
    { id: 2, title: "Free Headset Access", cost: 800 },
    { id: 3, title: "Tournament Entry Pass", cost: 1500 },
    { id: 4, title: "Free Snacks Combo", cost: 600 },
  ];

  const redeemReward = (cost) => {
    if (points >= cost) {
      setPoints(points - cost);
      alert("Reward Redeemed Successfully 🎉");
    } else {
      alert("Not Enough Points 😢");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      {/* HEADER */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold 
          bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 
          bg-clip-text text-transparent"
        >
          Rewards & Loyalty
        </motion.h1>

        <p className="mt-6 text-gray-400">
          Earn points by gaming & shopping. Redeem exclusive rewards!
        </p>

        <div className="mt-6 text-2xl font-bold text-green-400">
          Your Points: {points}
        </div>
      </div>

      {/* REWARDS GRID */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {rewards.map((reward) => (
          <motion.div
            key={reward.id}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 p-8 rounded-2xl 
            border border-yellow-400/20 shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">
              {reward.title}
            </h2>

            <p className="text-yellow-400 font-bold mb-6">
              Required Points: {reward.cost}
            </p>

            <button
              onClick={() => redeemReward(reward.cost)}
              className="w-full bg-yellow-500 py-3 rounded-xl hover:bg-yellow-400 transition font-semibold"
            >
              Redeem Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}