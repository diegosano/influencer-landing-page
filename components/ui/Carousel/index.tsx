import { useMemo } from "react"
import { FreeMode, Mousewheel } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import type { SwiperOptions } from "swiper/types"

import { CarouselCard, type CarouselCardProps } from "./CarouselCard"
import "swiper/css"

const breakpoints: SwiperOptions["breakpoints"] = {
  1: {
    slidesPerView: 1,
    spaceBetween: 16,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 24,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
}

export interface CarouselProps {
  cards: CarouselCardProps[]
  from?: "left" | "right"
}

export function Carousel({ cards, from = "right" }: CarouselProps) {
  const initialSlide = useMemo(
    () => (from === "left" ? cards.length - 1 : 0),
    [cards.length, from]
  )

  return (
    <Swiper
      className="!px-10"
      breakpoints={breakpoints}
      modules={[Mousewheel, FreeMode]}
      initialSlide={initialSlide}
      freeMode={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      mousewheel={{
        forceToAxis: true,
      }}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.link}>
          <CarouselCard
            image={card.image}
            link={card.link}
            frame={card.frame}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
