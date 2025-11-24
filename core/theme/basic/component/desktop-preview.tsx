'use client'
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import BasicFormPreview from "../ui-preview"
import { Laptop } from "lucide-react"
import { useState } from "react"
import { useBasicFormStore } from "../basic-store"

export function DesktopPreview() {
  const [isOpen, setIsOpen] = useState(false)
  const event = useBasicFormStore((state) => state.formData)

  return (
    <div className="">
      <button onClick={() => setIsOpen(true)} className="p-2 cursor-pointer bg-[#f5f5f5] rounded-md">
        <Laptop />
      </button>
      <Dialog open={isOpen} onOpenChange={setIsOpen} >
        <DialogContent className="h-screen w-screen! max-w-screen! max-h-screen px-6 rounded-none! py-0!">
          <div className="max-w-xl mx-auto overflow-y-auto">
            <BasicFormPreview event={event} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
