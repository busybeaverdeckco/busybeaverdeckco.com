import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full min-h-0 resize-y rounded-md border border-input bg-black/25 px-4 py-3 text-base leading-relaxed text-bone outline-none transition-colors placeholder:italic placeholder:text-bone/30 focus-visible:border-ring focus-visible:bg-black/35 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
