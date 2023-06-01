import NextImage from "next/image"
import Link from "next/link"

import { Image } from "@/types/media"
import { Button } from "@/components/ui/Button"
import { Icon, IconsNames } from "@/components/Icon"

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
        {socialMedias.map((socialMedia) => (
          <Button asChild className="p-0">
            <Link href={socialMedia.link}>
              <Icon iconName={socialMedia.iconName} size="sm" />
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  )
}
