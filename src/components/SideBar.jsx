'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'ABOUT' },
    { label: 'FEATURES' },
    { label: 'HASH APP' },
    { label: 'HASH SHOP' },
    { label: 'HOW TO START' },
    { label: 'FAQ' }
  ];

  const socialLinks = ['Instagram', 'LinkedIn', 'Twitter'];

  const handleSidebarClick = (e) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className='fixed inset-0 bg-black/50 z-40'
        style={{ pointerEvents: 'auto' }}
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        exit={{ x: -400 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onClick={handleSidebarClick}
        className='fixed left-0 top-0 h-screen w-[400px] z-50'
        style={{ pointerEvents: 'auto' }}
      >
        {/* Background Image */}
        <div className='relative w-full h-full'>
          <Image
            src='/images/Vector-5.svg'
            alt='Sidebar background'
            fill
            className='object-cover'
            priority
          />

          {/* Content */}
          <div className='absolute inset-0 flex flex-col justify-between p-8'>
            
            {/* Header */}
            <div className='flex justify-between items-start'>
              <div className='text-white text-xl font-bold'>
                Hash For Gamers
              </div>
              <button 
                onClick={onClose}
                className='text-white hover:text-gray-300 transition-colors p-2'
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className='flex flex-col gap-6 mt-20'>
              {menuItems.map((item, index) => (
                <div key={index} className='cursor-pointer group'>
                  <div className='relative inline-block'>
                    {/* Glow effect - only visible on hover */}
                    <div className='absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 blur-sm opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-lg'></div>
                    
                    {/* Text */}
                    <div className='relative text-white px-6 py-2 rounded-lg font-bold text-lg group-hover:bg-green-500 transition-all duration-300'>
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className='flex gap-6 items-center'>
              {socialLinks.map((social, index) => (
                <button 
                  key={index}
                  className='text-white text-sm hover:text-green-400 transition-colors'
                >
                  {social}
                </button>
              ))}
            </div>

          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
