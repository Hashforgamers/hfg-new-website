'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';

const HashShop = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className='relative w-full min-h-screen overflow-hidden bg-black'>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
      >
        <source src='/videos/joystick.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/40 z-10'></div>

      {/* Top Right Button - Responsive positioning */}
      <div className='absolute top-4 right-4 sm:top-8 sm:right-8 md:top-12 md:right-12 lg:top-16 lg:right-16 z-30'>
        <Link href='https://play.google.com/store/apps/details?id=com.hfg.hash'>
          <div className='relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 hover:scale-110 transition-transform duration-300'>
            <Image 
              src='/component/button.svg' 
              alt='Download app button' 
              fill
              className='object-contain'
            />
          </div>
        </Link>
      </div>

      {/* Content Container */}
      <div className='relative z-20 min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-8 md:py-12 lg:py-16'>
        
        {/* Left Side - Text Content */}
        <div className='flex flex-col gap-4 sm:gap-6 md:gap-8 max-w-xl w-full lg:w-auto mb-8 lg:mb-0'>
          {/* Heading */}
          <div className='relative w-40 h-20 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-64 lg:h-32'>
            <Image 
              src='/images/HashShop.png' 
              alt='Hash Shop logo' 
              fill
              className='object-contain object-left'
            />
          </div>
          
          {/* Description Text */}
          <div className='relative w-40 h-20 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-64 lg:h-32'>
            <Image 
              src='/images/bookingText.png' 
              alt='Booking description' 
              fill
              className='object-contain object-left'
            />
          </div>

          {/* Shop Now Button */}
          <Link href='/shop'>
            <div className='relative w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-18 hover:scale-105 transition-transform duration-300 cursor-pointer'>
              <Image 
                src='/images/shopnow.svg' 
                alt='Shop now button' 
                fill
                className='object-contain object-left'
              />
            </div>
          </Link>
        </div>

        {/* Right Side - Product Images (Energy Drinks) */}
        <div className='flex flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-end justify-center lg:justify-end w-full lg:w-auto'>
          {/* First Drink (Orange Monster) */}
          <div className='relative w-24 h-48 sm:w-32 sm:h-64 md:w-40 md:h-80 lg:w-48 lg:h-96 xl:w-56 xl:h-[28rem] hover:scale-105 transition-transform duration-300'>
            <Image 
              src='/images/hash-monster-orange.png' 
              alt='Hash Monster Orange Energy Drink'
              fill
              className='object-contain drop-shadow-2xl'
            />
          </div>

          {/* Second Drink (Green X-Slash) - Center/Tallest */}
          <div className='relative w-24 h-48 sm:w-32 sm:h-64 md:w-40 md:h-80 lg:w-48 lg:h-96 xl:w-56 xl:h-[28rem] hover:scale-105 transition-transform duration-300'>
            <Image 
              src='/images/hash-x-green.png' 
              alt='Hash X Green Energy Drink'
              fill
              className='object-contain drop-shadow-2xl'
            />
          </div>

          {/* Third Drink (Orange Monster) */}
          <div className='relative w-24 h-48 sm:w-32 sm:h-64 md:w-40 md:h-80 lg:w-48 lg:h-96 xl:w-56 xl:h-[28rem] hover:scale-105 transition-transform duration-300'>
            <Image 
              src='/images/hash-monster-orange.png' 
              alt='Hash Monster Orange Energy Drink'
              fill
              className='object-contain drop-shadow-2xl'
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default HashShop;
