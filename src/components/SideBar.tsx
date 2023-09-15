import Image from 'next/image'
import Logo from '../../public/logo.jpg'
import { Roboto } from 'next/font/google'
import { SideNav } from './SideNav'

const inter = Roboto({ weight: '500', subsets: ['latin'] })

export const SideBar = () => {
  return (
    <div className="flex flex-col px-2 my-4">
      <div className="header flex justify-center items-center gap-4 text-xl font-bold">
        <Image src={Logo} width={40} height={40} alt="Medconnect Logo" />
        <h2 className={inter.className}>MedConnect</h2>
      </div>
      <SideNav />
    </div>
  )
}
