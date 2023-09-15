import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const UserAvatar = () => {
  return (
    <Avatar className="cursor-pointer bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <AvatarImage
        className="h-full w-full rounded-[inherit] object-cover"
        src="https://mrcode.az/media/ready-to-start/docman/assets/img/doctors/doctor-thumb-02.jpg"
        alt="Colm Tuite"
      />
      <AvatarFallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        CT
      </AvatarFallback>
    </Avatar>
  )
}
