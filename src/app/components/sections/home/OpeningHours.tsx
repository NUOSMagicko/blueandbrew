import OpeningHourImg1 from '@/../public/assets/images/sections/home/opening-hour/opening-hour-1.png';
import OpeningHourImg2 from '@/../public/assets/images/sections/home/opening-hour/opening-hour-2.png';

import RadialGradientCircle from '@/app/components/customs/RadialGradientCircle';
import ClientStaticBlur from '@/app/components/customs/images/static/client/Blur';

export default function OpeningHour() {
  return (
    <div className='relative flex flex-col-reverse items-center gap-6 overflow-x-hidden px-4 py-10 md:flex-row lg:px-0 lg:py-20 xl:py-40'>
      <RadialGradientCircle
        color='yellow'
        className='absolute -right-[650px] -top-64 h-[1000px] w-[1000px] md:top-0'
      />

      <div className='flex items-center'>
        <div className='flex-center relative xl:w-[80%]'>
          <ClientStaticBlur
            src={OpeningHourImg1}
            alt={'opening-hours-img'}
            width={960}
            height={640}
            className='h-auto w-full object-cover'
          />
          <div className='flex-center absolute h-full w-full flex-col py-6 backdrop-blur-md lg:-right-20 lg:h-fit lg:w-fit lg:backdrop-blur-none xl:-right-40'>
            <div className='relative'>
              <ClientStaticBlur
                src={OpeningHourImg2}
                alt={'opening-hours-img'}
                width={960}
                height={640}
                className='h-[300px] w-auto object-cover xl:h-[400px]'
              />
              <div className='absolute -left-6 -top-6 hidden h-full w-full border-2 border-primary-blue lg:block'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full lg:ml-20 lg:w-[70%] xl:w-[60%]'>
        <h2 className='mt-2'>Monday - Friday</h2>
        <p className='mt-2 uppercase'>(9:30 AM - 10:00 PM)</p>

        <p className='mt-10'>{`Let today be a celebration of connection, laughter, and cherished
        memories. Welcome, everyone, let's make this gathering unforgettable!`}</p>
      </div>
    </div>
  );
}
