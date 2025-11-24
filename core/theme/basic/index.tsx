'use client'
import { cn } from "@/lib/utils"
import BasicFormPreview from "./ui-preview"
import BasicForm from "./form"
import { DesktopPreview } from "./component/desktop-preview"
import { Card, CardContent } from "@/components/ui/card"
import { useBasicFormStore } from "./basic-store"

export function BasicTheme({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const event = useBasicFormStore((state) => state.formData)

  return (
    <div className={cn("flex  w-full  flex-1 flex-cold gap-6 py-5", className)} {...props}>
      <BasicForm />
      <div className="flex gap-1">
        <Card className="p-0 w-[425px] mx-auto h-[90vh] overflow-y-auto relative">
          <CardContent className="max-w-xl mx-auto overflow-y-auto p-0">
            <BasicFormPreview event={event} />
          </CardContent>
        </Card>
        <DesktopPreview />
      </div>
    </div>
  )
}
