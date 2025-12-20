'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import {Menu} from 'lucide-react';

const HeroSection = () => {
  const hashForText = "HASH FOR".split('');
  const gamersText = "GAMERS".split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, rotateX: 90, y: 20 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center p-[3vh]'>
      {/* Main Container with padding */}
      <div className='relative w-full h-full'>
        
        {/* Background Image/Gradient */}
        <div className='relative w-full h-full overflow-hidden'>
          <Image 
            src='/images/hero5.png' 
            alt='Hero background'
            fill
            className='object-cover opacity-80'
            priority
          />
        </div>

        {/* Top Buttons - Absolute positioned */}
        <div className='absolute top-[40px] left-[40px] right-[40px] flex justify-between items-center z-40'>
          {/* Menu/Sidebar Button */}
          <button className='p-3'>
            <Image 
              src='/component/sideButton.svg' 
              alt='Menu'
              width={40}
              height={40}
              className='absolute'
            />
            <Menu className='absolute text-[10px] mx-[6px] mb-[2vh]'/>
            
          </button>

          {/* Download Button */}
          <button>
            <Image src="/component/button.svg" alt='download' width={100} height={100}/>
          </button>
        </div>

        {/* Purple Rectangle Image with Text (Your provided image) */}
        <div className='absolute inset-0 flex items-center justify-center z-20'>
          <div className='relative mt-[-24vh]'>
            <div className='bg-[#744DE0] w-[77vw] h-[52vh] flex flex-col justify-center items-center'>
              <motion.p
                className='text-white text-2xl lg:mt-[-140px] text-center mb-4'
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
              >
                pick your café, choose your game
              </motion.p>

              <motion.div
                className='text-white lg:text-8xl font-bold text-center flex flex-wrap justify-center'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {hashForText.map((char, index) => (
                  <motion.span
                    key={`hash-for-${index}`}
                    variants={charVariants}
                    style={{
                      display: 'inline-block',
                      marginRight: char === ' ' ? '0.5em' : '0',
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className='text-white lg:text-8xl font-bold text-center flex flex-wrap justify-center'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {gamersText.map((char, index) => (
                  <motion.span
                    key={`gamers-${index}`}
                    variants={charVariants}
                    style={{
                      display: 'inline-block',
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className='absolute bottom-[80px] left-1/2 transform -translate-x-1/2 lg:px-[8vw] lg:mx-[3vw] lg:my-[5vh] w-[600px] h-[300px] md:w-[700px] md:h-[350px] lg:w-[800px] lg:h-[400px] z-30'>
          <Image 
            src='/images/gaming-characters.png' 
            alt='Gaming characters'
            width={600}
            height={560}
            className='object-contain object-bottom'
          />
        </div>

        {/* Scroll Down Indicator */}
        <div className='absolute bottom-[60px] left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-2'>
          <p className='text-white text-sm md:text-base'>Scroll Down</p>
          <div className='flex flex-col gap-1'>
            <svg 
              className='w-6 h-6 text-white animate-bounce' 
              fill='none' 
              strokeLinecap='round' 
              strokeLinejoin='round' 
              strokeWidth='2' 
              viewBox='0 0 24 24' 
              stroke='currentColor'
            >
              <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
