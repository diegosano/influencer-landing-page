import type { Meta } from '@storybook/react';

import type { StoryObjWithProps } from '@/types/storybook'
import { LinkList as LinkListComponent, LinkListProps } from '@/components/ui/LinkList';
import { LinkListDarkMock, LinkListMock } from './mock/linkList.mock';

const meta: Meta<typeof LinkListComponent> = {
  title: 'Components/LinkList',
  component: LinkListComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjWithProps<typeof LinkListComponent, LinkListProps>

export const LinkList: Story = {
  args: LinkListMock,
}

export const LinkListDark: Story = {
  args: LinkListDarkMock,
}
