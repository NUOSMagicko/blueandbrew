import ShowcaseImg1 from '@/../public/assets/images/sections/home/showcase/showcase-1.png';
import ShowcaseImg2 from '@/../public/assets/images/sections/home/showcase/showcase-2.png';
import ShowcaseImg3 from '@/../public/assets/images/sections/home/showcase/showcase-3.png';
import ShowcaseImg4 from '@/../public/assets/images/sections/home/hero/hero-2.png';

import ClientStaticBlur from '@/app/components/customs/images/static/client/Blur';
import ImageWithBorder from '@/app/components/customs/images/ImageWithBorder';

export default function Showcase() {
  return (
    <div className='mt-20 flex h-full w-full grid-cols-1 flex-col-reverse md:mt-40 md:grid md:grid-cols-6 md:items-end md:pl-4 lg:pl-4 xl:mt-56 xl:pl-12'>
      <div className='col-span-2 flex items-center'>
        <div className='grid grid-cols-2 md:hidden'>
          <ClientStaticBlur
            src={ShowcaseImg1}
            alt={'showcase-img-1'}
            width={960}
            height={640}
            className='h-[16rem] w-full object-cover'
          />
          <ClientStaticBlur
            src={ShowcaseImg2}
            alt={'showcase-img-2'}
            width={960}
            height={640}
            className='h-[16rem] w-full object-cover'
          />
          <ClientStaticBlur
            src={ShowcaseImg3}
            alt={'showcase-img-3'}
            width={960}
            height={640}
            className='h-[16rem] w-full object-cover'
          />
          <ClientStaticBlur
            src={ShowcaseImg4}
            alt={'showcase-img-4'}
            width={960}
            height={640}
            className='h-[16rem] w-full object-cover'
          />
        </div>
        <div className='hidden w-full items-center px-4 md:flex md:px-0'>
          <ImageWithBorder
            src={ShowcaseImg1}
            alt={'showcase-img-1'}
            className='h-[30rem] w-full md:h-[22rem] lg:h-[30rem] xl:h-[45rem]'
          />
        </div>
      </div>
      <div className='col-span-4 flex-col'>
        <div className='w-full border-b-primary-blue p-4 md:border-b-2 lg:p-8 xl:px-20 xl:py-12'>
          <h2>Restaurant Showcase</h2>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            nihil eveniet molestiae est deleniti reiciendis ea doloremque sit?
          </p>
        </div>
        <div className='hidden items-end justify-end gap-4 p-4 pb-0 md:flex lg:gap-8 xl:px-12 xl:pt-12'>
          <ClientStaticBlur
            src={ShowcaseImg2}
            alt={'showcase-img-2'}
            width={960}
            height={640}
            className='w-auto object-cover md:h-[7rem] md:w-[7rem] lg:h-[10rem] lg:w-[10rem] xl:h-[20rem] xl:w-[20rem]'
          />
          <ClientStaticBlur
            src={ShowcaseImg3}
            alt={'showcase-img-3'}
            width={960}
            height={640}
            className='w-auto object-cover md:h-[12rem] lg:h-[18rem] xl:h-[30rem] xl:w-[25rem]'
          />
        </div>
      </div>
    </div>
  );
}
