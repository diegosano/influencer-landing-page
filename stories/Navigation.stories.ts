import type { Meta } from '@storybook/react';

import type { StoryObjWithProps } from '@/types/storybook'
import { Navigation as NavigationComponent, NavigationProps } from '@/components/sections/Navigation';
import { NavigationMock } from './mock/navigation.mock';

const meta: Meta<typeof NavigationComponent> = {
  title: 'Sections/Navigation',
  component: NavigationComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjWithProps<typeof NavigationComponent, NavigationProps>

export const Navigation: Story = {
  args: NavigationMock,
}
