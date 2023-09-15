import Link from 'next/link'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { ChevronDown, Option, Settings, User } from 'lucide-react'

interface DropDownOptions {
  label: string
  href: string
  icon: React.FC
}

const options = [
  { label: 'Profile', href: '/profile', icon: User },
  { label: 'Preferences', href: '/preferences', icon: Option },
  { label: 'Settings', href: '/settings', icon: Settings },
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
              <Link key={option.href} href={option.href}>
                <MenubarItem className="gap-4 text-primary">
                  <option.icon className="h-5 w-5 text-zinc-500" />
                  {option.label}
                </MenubarItem>
              </Link>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      {/* <Select>
        <SelectTrigger className="w-24 border-0 focus:ring-0 focus:ring-offset-0 bg-transparent justify-end"></SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Abhinand</SelectLabel>
            <SelectItem value="apple">Profile</SelectItem>
            <SelectItem value="banana">View Appointments</SelectItem>
            <SelectItem value="blueberry">Payments</SelectItem>
            <SelectItem value="grapes">Help</SelectItem>
            <SelectItem value="pineapple">Settings</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select> */}
    </div>
  )
}
