import Image from 'next/image';
import React from 'react';

const IndiaGamingSection = () => {
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center p-[4vh] lg:py-[5vh]'>
      {/* Container with padding around image */}
      <div className='relative w-full h-full rounded-3xl overflow-hidden'>
        
        {/* Background Image */}
        <Image 
          src='/images/retro-car.png' 
          alt='Retro car sunset background'
          fill
          className='object-cover'
          priority
        />

        {/* Content Overlay */}
        <div className='absolute inset-0 flex flex-col items-start justify-between p-[5vw] md:p-[6vw] lg:p-[8vw]'>
          
          {/* Top Section - Heading Text */}
          <div className='flex flex-col gap-2 max-w-3xl'>
            <h1 className='text-white text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-medium leading-tight lg:mt-[10vh]'>
              Be part of India's gaming movement.
            </h1>
            <h2 className='text-white text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-medium'>
              Play. Earn. Compete.
            </h2>
          </div>
          <div className='lg:mb-[-10vh]'>
            <button className='lg:my-[10vh]'>
            <Image src="/images/download2.png" width={200} height={220}/>
           </button>
          </div>

         <div className='flex justify-center w-full h-full'>
          <div className='flex justify-center mb-[-20vh] lg:mt-[24vh]'>
             <Image src="/images/slogan.svg" width={200} height={180}/>
          </div>

         </div>

        </div>

      </div>
    </div>
  );
}

export default IndiaGamingSection;
