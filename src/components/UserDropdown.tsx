import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <div className="absolute right-0">
        <Select>
        <SelectTrigger className="w-24 border-0 focus:ring-0 focus:ring-offset-0 bg-transparent justify-end">
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
            <SelectLabel>Abhinand</SelectLabel>
            <SelectItem value="apple">Profile</SelectItem>
            <SelectItem value="banana">View Appointments</SelectItem>
            <SelectItem value="blueberry">Payments</SelectItem>
            <SelectItem value="grapes">Help</SelectItem>
            <SelectItem value="pineapple">Settings</SelectItem>
            </SelectGroup>
        </SelectContent>
        </Select>
    </div>
  )
}
