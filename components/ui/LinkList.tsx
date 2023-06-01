import Link from "next/link"
import clsx from "clsx"

import { Button } from "@/components/ui/Button"
import { Icons, IconsNames } from "@/components/Icons"

export interface LinkListProps {
  links: {
    to: string
    title: string
  }[]
  iconName?: IconsNames
  darkMode?: boolean
}

export function LinkList({ links, iconName, darkMode = false }: LinkListProps) {
  return (
    <ul className="ml-6 flex flex-col gap-4">
      {links.map((link) => {
        const Icon = iconName && Icons[iconName]

        return (
          <li key={link.to}>
            <Button asChild>
              <Link
                href={link.to}
                className={clsx(
                  "flex w-fit items-center gap-4 transition hover:translate-x-1",
                  {
                    "text-neutral-50": darkMode,
                  }
                )}
              >
                {Icon && <Icon size={24} width={24} height={24} />}
                <span className="text-sm font-light">{link.title}</span>
              </Link>
            </Button>
          </li>
        )
      })}
    </ul>
  )
}
