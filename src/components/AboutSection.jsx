'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './SideBar';
import Link from 'next/link';

const AboutSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSidebarOpen(true);
  };

  return (
    <>
      {/* Sidebar Component */}
      <AnimatePresence>
        {isSidebarOpen && (
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
          />
        )}
      </AnimatePresence>

      <div className='w-screen h-screen bg-black' ref={ref}>
        <div className='flex justify-between py-[100px] px-[8vw]'>
          <motion.button
            onClick={handleMenuClick}
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            type='button'
            className='w-[40px] h-[40px] cursor-pointer'
          > 
            <Image 
              width={40} 
              height={40} 
              src='/component/sideButton.svg' 
              alt="Side button" 
              className='w-full h-full pointer-events-none' 
            />
            <Menu className='absolute top-[12px] left-[12px] w-[16px] h-[16px] text-black pointer-events-none' />
          </motion.button>
          
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
          >
           <Link href={`https://play.google.com/store/apps/details?id=com.hfg.hash`}> <Image width={100} height={100} src='/component/button.svg' alt="Button" /> </Link>
          </motion.button>
        </div>
        
        {/* Main Content Text */}
        <div className='mt-[1vh] px-[19vw] lg:px-[19vw]'>
          <motion.h1 
            className='text-4xl font-bold leading-tight'
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.span className='text-[#16FF00] block' variants={childVariants}>
              At Hash,
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className='lg:text-4xl text-xl font-bold leading-tight mt-8'
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.span className='text-[#16FF00]' variants={childVariants}>
              booking your next{' '}
            </motion.span>
            <motion.span className='text-[#FFEB3B]' variants={childVariants}>
              gaming session{' '}
            </motion.span>
            <motion.span className='text-gray-400' variants={childVariants}>
              is as
            </motion.span>
            <br />
            <motion.span className='text-[#16FF00]' variants={childVariants}>
              smooth as a{' '}
            </motion.span>
            <motion.span className='text-[#FFEB3B]' variants={childVariants}>
              headshot flick.{' '}
            </motion.span>
            <motion.span className='text-gray-400' variants={childVariants}>
              Whether
            </motion.span>
            <br />
            <motion.span className='text-[#16FF00]' variants={childVariants}>
              you're{' '}
            </motion.span>
            <motion.span className='text-[#FFEB3B]' variants={childVariants}>
              grinding ranked
            </motion.span>
            <motion.span className='text-gray-400' variants={childVariants}>
              ,{' '}
            </motion.span>
            <motion.span className='text-[#FFEB3B]' variants={childVariants}>
              partying{' '}
            </motion.span>
            <motion.span className='text-gray-400' variants={childVariants}>
              with
            </motion.span>
            <br />
            <motion.span className='text-[#16FF00]' variants={childVariants}>
              friends,{' '}
            </motion.span>
            <motion.span className='text-[#FFEB3B]' variants={childVariants}>
              or diving into a{' '}
            </motion.span>
            <motion.span className='text-gray-400' variants={childVariants}>
              new{' '}
            </motion.span>
            <motion.span className='text-[#FFEB3B]' variants={childVariants}>
              release
            </motion.span>
            <motion.span className='text-gray-400' variants={childVariants}>
              ,{' '}
            </motion.span>
            <motion.span className='text-[#AA00FF]' variants={childVariants}>
              we've
            </motion.span>
            <br />
            <motion.span className='text-[#16FF00]' variants={childVariants}>
              got your{' '}
            </motion.span>
            <motion.span className='text-[#FFEB3B]' variants={childVariants}>
              setup ready.{' '}
            </motion.span>
            <motion.span className='text-gray-400' variants={childVariants}>
              PCs,{' '}
            </motion.span>
            <motion.span className='text-[#FFEB3B]' variants={childVariants}>
              consoles
            </motion.span>
            <motion.span className='text-gray-400' variants={childVariants}>
              ,{' '}
            </motion.span>
            <motion.span className='text-[#AA00FF]' variants={childVariants}>
              VR
            </motion.span>
            <motion.span className='text-gray-400' variants={childVariants}>
              ,
            </motion.span>
            <br />
            <motion.span className='text-[#16FF00]' variants={childVariants}>
              and{' '}
            </motion.span>
            <motion.span className='text-[#FFEB3B]' variants={childVariants}>
              snacks{' '}
            </motion.span>
            <motion.span className='text-[#16FF00]' variants={childVariants}>
              included.
            </motion.span>
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default AboutSection;