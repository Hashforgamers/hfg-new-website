"use client";

import { X } from "lucide-react";

export default function AboutUsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f0f0f] text-white shadow-xl border border-white/10">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
        >
          <X size={22} />
        </button>

        <div className="p-8 md:p-12 space-y-10">
          {/* WHY CHOOSE US */}
          <div>
            <h2 className="text-3xl font-bold mb-3">Why Choose Us?</h2>
            <p className="text-white/70">
              Rethinking how digital hubs and entertainment zones operate.
            </p>
          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Instant Booking",
                desc: "Skip the hassle—no need for calls or coordination. Reserve your station instantly and stay focused on what matters.",
              },
              {
                title: "Live Availability",
                desc: "Check real-time status of spaces nearby. Avoid wait times and plan your sessions with confidence.",
              },
              {
                title: "Partner Dashboard",
                desc: "Enable seamless management of bookings, slots, and schedules. Designed to streamline operations and empower hosts.",
              },
              {
                title: "Built to Scale",
                desc: "Whether starting small or expanding locations, our platform adapts to your growth and simplifies your operations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 p-6 bg-white/5"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* MISSION */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-white/70 mb-4">
              We're here to redefine how people engage with high-end recreational
              and tech-enabled spaces. With simplified access, our goal is to
              eliminate barriers and provide users with reliable tools for
              seamless experiences.
            </p>
            <p className="text-white/70 mb-4">
              The platform is crafted to align users and space owners through
              intelligent scheduling, transparent operations, and real-time
              interaction.
            </p>
            <p className="text-white/70">
              For individuals, we offer a clear path to discover, book, and enjoy
              top-tier setups. For partners, we deliver robust systems to grow
              and manage their business digitally.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 text-center gap-6 pt-6 border-t border-white/10">
            <div>
              <p className="text-3xl font-bold">1+</p>
              <p className="text-sm text-white/60">Partner Locations</p>
            </div>
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm text-white/60">Verified Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold">99.9%</p>
              <p className="text-sm text-white/60">System Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
