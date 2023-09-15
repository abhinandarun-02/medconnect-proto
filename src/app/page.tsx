import { UserAvatar } from '@/components/UserAvatar'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'

import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

interface doctorProps {
  id: number
  name: string
  speciality: string
  image: string
  rating: number
  noOfReviews: number
}

const doctors: doctorProps[] = [
  {
    id: 1,
    name: 'Dr. John Doe',
    speciality: 'Dental Specialist',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    rating: 5.0,
    noOfReviews: 200,
  },
  {
    id: 2,
    name: 'Dr. Darlene Robertson',
    speciality: 'Heart Specialist',
    image:
      'https://images.unsplash.com/photo-1641723345378-a701b30b2d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    rating: 4.5,
    noOfReviews: 40,
  },
  {
    id: 3,
    name: 'Dr. Darekk Steward',
    speciality: 'Neuro Surgeon',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 3.8,
    noOfReviews: 60,
  },
  {
    id: 4,
    name: 'Dr. Cameroon Williamson',
    speciality: 'Cardiologist',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.6,
    noOfReviews: 80,
  },
]

export default function Home() {
  return (
    <div className="px-8 py-12">
      <div
        className={cn(
          'p-6 pb-12 bg-foreground w-[850px] rounded-2xl',
          inter.className
        )}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-semibold">Top Doctors</h1>
          <Button variant={'link'} className="text-blue-500 font-medium">
            View All
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {doctors.map((doctor) => (
            <Link key={doctor.id} href="">
              <div className=" h-32 p-4 flex w-full items-center gap-6 rounded-md bg-background hover:bg-zinc-200">
                <UserAvatar
                  name={doctor.name}
                  image={doctor.image}
                  className="w-[72px] h-[72px]"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-medium">{doctor.name}</h2>
                  <h3 className="font-normal text-sm text-zinc-500">
                    {doctor.speciality}
                  </h3>
                  <div className="flex items-center gap-2 font-extralight text-zinc-600">
                    <Star className="w-4 h-4" />
                    <p>5.0</p>
                    <p className="font-bold align-middle">.</p>
                    <p>{doctor.noOfReviews}+ Reviews</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 self-end mb-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
