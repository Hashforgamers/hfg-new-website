'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!userInteracted && audioRef.current) {
        setUserInteracted(true);
        // Try to play audio after first user interaction
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log('Autoplay blocked:', error);
          });
      }
    };

    // Listen for first user interaction
    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('keydown', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [userInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.log('Play failed:', error));
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/audio/metallica.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Button - Fixed Position */}
      <div className='fixed bottom-6 right-6 z-50 flex gap-2'>
        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className='bg-gray-900/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-green-500 transition-all duration-300 shadow-lg'
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className='bg-gray-900/80 backdrop-blur-sm text-white px-4 py-3 rounded-full hover:bg-green-500 transition-all duration-300 shadow-lg text-sm font-medium'
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </>
  );
};

export default BackgroundMusic;
