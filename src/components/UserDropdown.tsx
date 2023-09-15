import Link from 'next/link'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { ChevronDown, Option, Settings, User } from 'lucide-react'

const options = [
  { label: 'Profile', href: '/profile', disabled: true, icon: User },
  { label: 'Preferences', href: '/preferences', disabled: true, icon: Option },
  { label: 'Settings', href: '/settings', disabled: false, icon: Settings },
]

export function UserMenu() {
  return (
    <div className="absolute -right-1">
      <Menubar className="border-0 focus:ring-0 focus:ring-offset-0 bg-transparent justify-end">
        <MenubarMenu>
          <MenubarTrigger className="w-20 h-12 justify-end data-[state=open]:bg-transparent data-[state=closed]:bg-transparent">
            <ChevronDown className="h-5 w-5" />
          </MenubarTrigger>
          <MenubarContent className="mx-2">
            {options.map((option) => (
              <MenubarItem
                key={option.href}
                disabled={option.disabled}
                className="text-primary"
              >
                <Link href={option.href} className="flex gap-2">
                  <option.icon className="h-5 w-5 text-zinc-500" />
                  {option.label}
                </Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
