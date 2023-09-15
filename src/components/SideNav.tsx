'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Roboto } from 'next/font/google'

import { cn } from '@/lib/utils'
import {
  CalendarDays,
  CreditCard,
  Home,
  MessageSquare,
  Settings,
  Stethoscope,
} from 'lucide-react'

const inter = Roboto({ weight: '500', subsets: ['latin'] })

const routes = [
  {
    label: 'Home',
    icon: Home,
    href: '/',
    color: 'text-sky-500',
  },
  {
    label: 'Doctors',
    icon: Stethoscope,
    href: '/doctors',
    color: 'text-sky-500',
  },
  {
    label: 'Appointments',
    icon: CalendarDays,
    href: '/appointments',
    color: 'text-sky-500',
  },
  {
    label: 'Messages',
    icon: MessageSquare,
    href: '/chat',
    color: 'text-sky-500',
  },
  {
    label: 'Payments',
    icon: CreditCard,
    href: '/payments',
    color: 'text-sky-500',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-sky-500',
  },
]

export const SideNav = () => {
  const pathname = usePathname()

  return (
    <div className="links mt-16 mx-4 flex flex-col gap-2 items-center">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'h-10 w-full p-3 mx-4 flex justify-start items-center cursor-pointer rounded-lg text-sm font-medium hover:bg-background',
            pathname === route.href
              ? 'text-blue-500 bg-background'
              : 'text-zinc-500',
            inter.className
          )}
        >
          <div className="flex">
            <route.icon
              className={cn(
                'h-5 w-5 mr-3',
                pathname === route.href ? 'text-blue-500' : 'text-zinc-500'
              )}
            />
            {route.label}
          </div>
        </Link>
      ))}
    </div>
  )
}
