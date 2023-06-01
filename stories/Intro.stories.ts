import type { Meta } from '@storybook/react';

import type { StoryObjWithProps } from '@/types/storybook'
import { Intro as IntroComponent, IntroProps } from '@/components/sections/Intro';
import { IntroMock } from './mock/intro.mock';

const meta: Meta<typeof IntroComponent> = {
  title: 'Sections/Intro',
  component: IntroComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjWithProps<typeof IntroComponent, IntroProps>

export const Intro: Story = {
  args: IntroMock,
}
