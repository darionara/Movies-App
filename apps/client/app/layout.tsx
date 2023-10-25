'use client'
import type { Metadata } from 'next'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import { Provider } from 'react-redux'
import store from '../store/store'

/* export const metadata: Metadata = {
  title: 'Movies App',
  description: 'The app with a list of best rated movies.',
} */

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={open_sans.variable}>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
