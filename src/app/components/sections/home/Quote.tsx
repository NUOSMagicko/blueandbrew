import QuoteImg1 from '@/../public/assets/images/sections/home/quote/quote-1.png';
import QuoteImg2 from '@/../public/assets/images/sections/home/quote/quote-2.png';

import ClientStaticBlur from '@/app/components/customs/images/static/client/Blur';

export default function Quote() {
  return (
    <div className='flex grid-cols-7 flex-col-reverse gap-4 overflow-x-hidden px-4 md:grid md:px-10 lg:px-20'>
      <div className='col-span-7 my-12 flex justify-center gap-4 md:col-span-4 md:justify-end'>
        <div className='relative h-[13rem] lg:h-[15rem] xl:h-[25rem]'>
          <ClientStaticBlur
            src={QuoteImg1}
            alt={'quote-img-1'}
            width={960}
            height={640}
            className='h-full w-auto rounded-t-full object-cover'
          />
          <div className='absolute -left-6 -top-6 h-full w-full rounded rounded-t-full border-2 border-primary-blue'></div>
        </div>
        <div className='relative mt-32 h-[13rem] lg:mt-48 lg:h-[15rem] xl:h-[25rem]'>
          <ClientStaticBlur
            src={QuoteImg2}
            alt={'quote-img-2'}
            width={960}
            height={640}
            className='h-full w-auto rounded-b-full object-cover'
          />
          <div className='absolute left-6 top-6 h-full w-full rounded rounded-b-full border-2 border-primary-blue'></div>
        </div>
      </div>
      <div className='md:flex-center col-span-7 pt-0 md:col-span-3'>
        <div className='md:-rotate-90 md:pl-12 lg:pb-20'>
          <p className='mb-8 text-lg uppercase xl:text-xl'>We are</p>
          <h1 className='block text-primary-blue'>Delightful</h1>
          <h1 className='block text-primary-pink'>Elegant</h1>
        </div>
      </div>
    </div>
  );
}
