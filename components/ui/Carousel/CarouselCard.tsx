import NextImage from "next/image"
import Link from "next/link"

import { Image } from "@/types/media"
import { Icons, IconsNames } from "@/components/Icons"

export interface CarouselCardProps {
  frame?: {
    iconName?: IconsNames
    paragraph: string
  }
  image: Image
  link: string
}

export function CarouselCard({ frame, image, link }: CarouselCardProps) {
  const Icon = frame?.iconName ? Icons[frame.iconName] : null
  return (
    <Link href={link} className="block h-[280px] max-w-[500px]">
      <div className="relative h-full overflow-hidden rounded-2xl">
        <NextImage
          className="absolute -z-10 h-full w-full object-cover"
          src={image.url}
          alt={image.alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />

        {frame && (
          <div className="absolute inset-0 flex opacity-0 transition duration-500 hover:opacity-100">
            <div className="relative grow">
              {Icon && (
                <div className="absolute left-0 top-0">
                  <div className="relative">
                    <div className="absolute h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 bg-radial-blur"></div>
                    <Icon
                      className="absolute left-3 top-3 text-neutral-50"
                      size={16}
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-linear-blur px-3 pb-3 pt-5 text-neutral-50">
                <span className="text-xxs font-light">{frame.paragraph}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
