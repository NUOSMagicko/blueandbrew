import Image, { ImageProps } from 'next/image';
import { getBase64Static } from '@/app/utils/getLocalBase64';

type StaticBlurProps = {
  src: string;
  width: number | `${number}`;
  height: number | `${number}`;
} & ImageProps;

export default async function StaticBlur({
  src,
  alt,
  width,
  height,
  priority = true,
  ...rest
}: StaticBlurProps) {
  const blurDataURL = await getBase64Static(src, 'base64');

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder='blur'
      blurDataURL={blurDataURL}
      priority={!!priority}
      className='mx-auto'
      {...rest}
    />
  );
}
