import { Button } from '@/components/ui/button'
import Counter from './count'
import { NavBar } from '@/components/navbar'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
   <main>
    <div className='mx-8 my-4'>
      <NavBar />
    </div>
    <Separator decorative className='mt-4 h-[1px]'/>
   </main>
  )
}
