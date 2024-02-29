import type { Metadata } from 'next';
import './globals.css';
import { Open_Sans } from 'next/font/google';

import ReduxProvider from '@/store/ReduxProvider';
import QueryProvider from '@/app/providers';

export const metadata: Metadata = {
  title: 'Movies App',
  description: 'The app with a list of best rated movies.',
};

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <QueryProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
