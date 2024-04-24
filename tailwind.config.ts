import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-audio-wide)'],
        aquire: ['var(--font-aquire)'],
      },
      colors: {
        inherit: 'inherit',
        current: 'currentColor',
        transparent: 'transparent',
        primary: {
          pink: {
            DEFAULT: 'var(--primary-pink)',
            light: 'var(--primary-pink-light)',
          },
          blue: 'var(--primary-blue)',
          yellow: 'var(--primary-yellow)',
          white: 'var(--primary-white)',
          black: 'var(--primary-black)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
