import type { Metadata } from 'next'
import './globals.css'
 
export const metadata: Metadata = {
  title: 'Movies App',
  description: 'The app with a list of best rated movies.',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
