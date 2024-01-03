import type { Metadata } from 'next'
import { roboto } from '@/app/ui/fonts';
import Header from './ui/header'
import Footer from './ui/footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
   template: '%s | Rob Franceschini',
   default: 'Rob Franceschini Portfolio'
  },
  description: 'Some examples of work, using Next.js, React, TypeScript, and Tailwind',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-indigo-600 text-white`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
