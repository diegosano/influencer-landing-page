import Link from "next/link"
import clsx from "clsx"

import { Button } from "@/components/ui/Button"
import { Icon, IconsNames } from "@/components/Icon"

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
      {links.map((link) => (
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
              {iconName && <Icon size="sm" iconName={iconName} />}
              <span className="text-sm font-light">{link.title}</span>
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  )
}
