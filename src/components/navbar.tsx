import { Search, Bell, Menu } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { UserAvatar } from './UserAvatar'
import { UserMenu } from './UserDropdown'

export const NavBar = () => {
  return (
    <nav className="px-4 md:px-8 py-3 md:py-4">
      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <Button variant={'ghost'} size={'icon'} className="w-6 h-6 md:hidden">
            <Menu />
          </Button>
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 max-w-[450px]"
          />
          <Search className="absolute top-3 left-12 md:left-2 h-5 w-5 " />
        </div>
        <div className="relative flex items-center gap-4 h-[45px] pr-8">
          <Bell className="h-6 w-6 cursor-pointer" />
          <Separator
            orientation="vertical"
            decorative
            className="w-[1px] bg-zinc-400"
          />
          <UserAvatar />
          <UserMenu />
        </div>
      </div>
    </nav>
  )
}
