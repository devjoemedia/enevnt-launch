"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function BasicRegistration({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="h-screen w-screen max-w-screen max-h-screen px-6">
        <div className="mx-auto w-full max-w-xl">
          <DrawerHeader>
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Registeration </h1>
              <p className="text-muted-foreground text-sm text-balance">
                Enter your event details below
              </p>
            </div>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <form className="p-6 md:p-8">
              <FieldGroup>
                <Field>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    className="py-6"
                  />
                </Field>
                <Field>
                  <Input
                    type="email"
                    name="email"
                    placeholder="you@elaunch.com"
                    required
                    className="py-6"
                  />
                </Field>
                <Field>
                  <Input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    required
                    className="py-6"
                  />
                </Field>
                <div>
                </div>
              </FieldGroup>
            </form>
          </div>
          <DrawerFooter>
            <button type="submit" className='bg-[#FB640D] w-full text-white px-4 py-3.5! rounded-full mt-5'>
              Save
            </button>
            <button onClick={() => setIsOpen(false)} type="submit" className='bg-white  border border-gry-100 w-full px-4 py-3.5! rounded-full mt-5'>
              Cancel
            </button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
