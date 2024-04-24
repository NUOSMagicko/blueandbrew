'use client';

import { StaticImageData } from 'next/image';
import { useEffect } from 'react';
import { Easing, stagger, useAnimate, motion } from 'framer-motion';

import { cn } from '@/app/utils/cn';
import { EASING_CONSTANTS } from '@/constants/animation';

import ClientStaticBlur from '@/app/components/customs/images/static/client/Blur';

type IntroProps = {
  sideImgsSrc: StaticImageData[];
};

export default function Intro({ sideImgsSrc }: IntroProps) {
  return (
    <div className='absolute top-0 h-screen w-screen overflow-hidden'>
      <div className='relative'>
        <SideImages srcs={sideImgsSrc} />
      </div>
    </div>
  );
}

const SideImages = ({ srcs }: { srcs: StaticImageData[] }) => {
  type sideImagesData = {
    src: StaticImageData;
    alt: string;
    imgRenderWidth: number;
    imgRenderHeight: number;
    parentClassName: string;
    parentInitialTop: string;
    parentInitialLeft: string;
  };

  const sideImages: sideImagesData[] = [
    {
      src: srcs[0],
      alt: 'side-img-1',
      imgRenderWidth: 240,
      imgRenderHeight: 163,
      parentClassName: 'h-[10vh] w-[22vw] md:h-[20.6vh] md:w-[16.7vw]',
      parentInitialTop: '59.9vh',
      parentInitialLeft: '75.3vw',
    },
    {
      src: srcs[1],
      alt: 'side-img-2',
      imgRenderWidth: 180,
      imgRenderHeight: 270,
      parentClassName: 'h-[16vh] w-[20vw] md:h-[25.7vh] md:w-[12.5vw]',
      parentInitialTop: '43.2vh',
      parentInitialLeft: '26.3vw',
    },
    {
      src: srcs[2],
      alt: 'side-img-3',
      imgRenderWidth: 180,
      imgRenderHeight: 270,
      parentClassName: 'h-[16vh] w-[20vw] md:h-[25.7vh] md:w-[12.5vw]',
      parentInitialTop: '25.1vh',
      parentInitialLeft: '55.7vw',
    },
    {
      src: srcs[3],
      alt: 'side-img-4',
      imgRenderWidth: 240,
      imgRenderHeight: 123,
      parentClassName: 'h-[8vh] w-[22vw] md:h-[20.6vh] md:w-[16.7vw]',
      parentInitialTop: '16.4vh',
      parentInitialLeft: '76.3vw',
    },
    {
      src: srcs[4],
      alt: 'side-img-5',
      imgRenderWidth: 180,
      imgRenderHeight: 270,
      parentClassName: 'h-[18vh] w-[20vw] md:h-[25.7vh] md:w-[12.5vw]',
      parentInitialTop: '61.7vh',
      parentInitialLeft: '49vw',
    },
    {
      src: srcs[5],
      alt: 'side-img-6',
      imgRenderWidth: 180,
      imgRenderHeight: 320,
      parentClassName: 'h-[16vh] w-[20vw] md:h-[25.7vh] md:w-[12.5vw]',
      parentInitialTop: '20.1vh',
      parentInitialLeft: '11vw',
    },
    {
      src: srcs[6],
      alt: 'side-img-7',
      imgRenderWidth: 240,
      imgRenderHeight: 180,
      parentClassName: 'h-[20vh] w-[22vw] md:h-[20.6vh] md:w-[16.7vw]',
      parentInitialTop: '69.6vh',
      parentInitialLeft: '6.8vw',
    },
  ];

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const startAnimation = () => {
      animate(
        '.intro-img',
        { clipPath: 'inset(0)' },
        {
          ease: EASING_CONSTANTS['power3.inOut'] as Easing,
          duration: 1.5,
          delay: stagger(0.3),
        }
      );

      animate(
        '.intro-img-hold',
        { scale: 1 },
        {
          ease: EASING_CONSTANTS['power3.inOut'] as Easing,
          duration: 1.5,
          delay: stagger(0.3),
        }
      );
    };

    startAnimation();
  }, [animate]);

  return (
    <motion.div
      ref={scope}
      className='absolute flex h-screen w-full items-center justify-center overflow-hidden'
    >
      {sideImages.map((item, index) => (
        <motion.div
          key={index}
          className={cn('intro-img absolute', item.parentClassName)}
          style={{
            top: item.parentInitialTop,
            left: item.parentInitialLeft,
          }}
          initial={{ clipPath: 'inset(100%)' }}
        >
          <motion.div
            className='intro-img-hold h-full w-full'
            initial={{ scale: 1.8 }}
          >
            <ClientStaticBlur
              src={item.src}
              alt={item.alt}
              width={item.imgRenderWidth}
              height={item.imgRenderHeight}
              className='h-full w-full object-cover'
            />
          </motion.div>
        </motion.div>
      ))}
      <motion.div
        className='overlay absolute top-0 h-screen w-full bg-gray-700'
        initial={{ opacity: 0 }}
      ></motion.div>
    </motion.div>
  );
};
