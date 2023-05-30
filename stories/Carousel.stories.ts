import type { Meta } from '@storybook/react';

import type { StoryObjWithProps } from '@/types/storybook'
import { Carousel, CarouselProps } from '@/components/ui/Carousel'
import { CarouselLeftFrameMock, CarouselLeftMock, CarouselRightFrameMock, CarouselRightMock } from './mock/carousel.mock';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjWithProps<typeof Carousel, CarouselProps>

export const CarouselLeft: Story = {
  args: CarouselLeftMock,
}

export const CarouselRight: Story = {
  args: CarouselRightMock,
}

export const CarouselLeftFrame: Story = {
  args: CarouselLeftFrameMock,
}

export const CarouselRightFrame: Story = {
  args: CarouselRightFrameMock,
}
