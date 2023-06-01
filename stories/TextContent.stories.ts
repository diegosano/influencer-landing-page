import type { Meta } from '@storybook/react';

import type { StoryObjWithProps } from '@/types/storybook'
import { TextContent, TextContentProps } from '@/components/ui/TextContent';
import { TextContentCenterMock, TextContentLeftDarkMock, TextContentLeftMock, TextContentRightMock } from './mock/textContent.mock';

const meta: Meta<typeof TextContent> = {
  title: 'Components/TextContent',
  component: TextContent,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjWithProps<typeof TextContent, TextContentProps>

export const TextContentLeft: Story = {
  args: TextContentLeftMock,
}

export const TextContentCenter: Story = {
  args: TextContentCenterMock,
}

export const TextContentRight: Story = {
  args: TextContentRightMock,
}
export const TextContentLeftDark: Story = {
  args: TextContentLeftDarkMock,
}
