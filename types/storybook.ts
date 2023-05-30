import type { StoryObj } from '@storybook/react';

export type StoryObjWithProps<
  Component,
  Props = undefined
> = StoryObj<Component> & {
  args: Props
}
