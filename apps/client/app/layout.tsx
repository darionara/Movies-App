import type { Metadata } from 'next';
import './globals.css';
import { Open_Sans } from 'next/font/google';

import ReduxProvider from '@/store/ReduxProvider';

export const metadata: Metadata = {
  title: 'Movies App',
  description: 'The app with a list of best rated movies.',
};

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
