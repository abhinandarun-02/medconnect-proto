import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { SideBar } from '@/components/SideBar'

import { Separator } from '@/components/ui/separator'
import NavBar from '@/components/navbar'

import localFont from '@next/font/local'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const sfui = localFont({
  src: [
    {
      path: '../../public/fonts/sfui/SFUIText-Light.woff2',
      weight: '300',
    },
    {
      path: '../../public/fonts/sfui/SFUIText-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/sfui/SFUIText-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/sfui/SFUIText-Semibold.woff2',
      weight: '600',
    },
    {
      path: '../../public/fonts/sfui/SFUIText-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-sfui',
})

export const metadata: Metadata = {
  title: 'MedConnect',
  description: 'Your second opinion on diseases',
  openGraph: {
    title: 'MedConnect: Health Genius',
    description: 'Your second opinion on health',
    url: 'https://medconnect-proto.vercel.app/',
    siteName: 'MedConnect',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://medconnect-proto.vercel.app/og.jpg',
        width: 1200,
        height: 630,
        alt: 'MedConnect',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {' '}
        <main className="flex">
          <div className="sidebar hidden md:flex flex-col bg-foreground w-[300px] h-screen">
            <h1 className={sfui.className}>SF UI FONT</h1>
            <SideBar />
          </div>
          <div className="w-full">
            <NavBar />
            <Separator decorative className=" h-[1px]" />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
