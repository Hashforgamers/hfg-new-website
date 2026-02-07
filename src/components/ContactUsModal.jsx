'use client';

import { X } from 'lucide-react';

export default function ContactUsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gray-900 text-white rounded-2xl w-full max-w-lg p-6 shadow-lg mx-4 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-green-400"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-green-400">Contact Us</h2>

        <p className="mb-6 text-gray-300">
          Have questions about our gaming stations? Need help with booking? Our battle-hardened support warriors are ready to assist you.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Your full name" className="w-full rounded-md bg-gray-800 text-white p-2 focus:ring-2 focus:ring-green-400 outline-none"/>
          <input type="email" placeholder="you@example.com" className="w-full rounded-md bg-gray-800 text-white p-2 focus:ring-2 focus:ring-green-400 outline-none"/>
          <input type="text" placeholder="Subject" className="w-full rounded-md bg-gray-800 text-white p-2 focus:ring-2 focus:ring-green-400 outline-none"/>
          <textarea placeholder="Write your message here..." rows={4} className="w-full rounded-md bg-gray-800 text-white p-2 focus:ring-2 focus:ring-green-400 outline-none"></textarea>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 rounded-md">Send Message</button>
        </form>

        <div className="mt-6 border-t border-gray-700 pt-4 text-gray-400 text-sm space-y-1">
          <p className="font-semibold text-white">Emergency Support</p>
          <p>Technical issues during gameplay? Our rapid response team is available 24/7.</p>
          <p>Email: <a href="mailto:support@hashforgamers.co.in" className="text-green-400">support@hashforgamers.co.in</a> / <a href="mailto:hashforgamers@gmail.com" className="text-green-400">hashforgamers@gmail.com</a></p>
          <p>Phone: <a href="tel:+919137757935" className="text-green-400">+91 9137757935</a></p>
          <p>Address: Asmita Garden, Mira Road, Mumbai</p>
        </div>
      </div>
    </div>
  );
}
