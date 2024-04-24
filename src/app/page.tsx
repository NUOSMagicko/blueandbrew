'use client';

import { useState } from 'react';

import IntroImg1 from '@/../public/assets/images/sections/home/intro/intro-1.jpeg';
import IntroImg2 from '@/../public/assets/images/sections/home/intro/intro-2.jpeg';
import IntroImg3 from '@/../public/assets/images/sections/home/intro/intro-3.jpeg';
import IntroImg4 from '@/../public/assets/images/sections/home/intro/intro-4.jpeg';
import IntroImg5 from '@/../public/assets/images/sections/home/intro/intro-5.jpeg';
import IntroImg6 from '@/../public/assets/images/sections/home/intro/intro-6.jpeg';
import IntroImg7 from '@/../public/assets/images/sections/home/intro/intro-7.jpeg';

import { cn } from '@/app/utils/cn';
import useLenixScroll from '@/app/hooks/useLenisScroll';
import useAnimationCreateStore from '@/app/state';
import { INTRO_ANIMATION_DURATION } from '@/constants/animation';

import Intro from '@/app/components/sections/home/Intro';
import Specials from '@/app/components/sections/home/Specials';
import OpeningHours from '@/app/components/sections/home/OpeningHours';
import Hero from '@/app/components/sections/home/Hero';
import Quote from '@/app/components/sections/home/Quote';
import Showcase from '@/app/components/sections/home/Showcase';

const introImages = [
  IntroImg1,
  IntroImg2,
  IntroImg3,
  IntroImg4,
  IntroImg5,
  IntroImg6,
  IntroImg7,
];

export default function Home() {
  useLenixScroll();
  const { isAnimationPlayed } = useAnimationCreateStore((state) => {
    return {
      isAnimationPlayed: state.isAnimationPlayed,
    };
  });

  const [isIntroPlaying, setIsIntroPlaying] = useState(true);

  setTimeout(
    () => {
      setIsIntroPlaying(false);
    },
    isAnimationPlayed ? 0 : (INTRO_ANIMATION_DURATION + 1.5) * 1000
  );

  return (
    <main
      className={cn('relative', {
        'h-screen overflow-hidden': isIntroPlaying,
      })}
    >
      {!isAnimationPlayed && <Intro sideImgsSrc={introImages} />}
      <Hero />
      <Quote />
      <Showcase />
      <Specials />
      <OpeningHours />
    </main>
  );
}
