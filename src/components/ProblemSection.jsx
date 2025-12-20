'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProblemsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const questionVariants = {
    hidden: { 
      opacity: 0, 
      clipPath: 'inset(0 100% 0 0)',
    },
    visible: {
      opacity: 1,
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  const solutionVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        delay: 0.4,
      },
    },
  };

  const bottomImageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.6,
      },
    },
  };

  return (
    <div ref={ref} className='w-screen h-screen bg-black'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-center px-[5vw] py-[8vh] gap-8 lg:gap-12'>
        
        {/* Left Side - Boy at Computer Image */}
        <motion.div 
          className='relative w-full max-w-[400px] lg:max-w-[500px] h-[500px] lg:h-[700px]'
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Image 
            src='/images/boy-computer.svg' 
            alt='Boy at gaming setup'
            fill
            className='object-contain lg:mx-[-100px]'
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <div className='flex flex-col gap-8 max-w-2xl'>
          
          {/* Questions List */}
          <motion.div 
            className='flex flex-col gap-4'
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {['Can\'t find gaming cafes?', 'Can\'t trust new gaming gear?', 'Not got a single gaming identity?', 'Feel a lack of community?'].map((question, index) => (
              <motion.h2 
                key={index}
                className='text-white text-2xl md:text-3xl lg:text-2xl'
                variants={questionVariants}
              >
                {question}
              </motion.h2>
            ))}
          </motion.div>

          {/* Solution Text */}
          <motion.div 
            className='lg:mt-[-3vh]'
            variants={solutionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className='text-[#16FF00] text-xl md:text-2xl lg:text-2xl font-normal mb-2'>
              your solution is,
            </p>
            <h1 className='text-[#16FF00] text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-wide'>
              HASH 4 GAMERS
            </h1>
          </motion.div>

          {/* Bottom Box with Gradient Border */}
          <motion.div 
            className='relative mt-8'
            variants={bottomImageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Gradient Border Container */}
            <div>
              {/* Inner Content Box */}
              <div className=''>
                <Image src="/images/major-prblm.png" alt='prblm' width={560} height={560}/>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}

export default ProblemsSection;
