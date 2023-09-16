'use client'

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { SideBar } from './SideBar'

export default function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'ghost'} size={'icon'} className="w-6 h-6 md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={'left'}
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <SideBar />
      </SheetContent>
    </Sheet>
  )
}
