'use client';

import { useRouter } from 'next/navigation';
import IntroImg1 from '@/../public/assets/images/sections/home/intro/intro-1.jpeg';
import IntroImg2 from '@/../public/assets/images/sections/home/intro/intro-2.jpeg';
import IntroImg3 from '@/../public/assets/images/sections/home/intro/intro-3.jpeg';
import IntroImg4 from '@/../public/assets/images/sections/home/intro/intro-4.jpeg';
import IntroImg5 from '@/../public/assets/images/sections/home/intro/intro-5.jpeg';
import IntroImg6 from '@/../public/assets/images/sections/home/intro/intro-6.jpeg';
import IntroImg7 from '@/../public/assets/images/sections/home/intro/intro-7.jpeg';

import Button from '@/app/components/base/Button';
import GallerySmoothScroll from '@/app/components/customs/GallerySmoothScroll';
import RadialGradientCircle from '@/app/components/customs/RadialGradientCircle';

const specialsImages = [
  IntroImg1,
  IntroImg2,
  IntroImg3,
  IntroImg4,
  IntroImg5,
  IntroImg6,
  IntroImg7,
  IntroImg1,
];

export default function Specials() {
  const router = useRouter();

  return (
    <div className='relative h-full w-full py-10 md:py-20 lg:pb-20 lg:pt-40'>
      <div className='top-[40%] z-20 mb-10 w-full lg:sticky lg:mb-40'>
        <div className='flex-center flex-col'>
          <h2 className='text-center'>Our Specials</h2>
          <p className='mt-4 w-full text-center md:w-[50vw] lg:w-[30vw]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusantium rem et sequi.
          </p>
          <div className='mt-8'>
            <Button label='View Menu' onClick={() => router.push('menu')} />
          </div>
        </div>
      </div>
      <div className='relative w-full overflow-x-hidden px-4 xl:px-64'>
        <>
          <RadialGradientCircle
            color='blue'
            className='absolute -left-[620px] top-0 -z-10 h-[1000px] w-[1000px]'
          />

          <RadialGradientCircle
            color='pink'
            className='absolute -right-[620px] top-[100vh] h-[1000px] w-[1000px]'
          />

          <RadialGradientCircle
            color='yellow'
            className='absolute -left-[620px] top-[200vh] h-[1000px] w-[1000px]'
          />
        </>
        <GallerySmoothScroll images={specialsImages} />
      </div>
    </div>
  );
}
