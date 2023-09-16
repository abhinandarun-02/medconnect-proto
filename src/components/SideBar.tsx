import Image from 'next/image'
import Logo from '../../public/logo.jpg'
import { Roboto } from 'next/font/google'
import { SideNav } from '@/components/SideNav'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Menu, Search } from 'lucide-react'

const inter = Roboto({ weight: '500', subsets: ['latin'] })

export const SideBar = () => {
  return (
    <div className="flex flex-col px-2 my-4">
      <div className="header flex justify-center items-center gap-4 text-xl font-bold">
        <Image src={Logo} width={40} height={40} alt="Medconnect Logo" />
        <h2 className={inter.className}>MedConnect</h2>
      </div>
      <div className="relative mt-8 w-full flex items-center gap-5 px-2">
        <Input
          type="text"
          placeholder="Search..."
          className="pl-10 w-full max-w-[450px] focus-visible:ring-0  focus-visible:ring-offset-0"
        />
        <Search className="absolute left-4 h-5 w-5" />
      </div>
      <SideNav />
    </div>
  )
}
