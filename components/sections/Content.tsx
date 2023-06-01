import { Carousel, CarouselProps } from "@/components/ui/Carousel"
import { TextContent, TextContentProps } from "@/components/ui/TextContent"
import { Icon, IconsNames } from "@/components/Icon"

export interface ContentProps {
  iconName: IconsNames
  textContent: TextContentProps
  carousel: CarouselProps
}

export function Content({ iconName, textContent, carousel }: ContentProps) {
  return (
    <div className="relative flex flex-col gap-10 bg-secondary-900 pb-10 pt-14">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-900 p-4">
        <Icon size="md" className="text-neutral-50" iconName={iconName} />
      </div>

      <div>
        <TextContent
          title={textContent.title}
          alignment={textContent.alignment}
          darkMode={textContent.darkMode}
          link={textContent.link}
          paragraphs={textContent.paragraphs}
        />
      </div>

      <div>
        <Carousel cards={carousel.cards} from={carousel.from} />
      </div>
    </div>
  )
}
