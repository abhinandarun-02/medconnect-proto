import { Search, Bell, Menu } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { UserAvatar } from './UserAvatar'
import { UserMenu } from './UserDropdown'

export const NavBar = () => {
  return (
    <nav className="bg-foreground px-4 md:px-8 py-3 md:py-4">
      <div className="relative flex items-center justify-between gap-4">
        <div className="w-full flex items-center gap-5">
          <Button variant={'ghost'} size={'icon'} className="w-6 h-6 md:hidden">
            <Menu />
          </Button>
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 w-full max-w-[450px] focus-visible:ring-0  focus-visible:ring-offset-0"
          />
          <Search className="absolute top-3 left-12 md:left-2 h-5 w-5" />
        </div>
        <div className="relative flex items-center gap-4 h-[45px] pr-8">
          <Bell className="h-6 w-6 cursor-pointer" />
          <Separator
            orientation="vertical"
            decorative
            className="w-[1px] bg-zinc-400"
          />
          <UserAvatar
            name="John Doe"
            image="https://mrcode.az/media/ready-to-start/docman/assets/img/doctors/doctor-thumb-02.jpg"
          />
          <UserMenu />
        </div>
      </div>
    </nav>
  )
}
