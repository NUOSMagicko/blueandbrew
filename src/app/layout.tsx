import type { Metadata } from 'next';
import { Audiowide } from 'next/font/google';
import localFont from 'next/font/local';

import '@/app/globals.css';
import Nav from '@/app/components/molecules/Nav';
import Footer from '@/app/components/molecules/Footer';

const audioWide = Audiowide({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-audio-wide',
});

const aquire = localFont({
  src: './fonts/aquire-bold.otf',
  display: 'swap',
  variable: '--font-aquire',
});

export const metadata: Metadata = {
  title: 'Blue Corner',
  description: 'Blue Corner Restaurant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${audioWide.variable} ${aquire.variable} relative overflow-x-hidden`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
