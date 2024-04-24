import { StaticImageData } from 'next/image';
import ClientStaticBlur from './static/client/Blur';
import { PropsWithChildren } from 'react';
import { cn } from '@/app/utils/cn';

type ImageWithBorderProps = PropsWithChildren<{
  src: StaticImageData;
  alt: string;
  isFullImg?: boolean;
  className?: string;
}>;

export default function ImageWithBorder({
  src,
  alt,
  isFullImg = false,
  className,
  children,
}: ImageWithBorderProps) {
  const borerClipPathValue = 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)';
  const imgClipPathValue = isFullImg
    ? 'polygon(0 0, 85% 0%, 100% 14%, 100% 100%, 14% 100%, 0 85%)'
    : !!children
      ? 'polygon(0 0, 85% 0%, 100% 18%, 100% 100%, 18% 100%, 0 85%)'
      : 'polygon(0 0, 85% 0%, 100% 16.5%, 100% 100%, 16.5% 100%, 0 85%)';

  return (
    <div
      className={cn(
        'relative flex h-[415px] w-[325px] items-center justify-center',
        className
      )}
    >
      {/* visual border */}
      <div
        className='absolute h-full w-full bg-primary-blue'
        style={{
          clipPath: borerClipPathValue,
        }}
      ></div>

      {/* content */}
      <div
        className='relative h-[99%] w-[99%] bg-primary-black'
        style={{
          clipPath: borerClipPathValue,
        }}
      >
        <div
          className='absolute h-full w-full space-y-4 p-4'
          style={{
            clipPath: borerClipPathValue,
            background: 'rgba(248, 244,236, 0.1)',
          }}
        >
          <div className='relative h-full w-full'>
            <ClientStaticBlur
              src={src}
              alt={alt}
              className={cn('h-[85%] w-full object-cover', {
                'h-[80%]': !!children,
                'h-[100%]': isFullImg,
              })}
              style={{
                clipPath: imgClipPathValue,
              }}
            />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
