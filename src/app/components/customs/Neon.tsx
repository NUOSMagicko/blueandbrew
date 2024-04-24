import { PropsWithChildren } from 'react';

type NeonProps = PropsWithChildren<{}>;

export default function Neon({ children }: NeonProps) {
  return (
    <div className='flex-center relative'>
      <div className='absolute'>{children}</div>
      <div className='absolute blur-sm'>{children}</div>
      <div className='absolute blur-md'>{children}</div>
      <div className='absolute blur-lg'>{children}</div>
    </div>
  );
}
