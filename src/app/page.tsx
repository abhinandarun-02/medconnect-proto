import { UserAvatar } from '@/components/UserAvatar'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'

import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { doctors } from '@/data/doctors'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="px-8 py-12">
      <div
        className={cn(
          'p-6 pb-12 bg-foreground rounded-2xl drop-shadow-md',
          inter.className
        )}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-lg">Top Doctors</h1>
          <Button
            variant={'link'}
            className="text-blue-500 font-medium text-base"
          >
            View All
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-4 w-full grid justify-items-center grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 ">
          {doctors.map((doctor) => (
            <Link
              key={doctor.id}
              href=""
              className="group h-32 p-4 flex w-full md:max-w-[400px] items-center justify-between gap-6 rounded-md bg-background hover:bg-zinc-200 drop-shadow border"
            >
              <UserAvatar
                name={doctor.name}
                image={doctor.image}
                className="w-[72px] h-[72px] group-hover:scale-125 transition-all"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-medium">{doctor.name}</h2>
                <h3 className="font-normal text-sm text-zinc-500">
                  {doctor.speciality}
                </h3>
                <div className="flex items-center gap-2 font-extralight text-zinc-600">
                  <Star className="w-4 h-4 hover:fill-yellow-400" />
                  <p>5.0</p>
                  <p className="font-bold align-middle">.</p>
                  <p>{doctor.noOfReviews}+ Reviews</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 self-end mb-2 group-hover:text-blue-500 group-hover:scale-125" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
