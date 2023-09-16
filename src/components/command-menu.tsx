'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

import { doctors } from '@/app/page'
import Image from 'next/image'

export function CommandMenu({ ...props }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          'mt-12 w-full relative justify-start text-sm text-muted-foreground'
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline">Search Doctors...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Enter doctor name..."
          className="text-black"
        />
        <CommandList>
          <CommandEmpty>No doctors found.</CommandEmpty>
          <CommandGroup heading="Doctors">
            {doctors.map((doctor) => (
              <CommandItem
                key={doctor.id}
                value={doctor.name}
                className="text-black gap-2 ml-2"
              >
                <Image
                  src={doctor.image}
                  width={36}
                  height={36}
                  className="rounded-full aspect-square"
                  alt={`${doctor.name} profile picture`}
                />
                {doctor.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
