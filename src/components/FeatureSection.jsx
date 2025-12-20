import Image from 'next/image';
import React from 'react';

const FeaturesSection = () => {
  return (
    <div className='w-screen h-screen bg-black overflow-hidden'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-between px-[3vw] py-[4vh] gap-6'>
        
        {/* Left Column - Mobile Screenshots (Side by Side) */}
        <div className='flex flex-row gap-4 justify-center items-center lg:justify-start'>
          <div className='relative w-[180px] md:w-[220px] lg:w-[320px] aspect-[9/19.5]'>
            <Image 
              src='/images/HomeScreen.svg' 
              alt='Mobile Screen 1'
              fill
              className='object-contain'
            />
          </div>
          <div className='relative w-[180px] md:w-[220px] lg:w-[320px] aspect-[9/19.5]'>
            <Image 
              src='/images/CafeDetails.svg' 
              alt='Mobile Screen 2'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* Middle Column - Text Content */}
        <div className='flex flex-col justify-center items-start gap-12 lg:gap-16 px-4'>
          {/* First Text Block - Yellow */}
         

          {/* Second Text Block - Pink */}
         

          {/* Third Text Block - Pink */}
          <div>
            <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight'>
              
            </p>
          </div>
        </div>

        {/* Right Column - Character Image */}
        <div className='flex justify-center items-end h-full'>
          <div className='relative w-[280px] md:w-[350px] lg:w-[400px] h-[400px] md:h-[500px] lg:h-[500px]'>
            <Image 
              src='/images/gaming-character.svg' 
              alt='Gaming Character'
              fill
              className='object-contain object-bottom'
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default FeaturesSection;
