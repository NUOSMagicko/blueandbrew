'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/app/utils/cn';
import { INTRO_ANIMATION_DURATION } from '@/constants/animation';

export default function Footer() {
  const pathname = usePathname();

  const [isIntroPlaying, setIsIntroPlaying] = useState(true);

  setTimeout(
    () => {
      setIsIntroPlaying(false);
    },
    (INTRO_ANIMATION_DURATION + 1.5) * 1000
  );

  return (
    <div
      className={cn(
        'relative grid grid-cols-1 space-y-14 bg-[#f8f4ec]/10 px-4 py-4 backdrop-blur-sm md:grid-cols-2 md:space-y-0 xl:px-16 xl:py-10',
        { hidden: isIntroPlaying && pathname === '/' }
      )}
    >
      <div className='lg:w-[80%]'>
        <h2 className='text-lg lg:text-2xl'>
          Brew <span>&</span> Blue
        </h2>
        <p className='mt-6'>
          Lake Ratchada ฝั่ง, อาคาร เลครัชดา ชั้น 1, Soi Sukhumvit 16, Khlong
          Toei, Bangkok 10110
        </p>
        <p className='mt-2'>02 264 0917</p>
      </div>

      <div className='flex flex-col md:items-end'>
        <div className='flex items-center space-x-2'>
          {[...new Array(5)].map((_, index) => (
            <div
              key={index}
              className='h-10 w-10 rounded-full bg-slate-300 lg:h-12 lg:w-12'
            ></div>
          ))}
        </div>
        <p className='mt-6 text-left md:text-right'>
          @2024 Copyright Brew & Blue. All rights reserved
        </p>
      </div>
    </div>
  );
}
