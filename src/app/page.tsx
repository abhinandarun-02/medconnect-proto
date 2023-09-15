import { SideBar } from '@/components/SideBar'
import { NavBar } from '@/components/NavBar'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <main className="flex">
      <div className="sidebar hidden md:flex flex-col bg-foreground w-[300px] h-screen">
        <SideBar />
      </div>
      <div className="w-full">
        <NavBar />
        <Separator decorative className="mt-4 h-[1px]" />
      </div>
    </main>
  )
}
