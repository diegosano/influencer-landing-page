import { Carousel, CarouselProps } from "@/components/ui/Carousel"
import { TextContent, TextContentProps } from "@/components/ui/TextContent"

export interface IntroProps {
  textContent: TextContentProps
  carousel: CarouselProps
}

export function Intro({ carousel, textContent }: IntroProps) {
  return (
    <div className="relative flex flex-col gap-20 overflow-hidden py-20">
      <div className="absolute bottom-0 left-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 translate-y-1/2 bg-background-blur lg:h-[2000px] lg:w-[2000px]"></div>

      <TextContent
        title={textContent.title}
        alignment={textContent.alignment}
        darkMode={textContent.darkMode}
        link={textContent.link}
        paragraphs={textContent.paragraphs}
      />

      <div>
        <Carousel cards={carousel.cards} from={carousel.from} />
      </div>
    </div>
  )
}
