import Image, { ImageProps } from 'next/image';

type ClientStaticBlurProps = {
  width?: number | `${number}`;
  height?: number | `${number}`;
} & ImageProps;

export default function ClientStaticBlur({
  src,
  alt,
  width,
  height,
  priority = true,
  ...rest
}: ClientStaticBlurProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder='blur'
      priority={!!priority}
      className='mx-auto'
      {...rest}
    />
  );
}
