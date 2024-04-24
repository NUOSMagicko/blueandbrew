import fs from 'node:fs/promises';
import { getPlaiceholder } from 'plaiceholder';

export async function getBase64Dynamic(
  imageUrl: string,
  blurType: 'base64' | 'color'
) {
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }
    const buffer = await res.arrayBuffer();
    const { base64, color } = await getPlaiceholder(Buffer.from(buffer));

    if (blurType === 'base64') return base64;
    else if (blurType === 'color') return color.hex;

    throw new Error('Invalid blurType provided');
  } catch (err) {
    if (err instanceof Error) throw new Error('Failed to process image', err);
  }
}

export async function getBase64Static(
  imageUrl: string,
  blurType: 'base64' | 'color'
) {
  try {
    const file = await fs.readFile(`./public${imageUrl}`);
    const { base64, color } = await getPlaiceholder(file);

    if (blurType === 'base64') return base64;
    else if (blurType === 'color') return color.hex;

    throw new Error('Invalid blurType provided');
  } catch (err) {
    if (err instanceof Error) throw new Error('Failed to process image', err);
  }
}
