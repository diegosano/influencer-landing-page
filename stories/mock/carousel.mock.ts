
import { faker } from '@faker-js/faker'

import { getImage, getRandomIconName } from '@/stories/mock/helper'
import { CarouselCardProps } from '@/components/ui/Carousel/CarouselCard'
import { CarouselProps } from '@/components/ui/Carousel'

const getFrame = () => {
  const iconName = getRandomIconName()
  return {
    iconName,
    paragraph: faker.lorem.words({ min: 3, max: 20 }),
  }
}

export const getCarouselCard = (withFrame: boolean = false): CarouselCardProps => ({
  image: getImage(),
  frame: withFrame ? getFrame() : undefined,
  link: faker.internet.url(),
})

export const CarouselLeftMock: CarouselProps = {
  from: 'left',
  cards: [
    getCarouselCard(),
    getCarouselCard(),
    getCarouselCard(),
    getCarouselCard(),
  ],
}

export const CarouselRightMock: CarouselProps = {
  from: 'right',
  cards: [
    getCarouselCard(),
    getCarouselCard(),
    getCarouselCard(),
    getCarouselCard(),
  ],
}

export const CarouselLeftFrameMock: CarouselProps = {
  from: 'left',
  cards: [
    getCarouselCard(true),
    getCarouselCard(true),
    getCarouselCard(true),
    getCarouselCard(true),
  ],
}

export const CarouselRightFrameMock: CarouselProps = {
  from: 'right',
  cards: [
    getCarouselCard(true),
    getCarouselCard(true),
    getCarouselCard(true),
    getCarouselCard(true),
  ],
}
