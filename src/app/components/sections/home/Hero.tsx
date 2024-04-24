import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion, easeInOut, useAnimate } from 'framer-motion';

import HeroImg1 from '@/../public/assets/images/sections/home/hero/hero-1.png';
import HeroImg2 from '@/../public/assets/images/sections/home/hero/hero-2.png';

import useAnimationCreateStore from '@/app/state';
import { INTRO_ANIMATION_DURATION } from '@/constants/animation';

import ClientStaticBlur from '@/app/components/customs/images/static/client/Blur';
import ImageWithBorder from '@/app/components/customs/images/ImageWithBorder';
import Button from '@/app/components/base/Button';

const clipPathValue =
  'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%);';

export default function Hero() {
  const router = useRouter();

  const [scope, animate] = useAnimate();

  const { isAnimationPlayed } = useAnimationCreateStore((state) => {
    return {
      isAnimationPlayed: state.isAnimationPlayed,
    };
  });

  const introAnimationDuration = !isAnimationPlayed
    ? INTRO_ANIMATION_DURATION
    : 0;

  useEffect(() => {
    animate(
      scope.current,
      { y: 0 },
      {
        ease: easeInOut,
        duration: 1.2,
        delay: introAnimationDuration,
      }
    );
  }, [animate, introAnimationDuration, scope]);

  return (
    <motion.div
      ref={scope}
      className='grid h-full w-full grid-cols-1 space-y-4 bg-primary-black px-4 py-20 pr-4 md:h-screen md:grid-cols-6 md:space-y-0 md:py-0 md:pl-0'
      initial={{
        y: '100vh',
      }}
    >
      <div className='flex-center col-span-4 flex-col'>
        <div className='w-full border-b-primary-blue px-0 py-4 md:border-b-2 md:px-12 lg:py-24 xl:p-20'>
          <h1>Blue Corner</h1>
        </div>
        <div className='grid gap-8 px-0 py-4 md:px-12 lg:grid-cols-5 lg:gap-20 lg:py-20 xl:p-20'>
          <div className='col-span-2'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              mollitia veniam, quas eius odio quam.
            </p>
            <div className='mt-8 w-56'>
              <Button label='View Menu' onClick={() => router.push('menu')} />
            </div>
          </div>
          <div className='relative col-span-3 w-full xl:w-[90%]'>
            <ClientStaticBlur
              src={HeroImg1}
              alt={'hero-img-1'}
              width={960}
              height={640}
              className='h-auto w-full object-cover'
              style={{ clipPath: clipPathValue }}
            />
            <div
              className='absolute -left-6 -top-6 hidden h-full w-full border-2 border-primary-blue lg:block'
              style={{ clipPath: clipPathValue }}
            ></div>
          </div>
        </div>
      </div>
      <div className='col-span-2 flex items-center'>
        <div className='flex w-full items-center md:-mt-40 lg:-mt-20 xl:-mt-40'>
          <ImageWithBorder
            src={HeroImg2}
            alt={'hero-img-2'}
            className='w-full md:h-[320px] lg:h-[400px] xl:h-[500px] xl:w-[400px]'
          />
        </div>
      </div>
    </motion.div>
  );
}
