'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Roboto } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import {
  CalendarDays,
  CreditCard,
  HeartPulse,
  Home,
  MessageSquare,
  Settings,
} from 'lucide-react'

const inter = Roboto({ weight: '500', subsets: ['latin'] })

const routes = [
  {
    label: 'Home',
    icon: Home,
    href: '/',
    disabled: false,
  },
  {
    label: 'Doctors',
    icon: HeartPulse,
    href: '/doctors',
    disabled: true,
  },
  {
    label: 'Appointments',
    icon: CalendarDays,
    href: '/appointments',
    disabled: true,
  },
  {
    label: 'Messages',
    icon: MessageSquare,
    href: '/chat',
    disabled: true,
  },
  {
    label: 'Payments',
    icon: CreditCard,
    href: '/payments',
    disabled: true,
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    disabled: true,
  },
]

export const SideNav = () => {
  const pathname = usePathname()

  return (
    <div className="links mt-16 mx-4 flex flex-col gap-2 items-center">
      {routes.map((route) => (
        <Button
          key={route.href}
          variant={'ghost'}
          disabled
          className="w-full justify-start"
          asChild
        >
          <Link
            href={route.href}
            className={cn(
              'h-10 w-full p-3 mx-4 flex justify-start items-center cursor-pointer rounded-lg text-sm font-medium hover:bg-background',
              pathname === route.href
                ? 'text-blue-500 bg-background'
                : 'text-zinc-500',
              inter.className
            )}
          >
            <div className="flex ">
              <route.icon
                className={cn(
                  'h-5 w-5 mr-3',
                  pathname === route.href ? 'text-blue-500' : 'text-zinc-500'
                )}
              />
              {route.label}
            </div>
          </Link>
        </Button>
      ))}
    </div>
  )
}
