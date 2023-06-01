import { useMemo } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

type AlignmentTypes = "left" | "center" | "right"

const textContentAlignments: { [key in AlignmentTypes]: [string, string] } = {
  left: ["items-start", "text-left"],
  center: ["items-center", "text-center"],
  right: ["items-end", "text-right"],
}

export interface TextContentProps {
  title: string
  paragraphs?: string[]
  alignment?: AlignmentTypes
  link?: {
    to: string
    title: string
  }
  darkMode?: boolean
}

export function TextContent({
  title,
  paragraphs,
  link,
  alignment = "left",
  darkMode = false,
}: TextContentProps) {
  const textClasses = useMemo(() => {
    const classes = [textContentAlignments[alignment][1]]

    if (darkMode) {
      classes.push("text-neutral-50")
    }

    return classes
  }, [alignment, darkMode])

  return (
    <div
      className={`flex flex-col gap-4 ${textContentAlignments[alignment][0]}`}
    >
      <h2 className={cn(textClasses)}>{title}</h2>

      {paragraphs && (
        <>
          {paragraphs?.map((paragraph, index) => (
            <p className={cn(textClasses)} key={index}>
              {paragraph}
            </p>
          ))}
        </>
      )}

      {link && (
        <Button asChild variant={darkMode ? "filled-dark" : "filled"}>
          <Link href={link.to}>{link.title}</Link>
        </Button>
      )}
    </div>
  )
}
