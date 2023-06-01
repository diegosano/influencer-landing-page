import NextImage from "next/image"
import Link from "next/link"

import { Image } from "@/types/media"
import { Button } from "@/components/ui/Button"
import { Icons, IconsNames } from "@/components/Icons"

export interface NavigationProps {
  socialMedias: {
    iconName: IconsNames
    link: string
  }[]
  profilePicture: Image
}

export function Navigation({ socialMedias, profilePicture }: NavigationProps) {
  return (
    <nav className="flex items-center justify-between bg-neutral-50 px-6 py-4 shadow-md">
      <div className="overflow-hidden rounded-full">
        <NextImage
          className="h-16 w-16 object-cover"
          src={profilePicture.url}
          alt={profilePicture.alt}
          width={64}
          height={64}
        />
      </div>

      <div className="flex gap-4">
        {socialMedias.map((socialMedia) => {
          const Icon = Icons[socialMedia.iconName]
          return (
            <Button asChild>
              <Link href={socialMedia.link}>
                <Icon size={16} width={16} height={16} />
              </Link>
            </Button>
          )
        })}
      </div>
    </nav>
  )
}
