'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import useAnimationCreateStore from '@/app/state';
import { cn } from '@/app/utils/cn';
import {
  EASING_CONSTANTS,
  INTRO_ANIMATION_DURATION,
} from '@/constants/animation';

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const { isAnimationPlayed, setIsAnimationPlayed } = useAnimationCreateStore(
    (state) => {
      return {
        isAnimationPlayed: state.isAnimationPlayed,
        setIsAnimationPlayed: state.setIsAnimationPlayed,
      };
    }
  );

  useEffect(() => {
    setTimeout(
      () => {
        setIsAnimationPlayed(true);
      },
      (INTRO_ANIMATION_DURATION + 1.5) * 1000
    );
  }, [setIsAnimationPlayed]);

  const introAnimationDuration =
    pathname === '/' && !isAnimationPlayed ? INTRO_ANIMATION_DURATION + 1.5 : 0;

  return (
    <div className='fixed right-0 top-0 z-50 overflow-hidden'>
      <motion.div
        className='text-sm backdrop-blur-sm'
        style={{ backgroundColor: 'rgba(7, 3, 12, 40%)' }}
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.5,
          delay: introAnimationDuration,
          easings: EASING_CONSTANTS['power3.inOut'],
        }}
      >
        <div className='flex-center'>
          <div
            className='flex-center cursor-pointer space-x-4 px-4 lg:px-8'
            onClick={() => router.push('/')}
          >
            <div className='h-8 w-8 rounded-full bg-primary-pink lg:h-10 lg:w-10'></div>
            <p>Blue Corner</p>
          </div>

          <Link
            href={'menu'}
            className={cn(
              'px-4 py-4 transition duration-300 ease-in-out hover:bg-primary-blue hover:text-primary-black lg:px-8 lg:py-6',
              { 'bg-primary-blue text-primary-black': pathname === '/menu' }
            )}
          >
            Menu
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
