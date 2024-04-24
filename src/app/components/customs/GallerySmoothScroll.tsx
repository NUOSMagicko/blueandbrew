'use client';

import { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { EASING_CONSTANTS } from '@/constants/animation';
import { cn } from '@/app/utils/cn';
import useDimension from '@/app/hooks/useDimension';

import ClientStaticBlur from '@/app/components/customs/images/static/client/Blur';
import ImageWithBorder from '@/app/components/customs/images/ImageWithBorder';

type GallerySmoothScrollProps = {
  images: StaticImageData[];
};

export default function GallerySmoothScroll({
  images,
}: GallerySmoothScrollProps) {
  const { width: clientWidth, height: clientHeight } = useDimension();

  const [parentHeight, setParentHeight] = useState<number>(0);

  useEffect(() => {
    const baseHeight = () => {
      if (clientWidth >= 768 && clientWidth < 1024) return 50;
      else if (clientWidth >= 1024 && clientWidth < 1440) return 73;
      else if (clientWidth >= 1440) return 80;
      else return 50;
    };

    setParentHeight(
      baseHeight() * (images.length / 2) +
        ((images.length / 2) * 5 + 10) +
        (images.length % 2 === 1 ? 22 : 0)
    );
  }, [clientHeight, clientWidth, images.length]);

  const top = (index: number) => {
    const gapDifference = () => {
      if (clientWidth >= 768 && clientWidth < 1024) return 55;
      else if (clientWidth >= 1024 && clientWidth < 1440) return 75;
      else if (clientWidth >= 1440) return 85;
      else return 55;
    };

    switch (index % 2) {
      case 0:
        return `${gapDifference() * Math.floor(index / 2)}vh`;
      case 1:
        return `${gapDifference() * Math.floor(index / 2) + 30}vh`;
      default:
        return '0';
    }
  };

  const left = (index: number) => {
    switch (index % 2) {
      case 0:
        return '0';
      case 1:
        return '50%';
      default:
        return '0';
    }
  };

  const imagesTopLeftCalculation = images.map((item, index) => ({
    key: index + 1,
    src: item,
    alt: `img-${index + 1}`,
    top: top(index),
    left: left(index),
  }));

  return (
    <>
      <div
        className='relative hidden lg:block'
        style={{ height: `${parentHeight}vh` }}
      >
        {imagesTopLeftCalculation.map((item) => (
          <GalleryImage key={item.key} imgItem={item} />
        ))}
      </div>

      <div className='grid grid-cols-2 gap-x-2 gap-y-4 py-4 md:grid-cols-3 lg:hidden'>
        {imagesTopLeftCalculation.map((item) => (
          <div key={item.key} className='h-full w-full'>
            <ClientStaticBlur
              src={item.src}
              alt={item.alt}
              width={480}
              height={640}
              className='h-[25vh] object-cover'
            />
          </div>
        ))}
      </div>
    </>
  );
}

type GalleryImageProps = {
  imgItem: {
    key: number;
    src: StaticImageData;
    alt: string;
    top: string;
    left: string;
  };
};

function GalleryImage({ imgItem }: GalleryImageProps) {
  const { width: clientWidth } = useDimension();

  const scrollImage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollImage,
    offset: ['end end', 'start start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, clientWidth >= 1440 ? 120 : 60]
  );

  return (
    <motion.div
      ref={scrollImage}
      className='gallery-img absolute flex h-[30vh] w-[50%] items-center justify-center lg:h-[45vh] xl:h-[55vh]'
      style={{ y, top: imgItem.top, left: imgItem.left }}
      transition={{ ease: EASING_CONSTANTS['expo.in'], duration: 1 }}
    >
      <div
        className={cn('absolute h-full w-full px-2 xl:px-8', {
          'flex justify-end': imgItem.key % 2 === 0,
        })}
      >
        <ImageWithBorder src={imgItem.src} alt={imgItem.alt} />
      </div>
    </motion.div>
  );
}
