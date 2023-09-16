import Image from 'next/image'
import { Roboto } from 'next/font/google'

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Logo from '../../public/logo.jpg'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { SideBar } from './SideBar'

const roboto = Roboto({ weight: '500', subsets: ['latin'] })

export default function NavBar() {
  return (
    <div className="md:hidden flex w-full justify-between items-center px-6 py-4">
      <div className="header flex justify-center items-center gap-4 text-xl font-bold">
        <Image src={Logo} width={40} height={40} alt="Medconnect Logo" />
        <h2 className={roboto.className}>MedConnect</h2>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={'ghost'} size={'icon'} className="w-6 h-6 md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SideBar />
        </SheetContent>
      </Sheet>
    </div>
  )
}
