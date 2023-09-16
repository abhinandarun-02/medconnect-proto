import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { SideBar } from '@/components/SideBar'

import { Separator } from '@/components/ui/separator'
import NavBar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MedConnect',
  description: 'Your second opinion on diseases',
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
