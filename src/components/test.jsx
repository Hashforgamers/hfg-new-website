import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <div className='w-screen h-screen bg-black'>
      <div className='flex justify-between py-[100px] px-[8vw]'>
        <button>
          <Image width={40} height={40} src='/component/sideButton.svg' alt="Side button" />
        </button>
        <button>
          <Image width={100} height={100} src='/component/button.svg' alt="Button" />
        </button>
      </div>
      
      {/* Main Content Text */}
      <div className='mt-[1vh] px-[19vw]'>
        <h1 className='text-4xl font-bold leading-tight'>
          <span className='text-[#16FF00]'>At Hash,</span>
        </h1>
        
        <p className='text-4xl font-bold leading-tight mt-8'>
          <span className='text-[#16FF00]'>booking your next </span>
          <span className='text-[#FFEB3B]'>gaming session </span>
          <span className='text-gray-400'>is as</span>
          <br />
          <span className='text-[#16FF00]'>smooth as a </span>
          <span className='text-[#FFEB3B]'>headshot flick. </span>
          <span className='text-gray-400'>Whether</span>
          <br />
          <span className='text-[#16FF00]'>you're </span>
          <span className='text-[#FFEB3B]'>grinding ranked</span>
          <span className='text-gray-400'>, </span>
          <span className='text-[#FFEB3B]'>partying </span>
          <span className='text-gray-400'>with</span>
          <br />
          <span className='text-[#16FF00]'>friends, </span>
          <span className='text-[#FFEB3B]'>or diving into a </span>
          <span className='text-gray-400'>new </span>
          <span className='text-[#FFEB3B]'>release</span>
          <span className='text-gray-400'>, </span>
          <span className='text-[#AA00FF]'>we've</span>
          <br />
          <span className='text-[#16FF00]'>got your </span>
          <span className='text-[#FFEB3B]'>setup ready. </span>
          <span className='text-gray-400'>PCs, </span>
          <span className='text-[#FFEB3B]'>consoles</span>
          <span className='text-gray-400'>, </span>
          <span className='text-[#AA00FF]'>VR</span>
          <span className='text-gray-400'>,</span>
          <br />
          <span className='text-[#16FF00]'>and </span>
          <span className='text-[#FFEB3B]'>snacks </span>
          <span className='text-[#16FF00]'>included.</span>
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
