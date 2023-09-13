import { Input } from "@/components/ui/input"
import { Search, Bell } from "lucide-react"
import { Separator } from "./ui/separator"
import { UserAvatar } from "./UserAvatar"
import { SelectDemo } from "./UserDropdown"

export const NavBar = () => {
  return (
    <nav>
        <div className="relative flex items-center justify-between gap-4">
            <Input type="text" placeholder="Search by doctor's name/speciality etc" className="pl-10 max-w-[450px]"/>
            <Search className="absolute top-2 left-2 h-5 w-5 "/>
            <div className="relative flex items-center gap-4 h-[45px] pr-8">
                <Bell className="h-6 w-6 cursor-pointer" />
                <Separator orientation="vertical" decorative/>
                <UserAvatar/>
                <SelectDemo/>
            </div>
        </div> 
    </nav>
  )
}
